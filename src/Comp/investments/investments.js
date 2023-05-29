import React, { useRef } from "react";
import { Link } from "react-router-dom";

const InvestmentItem = ({ imgSrc, buttonText }) => {
  const formattedButtonText = buttonText.replace(/\s+/g, "").toLowerCase();

  return (
    <Link
      style={{ textDecoration: "none" }}
      to={`/investments/${formattedButtonText}`}
    >
      <div className="item cursor-pointer transition-transform duration-300 transform-gpu hover:scale-110">
        <div className="card-content flex flex-col items-center w-36">
          <img className="h-20 mx-4 my-2 w-20 mb-2" src={imgSrc} alt="image" />
          <div className="text-gray-400 font-bold py-2 uppercase text-center px-auto">
            {buttonText}
          </div>
        </div>
      </div>
    </Link>
  );
};



const Investments = () => {
  const items = [
    {
      imgSrc: require("./assets/equity.svg").default,
      buttonText: "Equity Fund",
      tabletext: "Multi Cap",
    },
    {
      imgSrc: require("./assets/debt.svg").default,
      buttonText: "Debt Fund",
      tabletext: "Large Cap",
    },
    {
      imgSrc: require("./assets/children.svg").default,
      buttonText: "Children Fund",
      tabletext: "Mid Cap",
    },
    {
      imgSrc: require("./assets/monthly_income.svg").default,
      buttonText: "Monthly Income Fund",
      tabletext: "Small Cap",
    },
    {
      imgSrc: require("./assets/equity.svg").default,
      buttonText: "Retirement Fund",
      tabletext: "Sectoral/Thematic",
    },
    {
      imgSrc: require("./assets/equity.svg").default,
      buttonText: "Hybrid Fund",
      tabletext: "ELSS",
    },
    {
      imgSrc: require("./assets/equity.svg").default,
      buttonText: "Sectorial Fund",
      tabletext: "International",
    },
    {
      imgSrc: require("./assets/equity.svg").default,
      buttonText: "Pension Fund",
      tabletext: "Debt",
    },
    {
      imgSrc: require("./assets/equity.svg").default,
      buttonText: "NOF's",
      tabletext: "Hybrid",
    },
    {
      imgSrc: require("./assets/equity.svg").default,
      buttonText: "Retirement Fund",
      tabletext: "Value5",
    },
    {
      imgSrc: require("./assets/equity.svg").default,
      buttonText: "MF + Insurance",
      tabletext: "Value4",
    },
    {
      imgSrc: require("./assets/equity.svg").default,
      buttonText: "Elss Fund",
      tabletext: "Value3",
    },
    {
      imgSrc: require("./assets/equity.svg").default,
      buttonText: "Fund of Fund's",
      tabletext: "Value2",
    },
    {
      imgSrc: require("./assets/equity.svg").default,
      buttonText: "Money Market",
      tabletext: "Value1",
    },
    {
      imgSrc: require("./assets/equity.svg").default,
      buttonText: "All Funds",
      tabletext: "Value1",
    },
  ];

  return (
    <div>
      <div className="p-5 flex flex-wrap justify-center">
        {items.map(({ imgSrc, buttonText }, index) => (
          <div
            key={index}
            className="mx-8 my-2 bg-gray-200 rounded-xl shadow-xl px-6 mb-4"
          >
            <InvestmentItem imgSrc={imgSrc} buttonText={buttonText} />
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Investments;
