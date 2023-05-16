import React, { useState } from "react";
import Chart from "react-apexcharts";

import {
  BsPieChartFill,
  BsGraphUpArrow,
  BsFileEarmarkPdf,
} from "react-icons/bs";

const LinkItem = ({ link, icon, text, isActive, onClick }) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <a
      href={link}
      className={`flex items-center px-2 py-1 ${
        isActive ? " border-b-2 text-blue-900 border-gray-800" : "text-gray-500"
      } ${hovered ? "" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{ textDecoration: "none" }}
    >
      {icon}
      <div
        className={`font-bold ${
          isActive ? "text-blue-900" : "text-gray-500"
        } px-2 text-2xl`}
      >
        {text}
      </div>
    </a>
  );
};

const Portfolio = () => {
  const [activeIndex1, setActiveIndex1] = useState(null);
  const [activeIndex2, setActiveIndex2] = useState(null);

  const handleClick1 = (index) => {
    setActiveIndex1(index);
  };
  const handleClick2 = (index) => {
    setActiveIndex2(index);
  };

  return (
    <div>
      <div className="flex border-b-2 border-gray-400 flex-wrap gap-3 mt-4 ml-4">
        <LinkItem
          link={"#"}
          icon={<BsPieChartFill />}
          text="Portfolio Overview"
          isActive={activeIndex1 === 0}
          onClick={() => handleClick1(0)}
        />
        <LinkItem
          link={"#"}
          icon={<BsGraphUpArrow />}
          text="Portfolio Overview"
          isActive={activeIndex1 === 1}
          onClick={() => handleClick1(1)}
        />
        <LinkItem
          link={"#"}
          icon={<BsFileEarmarkPdf />}
          text="Portfolio Overview"
          isActive={activeIndex1 === 2}
          onClick={() => handleClick1(2)}
        />
      </div>
      <div className="flex border-b-2 border-gray-400 flex-wrap gap-3 mt-4 ml-4">
        <LinkItem
          link={"#"}
          text="All"
          isActive={activeIndex2 === 0}
          onClick={() => handleClick2(0)}
        />
        <LinkItem
          link={"#"}
          text="Mutual Funds"
          isActive={activeIndex2 === 1}
          onClick={() => handleClick2(1)}
        />
      </div>
      <div className="flex justify-center m-6 gap-8 flex-wrap">
        <div class="grid mt-4 gap-6">
          <div class="px-10 py-2 border border-gray-300 rounded bg-white text-gray-700 shadow-lg">
            <div className="text-center text-2xl font-bold">Investments</div>
          </div>
          <div class="px-6  border border-gray-300 rounded bg-white text-gray-700 shadow-lg">
            <div className="text-center text-2xl font-bold">Current Value</div>
          </div>
          <div class="px-6 border border-gray-300 rounded bg-white text-gray-700 shadow-lg">
            <div className="text-center text-2xl font-bold">Unrealized </div>
            <div className="text-center text-2xl font-bold">Gain/Loss</div>
          </div>
        </div>

        <Chart
          type="donut"
          width={1000}
          height={450}
          series={[100]} //a.percentage of each fund
          options={{
            dataLabels: {
              enabled: true,
            },
            colors: ["#4472C4"],
            legend: {
              show: true,
              position: "right",
              itemMargin: {
                horizontal: 5,
                vertical: 200,
              },
              onItemClick: {
                toggleDataSeries: true,
              },
              onItemHover: {
                highlightDataSeries: true,
              },
              fontSize: "14px",
              markers: {
                width: 14,
                height: 14,
                strokeWidth: 0,
                strokeColor: "#375DA1",
                fillColors: undefined,
                radius: 16,
                customHTML: undefined,
                onClick: undefined,
                offsetX: 0,
                offsetY: 0,
              },
              horizontalAlign: "center",
            },
            responsive: [
              {
                breakpoint: 480,
                options: {
                  chart: {
                    width: 300,
                  },
                  legend: {
                    position: "bottom",
                    horizontalAlign: "left",
                  },
                },
              },
            ],
            labels: [
              "a.SBI Equity Fund - Regular Plan - Gr", //a.mutual fund name
            ],
            plotOptions: {
              pie: {
                donut: {
                  labels: {
                    show: true,
                    total: {
                      show: true,
                      fontSize: 12,
                    },
                  },
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default Portfolio;
