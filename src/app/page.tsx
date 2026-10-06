import Marquee from "@/components/Marquee";
import MainNews from "@/app/components/MainNews";

export default async function Home() {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections");
  const data = await res.json();
  const sections = data.data;
  const mainNews = sections[0].articles;


  return (
<div >
<Marquee />
    <div className="grid grid-cols-3 max-w-7xl mx-auto">
      { /* news section */}

              <div className=" col-span-2 ">        < MainNews news = {mainNews}/> </div>

 { /* news section */}
               <div className="bg-black-200  col-span-1 p-10"> </div>
      </div>
</div>
  
  );
}
