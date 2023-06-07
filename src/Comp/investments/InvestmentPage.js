import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Table from "./Table";
import Sidebar from "../MF/Sidebar/Sidebar";
import TableB from "./Tablebelow";

const data = [
  "Multi Cap",
  "Large & Mid Cap",
  "ELSS",
  "Mid Cap",
  "Dividend Yield",
  "Value",
  "Contra",
  "Focused",
  "Large Cap",
  "Sectoral",
  "Column 11",
  "Column 12",
  "Column 13",
  "Column 14",
  "Column 15",
];

const InvestmentPage = () => {
  const { buttonText } = useParams();
  const [firstNumber, setfirstNumber] = useState(0);
  const [lastNumber, setlastNumber] = useState(10);
  const [selectedItem, setSelectedItem] = useState("Multi Cap");
  const [isOpen, setIsOpen] = useState(false);
  const [currentPosition, setCurrentPosition] = useState(0);
  const [displayData, setDisplayData] = useState(data.slice(0, 7));

  const handleLeftArrowClick = () => {
    setCurrentPosition(currentPosition - 1);
    setDisplayData(data.slice(currentPosition - 1, currentPosition + 6));
  };

  const handleRightArrowClick = () => {
    setCurrentPosition(currentPosition + 1);
    setDisplayData(data.slice(currentPosition + 1, currentPosition + 8));
  };

  const tableData = {
    totalData: data.length,
    currentPosition: currentPosition,
    displayData: displayData,
    handleLeftArrowClick: handleLeftArrowClick,
    handleRightArrowClick: handleRightArrowClick,
  };

  const handlePrevClick = () => {
    if (firstNumber !== 0) {
      setlastNumber(lastNumber - 1);
      setfirstNumber(firstNumber - 1);
    }
  };

  const handleNextClick = () => {
    if (lastNumber !== data.length) {
      setfirstNumber(firstNumber + 1);
      setlastNumber(lastNumber + 1);
    }
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <Sidebar/>
      <p style={{backgroundColor: "lightblue", fontSize: "2em", padding: "0.2em", color: "blue", fontWeight: "bold", textAlign: "center"}}>{buttonText.toUpperCase()}</p>
   
      <div style={{backgroundColor: "white", fontSize: "large" }}>
        
        <div className="hidden md:flex justify-center">
          <div
            onClick={handlePrevClick}
            className="cursor-pointer font-bold hover:text-gray-500 mx-12 py-2 "
            
          >
            Prev
          </div>
          {Object.keys(data)
            .slice(firstNumber, lastNumber)
            .map((key) => (
              <div
                className={`px-4 cursor-pointer transition-transform duration-300 transform-gpu hover:scale-110 py-2 ${
                  selectedItem === data[key]
                    ? "border-b-2 border-orange-500 font-bold"
                    : ""
                }`}
                key={key}
                onClick={() => handleItemClick(data[key])}
              >
                {data[key]}
              </div>
            ))}
          <div
            className="cursor-pointer font-bold mx-12 hover:text-gray-500 py-2"
            onClick={handleNextClick}
          >
            Next
          </div>
        </div>
        <div className="block md:hidden">
          <button
            className="flex items-center text-xl justify-between px-4 py-2 text-gray-800 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            onClick={toggleDropdown}
          >
            Multicap
            <svg
              className={`w-4 h-4 ml-2 transition-transform ${
                isOpen ? "transform rotate-180" : ""
              }`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>

          {isOpen && (
            <div className="absolute overflow-y-auto h-52 z-10 w-50 py-2 mt-1 text-gray-800 bg-white border border-gray-300 rounded-md shadow-lg">
              {Object.keys(data).map((key) => (
                <a
                  href="#"
                  key={key}
                  className="block px-4 py-2 hover:bg-gray-200 hover:text-blue-500"
                >
                  {data[key]}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="mt-4">
        <TableB />
      </div>
    </div>
  );
};

export default InvestmentPage;
