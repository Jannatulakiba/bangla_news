import Image from 'next/image';
import React from 'react';

export interface News {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  imageAlt: string;
}

const MainNews = ({ news }: { news: News[] }) => {
  if (news.length === 0) {
    return <p className="px-4 py-8">এই মুহূর্তে খবর পাওয়া যাচ্ছে না।</p>;
  }

  const [firstNews, ...otherNews] = news;


    return (
        <div className="flex gap-4 ">
            <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <Image width={400} height={400} className="w-full h-48 object-cover"
      src={firstNews.imageUrl}
      alt={firstNews.imageAlt} />
  </figure>
  <div className="card-body">
           <p className='text-red-600 font-semibold'>{firstNews.category}</p>
    <h2 className="card-title">{firstNews.title}</h2>
    <p>{firstNews.description}</p>
    
  </div>
</div>

<div>
  {otherNews.slice(0, 4).map((on) => (
    <div key={on.id} className="card bg-base-100 w-96 shadow-sm my-2">
     <p className='text-red-600 font-semibold'>{firstNews.category}</p>
        <h2 className="card-title">{on.title}</h2>
      
      </div>
   
  ))}
</div>


        </div>
    );
};

export default MainNews;