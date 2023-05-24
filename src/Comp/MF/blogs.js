import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { SearchIcon } from "@heroicons/react/outline";
import Sidebar from "../Sidebar/Sidebar";

const Blogs = () => {
  const [news, setNews] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const searchInputRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        url: "https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete",
        params: {
          q: "tesla",
          region: "US",
        },
        headers: {
          "X-RapidAPI-Key":
            "4f30deea61mshfb6fbc84ac17f2ap102886jsna8ecb6e78c28",
          "X-RapidAPI-Host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        console.log(response.data);
        setNews(response.data.news || []);
      } catch (error) {
        console.error(error);
        // Handle the error
      }
    };

    fetchData();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredNews = news.filter((article) => {
    return article.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const focusSearchInput = () => {
    searchInputRef.current.focus();
  };

  const blurSearchInput = () => {
    if (searchTerm.trim() === "") {
      searchInputRef.current.blur();
    }
  };

  return (
    <div className="flex">
      <div className="w-1/6 hidden md:block z-10">
        <Sidebar />
      </div>
      <div className="container bg-white min-h-screen mb-4 mx-auto">
        <h1 className="text-2xl font-bold mb-4">Latest News</h1>
        <div className="relative">
          <input
            type="text"
            placeholder="Search by topic or keyword"
            value={searchTerm}
            onChange={handleSearch}
            ref={searchInputRef}
            className="w-full p-2 pr-10 mb-4 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onFocus={focusSearchInput}
            onBlur={blurSearchInput}
          />
          <SearchIcon className="absolute top-3 right-3 text-gray-400 w-5 h-5" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {filteredNews.map((article) => (
            <div key={article.uuid} className="bg-white p-4 rounded shadow">
              <img
                src={article.thumbnail.resolutions[0].url}
                alt={article.title}
                className="mb-2"
              />
              <h2 className="text-xl font-bold mb-2">{article.title}</h2>
              <p className="text-gray-600">{article.publisher}</p>
              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Read more
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
