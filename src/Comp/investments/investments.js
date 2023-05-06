import React from "react";

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

const Investments = () => {
  const items = [
    { imgSrc: require("./equity.svg").default, buttonText: "Button" },
    { imgSrc: require("./equity.svg").default, buttonText: "Button" },
    { imgSrc: require("./equity.svg").default, buttonText: "Button" },
    { imgSrc: require("./equity.svg").default, buttonText: "Button" },
    { imgSrc: require("./equity.svg").default, buttonText: "Button" },
    { imgSrc: require("./equity.svg").default, buttonText: "Button" },
    { imgSrc: require("./equity.svg").default, buttonText: "Button" },
    { imgSrc: require("./equity.svg").default, buttonText: "Button" },
    { imgSrc: require("./equity.svg").default, buttonText: "Button" },
    { imgSrc: require("./equity.svg").default, buttonText: "Button" },
    { imgSrc: require("./equity.svg").default, buttonText: "Button" },
    { imgSrc: require("./equity.svg").default, buttonText: "Button" },
    { imgSrc: require("./equity.svg").default, buttonText: "Button" },
    { imgSrc: require("./equity.svg").default, buttonText: "Button" },
    { imgSrc: require("./equity.svg").default, buttonText: "Button" },
    { imgSrc: require("./equity.svg").default, buttonText: "Button" },
  ];

  return (
      <div className="p-5 flex bg-slate-300 flex-wrap justify-center">
        {items.map(({ imgSrc, buttonText }, index) => (
          <div key={index} className="mx-6 px-4 mb-4">
            <InvestmentItem imgSrc={imgSrc} buttonText={buttonText} />
          </div>
        ))}
      </div>
  );
};

export default Investments;
