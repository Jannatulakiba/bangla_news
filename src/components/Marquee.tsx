import React from 'react';
import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"

interface Headline {
    id: string;
    title: string;
}

const Marquee = async () => {
    let headlines: Headline[] = [];
    try {
        const res = await fetch('https://news-api-v2.vercel.app/api/news?limit=10');
        if (res.ok) {
            const data: { data?: Headline[] } = await res.json();
            headlines = Array.isArray(data.data) ? data.data : [];
        }
    } catch {
        headlines = [];
    }

    return (
        <div className="bg-red-700 text-white">

            <div className="flex max-w-7xl mx-auto">
                <div className="bg-red-800 py-1 px-5 font-bold">সর্বশেষ</div>

            {headlines.length > 0 ? (
                <MarqueeText className="py-1" direction="right" duration={10}>
                    {headlines.map((headline) => (
                        <span key={headline.id}>
                            <span>{headline.title}</span>
                            <span className="mx-5">•</span>
                        </span>
                    ))}
                </MarqueeText>
            ) : (
                <p className="py-1 px-3">এই মুহূর্তে কোনো শিরোনাম নেই</p>
            )}
            </div>
        </div>
    );
};

export default Marquee;