import React, { useRef } from "react";
import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Table from "./Table";
import TableB from "./Tablebelow";
const InvestmentItem = ({ imgSrc, buttonText }) => {
  return (
    <div className="item flex flex-col items-center">
      <img className="h-20 w-20 mb-2" src={imgSrc} alt="image" />
      <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
        {buttonText}
      </button>
    </div>
  );
};

const data = [
  "Column 1",
  "Column 2",
  "Column 3",
  "Column 4",
  "Column 5",
  "Column 6",
  "Column 7",
  "Column 8",
  "Column 9",
  "Column 10",
  "Column 11",
  "Column 12",
  "Column 13",
  "Column 14",
  "Column 15",
];

const Investments = () => {
  const items = [
    {
      imgSrc: require("./equity.svg").default,
      buttonText: "Button",
      tabletext: "Multi Cap",
    },
    {
      imgSrc: require("./equity.svg").default,
      buttonText: "Button",
      tabletext: "Large Cap",
    },
    {
      imgSrc: require("./equity.svg").default,
      buttonText: "Button",
      tabletext: "Mid Cap",
    },
    {
      imgSrc: require("./equity.svg").default,
      buttonText: "Button",
      tabletext: "Small Cap",
    },
    {
      imgSrc: require("./equity.svg").default,
      buttonText: "Button",
      tabletext: "Sectoral/Thematic",
    },
    {
      imgSrc: require("./equity.svg").default,
      buttonText: "Button",
      tabletext: "ELSS",
    },
    {
      imgSrc: require("./equity.svg").default,
      buttonText: "Button",
      tabletext: "International",
    },
    {
      imgSrc: require("./equity.svg").default,
      buttonText: "Button",
      tabletext: "Debt",
    },
    {
      imgSrc: require("./equity.svg").default,
      buttonText: "Button",
      tabletext: "Hybrid",
    },
    {
      imgSrc: require("./equity.svg").default,
      buttonText: "Button",
      tabletext: "Value5",
    },
    {
      imgSrc: require("./equity.svg").default,
      buttonText: "Button",
      tabletext: "Value4",
    },
    {
      imgSrc: require("./equity.svg").default,
      buttonText: "Button",
      tabletext: "Value3",
    },
    {
      imgSrc: require("./equity.svg").default,
      buttonText: "Button",
      tabletext: "Value2",
    },
    {
      imgSrc: require("./equity.svg").default,
      buttonText: "Button",
      tabletext: "Value1",
    },
  ];
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

  return (
    <div>
      <div className="p-5 flex bg-slate-300 flex-wrap justify-center">
        {items.map(({ imgSrc, buttonText }, index) => (
          <div key={index} className="mx-6 px-4 mb-4">
            <InvestmentItem imgSrc={imgSrc} buttonText={buttonText} />
          </div>
        ))}
      </div>
      <div>
        <Table data={tableData} />
      </div>
      <div className="mt-4">
        <TableB />
      </div>
    </div>
  );
};

export default Investments;
