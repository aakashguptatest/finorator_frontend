import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Components/MF/Sidebar/Sidebar";
const InvestmentItem = ({ imgSrc, buttonText }) => {
  const formattedButtonText = buttonText.replace(/\s+/g, "").toLowerCase();

  return (
    <Link
      style={{ textDecoration: "none" }}
      to={`/mf/investments/${formattedButtonText}`}
    >
      <div className="transition-transform duration-300 cursor-pointer item transform-gpu hover:scale-110">
        <div className="flex flex-col items-center card-content w-36">
          <img className="w-20 h-20 mx-4 my-2 mb-2" src={imgSrc} alt="" />
          <div className="py-2 font-bold text-center text-gray-400 uppercase px-auto">
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
      imgSrc: require("../assets/svg/equity.svg").default,
      buttonText: "Equity Fund",
      tabletext: "Multi Cap",
    },
    {
      imgSrc: require("../assets/svg/debt.svg").default,
      buttonText: "Debt Fund",
      tabletext: "Large Cap",
    },
    {
      imgSrc: require("../assets/svg/children.svg").default,
      buttonText: "Children Fund",
      tabletext: "Mid Cap",
    },
    {
      imgSrc: require("../assets/svg/monthly_income.svg").default,
      buttonText: "Monthly Income Fund",
      tabletext: "Small Cap",
    },
    {
      imgSrc: require("../assets/svg/equity.svg").default,
      buttonText: "Retirement Fund",
      tabletext: "Sectoral/Thematic",
    },
    {
      imgSrc: require("../assets/svg/equity.svg").default,
      buttonText: "Hybrid Fund",
      tabletext: "ELSS",
    },
    {
      imgSrc: require("../assets/svg/equity.svg").default,
      buttonText: "Sectorial Fund",
      tabletext: "International",
    },
    {
      imgSrc: require("../assets/svg/equity.svg").default,
      buttonText: "Pension Fund",
      tabletext: "Debt",
    },
    {
      imgSrc: require("../assets/svg/equity.svg").default,
      buttonText: "NOF's",
      tabletext: "Hybrid",
    },
    {
      imgSrc: require("../assets/svg/equity.svg").default,
      buttonText: "Retirement Fund",
      tabletext: "Value5",
    },
    {
      imgSrc: require("../assets/svg/equity.svg").default,
      buttonText: "MF + Insurance",
      tabletext: "Value4",
    },
    {
      imgSrc: require("../assets/svg/equity.svg").default,
      buttonText: "Elss Fund",
      tabletext: "Value3",
    },
    {
      imgSrc: require("../assets/svg/equity.svg").default,
      buttonText: "Fund of Fund's",
      tabletext: "Value2",
    },
    {
      imgSrc: require("../assets/svg/equity.svg").default,
      buttonText: "Money Market",
      tabletext: "Value1",
    },
    {
      imgSrc: require("../assets/svg/equity.svg").default,
      buttonText: "All Funds",
      tabletext: "Value1",
    },
  ];

  return (
    <div>
        <Sidebar />
        
      <div className="flex flex-wrap justify-center">
        <div className="flex flex-wrap justify-center p-10 bg-slate-300">
          {items.map(({ imgSrc, buttonText }, index) => (
            <div
              key={index}
              style={{backgroundColor: "white"}}
              className="mx-8 my-2 mb-4 text-lg bg-gray-200 shadow-xl rounded-xl px-7"
              >
              <InvestmentItem imgSrc={imgSrc} buttonText={buttonText} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Investments;
