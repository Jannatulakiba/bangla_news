import Image from "next/image";

interface News {
  id : string;
  title : string;
  description : string;
  imageUrl : string;
  category : string;
  imageAlt : string;
}   

const NewsCard = ({ news }: { news: News }) => {
    return (
        <article className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <Image
                    src={news.imageUrl}
                    alt={news.imageAlt}
                    width={600}
                    height={600}
                    className="h-48 w-full object-cover"
                />
            </figure>
            <div className="card-body">
                <p className="font-semibold text-red-600">
                    {news.category}</p>
                <h2 className="card-title">
                    {news.title}</h2>
                <p>{news.description}</p>
            </div>
        </article>
    );
};

export default NewsCard;