import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NewsTicker = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
        const response = await axios.get(
            'https://newsapi.org/v2/top-headlines?country=us&apiKey=c3696d115b104837bc276ba9176b86ec'
        );
        setNews(response.data.articles);
        };
        fetchNews();
    }, []);

    return (
        <div className="group w-[42rem] spartan mt-4 bg-gray-900 text-white p-4 rounded-xl border border-white hover:border-pink-500 transiciones">
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-white group-hover:text-pink-500 text-2xl font-semibold transiciones">Latest News</h2>
        </div>
        {news.slice(0, 5).map((article, index) => (
            <div key={index} className="flex mb-4">
            <img src={article.urlToImage} alt={article.title} className="rounded-xl outline outline-white hover:outline-pink-500 h-16 w-16 object-cover mr-4 transiciones" />
            <div>
                <h3 className="text-md font-semibold mb-2">{article.title}</h3>
                <p className="text-sm">{article.description}</p>
            </div>
            </div>
        ))}
        </div>
    );
};

export default NewsTicker;
