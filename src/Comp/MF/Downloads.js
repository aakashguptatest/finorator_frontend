import React, { useState, useEffect } from "react";
import "./Downloads.css";
import Landingpage from "./Landingpage/landingpage";
import Sidebar from "./Sidebar/Sidebar";
import { AiOutlineFolder } from "react-icons/ai";

export default function Downloads() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        setTodos(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div className="flex">
      <div className="hidden md:block w-[5.5%]">
        <Sidebar />
      </div>
      <div className="flex-grow">
        <div className="text-4xl font-bold text-[#EE812D] p-6 bg-opacity-20 bg-[#ED8130]">
          DOWNLOADS
        </div>
        <ul>
          {todos.slice(0, 15).map((item, index) => (
            <li
              key={item.id}
              className={`${
                index % 2 === 0 ? "" : "bg-[#F7F9FD]"
              } flex items-center justify-center py-2 px-4`}
            >
              <div className="mr-11 w-7 h-7">
                <AiOutlineFolder className="w-full h-full" />
              </div>
              <span className="text-slate-950 text-xl font-bold">
                {item.title}
              </span>
              <button className="ml-auto text-sm md:text-xl">
                View in folder
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
