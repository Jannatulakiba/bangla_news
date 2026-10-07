import Marquee from "@/components/Marquee";
import MainNews, { type News } from "@/components/MainNews";
import NewsCard from "@/components/NewsCard";
import MostRead from "@/components/MostRead";
interface IOtherSection {
  curationId: string;
  title: string;
  articles: {
    id: string;
    title: string;
    description: string;
    category: string;
    imageUrl: string;
    imageAlt: string;
  }[];
}


export default async function Home() {
  let sections: IOtherSection[] = [];
  try {
    const res = await fetch("https://news-api-v2.vercel.app/api/news/sections");
    if (res.ok) {
      const data: { data?: IOtherSection[] } = await res.json();
      sections = Array.isArray(data.data) ? data.data : [];
    }
  } catch {
    sections = [];
  }

  const mainNews = sections[0]?.articles ?? [];
  const otherSections : IOtherSection[] = sections.slice(1);


  return (
<div >
<Marquee />
    <div className="grid grid-cols-3 max-w-7xl mx-auto">
      { /* news section */}
 <div className=" col-span-2 ">
          <MainNews news={mainNews} />

          <div className=" grid gap-5 mt-19">
            {otherSections.map((os) => (
              <div
                className=""
                key={os.curationId}
              >
                <h1 className="font-bold border-b-2 pb-1  border-red-700">{os.title}</h1>

                <div className="grid mt-3 grid-cols-3 gap-2">
                  {os.articles.map((news) => (
                  <NewsCard key={news.id} news={news} />
                ))}
                </div>
              </div>
            ))}
                </div>
                </div>  

 { /* news section */}
               <div className="col-span-1   "> 
          <MostRead />
               </div>
      </div>
</div>
  
  );
}
