import React, { useState,useEffect } from "react";
import Lottie from "lottie-react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import a from "./static/assets/undraw_investing_7u74.json";
import b from "./static/assets/135363-mutual-funds-investment.json";
import c from "./static/assets/Comp 1.json";
import d from "./static/assets/142101-easy-loan.json";
import e from "./static/assets/72203-income-tax.json";
import f from "./static/assets/99232-real-estate.json";


export default function SliderSegment() {
  const [index, setIndex] = useState(0);
  const [startIndex, setstartIndex] = useState(0);
  const [endIndex, setendIndex] = useState(3);


  const data = [
    {
      lottie: <Lottie loop={true} animationData={a} style={{ height: 200 }} />,
      title: "Shares & Stocks",
      status: "Coming Soon !",
    },
    {
      lottie: <Lottie loop={true} animationData={b} style={{ height: 200 }} />,
      title: "Mutual Funds",
      status: "Coming Soon !",
    },
    {
      lottie: <Lottie loop={true} animationData={c} style={{ height: 200 }} />,
      title: "Insurance",
      status: "Live Now !",
    },
    {
      lottie: <Lottie loop={true} animationData={d} style={{ height: 200 }} />,
      title: "Loans",
      status: "Coming Soon !",
    },
    {
      lottie: <Lottie loop={true} animationData={e} style={{ height: 200 }} />,
      title: "Income tax",
      status: "Coming Soon !",
    },
    {
      lottie: <Lottie loop={true} animationData={f} style={{ height: 200 }} />,
      title: "Real Estate",
      status: "Coming Soon !",
    },
  ];

  const prevSlide = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
    setstartIndex((prevIndex) =>
      prevIndex - 1
    );
    setendIndex((prevIndex) =>
      prevIndex - 1
    );
  };

  const nextSlide = () => {
    setIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
    setstartIndex((prevIndex) =>
      prevIndex + 1
    );
    setendIndex((prevIndex) =>
      prevIndex + 1
    );
  };

  return (
    <div className="relative max-w-full">
      <div className="flex justify-center items-center">
        <div
          className={`absolute cursor-pointer ${
            startIndex === 0 ? "hidden" : "absolute"
          } z-50 left-32 bg-slate-300 p-2 rounded-full transition-transform duration-300 transform-gpu hover:scale-110 md:left-12 top-1/2  -translate-y-1/2 text-gray-500 hover:text-gray-900 `}
          onClick={prevSlide}
        >
          <ChevronLeftIcon className="h-6 w-6" />
        </div>

        {data.slice(startIndex, endIndex).map((item) => (
          <div key={item.title}>
            <div className="flex flex-wrap justify-content gap-4">
              <div className="bg-white transition-transform duration-300 transform-gpu hover:scale-110 px-12 mx-4 py-2 shadow-xl cursor-pointer rounded-xl text-center">
                <div className="py-3 text-2xl font-bold">{item.title}</div>
                <div>{item.lottie}</div>
                <div className="py-3 text-xl font-bold">{item.status}</div>
              </div>
            </div>
          </div>
        ))}
        <div
          className={`absolute cursor-pointer ${
            endIndex === data.length  ? "hidden" : "absolute"
          } right-32 bg-slate-300 p-2 rounded-full transition-transform duration-300 transform-gpu hover:scale-110 md:right-12 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-900`}
          onClick={nextSlide}
        >
          <ChevronRightIcon className="h-6 w-6" />
        </div>
      </div>
    </div>
  );
}
