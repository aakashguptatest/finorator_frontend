import React, { useState, useRef, useEffect } from "react";
import { RiFileDownloadLine } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
// import Chart from "react-apexcharts";

import Sidebar from "../MF/Sidebar/Sidebar";
import MfNavbar from "../MF/nabarmf/MfNavbar";
import axios from "axios";
import Chart from "chart.js/auto";
import debounce from "lodash.debounce";

const Profile = () => {
  const [investments, setInvestments] = useState(0);
  const [current_value, setCurrentValue] = useState(0);
  const [unrealised_gain_or_loss, setUnrealisedGainOrLoss] = useState(0);
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const username = sessionStorage.getItem("username");
  axios
    .post(
      "http://127.0.0.1:5000/users/profile",
      {
        username: username,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => {
      const data = response.data;
      console.log(data);
      if (data.investments) {
        setInvestments(data.investments);
      }
      if (data.current_value) {
        setCurrentValue(data.current_value);
        if (data.unrealised_gain_or_loss) {
          setUnrealisedGainOrLoss(data.unrealised_gain_or_loss);
        }
        if (data.data) {
          debouncedDataUpdate(JSON.parse(data.data));
        }
      }
    })
    .catch((error) => console.error(error));
  const [selectedOption, setSelectedOption] = useState("landing");

  const chartRef = useRef([]);
  // Debounce the data update to prevent frequent rendering
  const debouncedDataUpdate = useRef(
    debounce((newData) => {
      setData((prevData) => {
        // Compare the new data with the existing data
        if (JSON.stringify(newData) !== JSON.stringify(prevData)) {
          return newData;
        }
        return prevData;
      });
    }, 300)
  ).current;
  useEffect(() => {
    const ctx = chartRef.current[0].getContext("2d");
    const chart = new Chart(ctx, {
      type: "pie",
      data: data,
      options: {
        fontSize: 14,
      },
    });
    // Cleanup the chart instance when the component unmounts
    return () => {
      chart.destroy();
    };
  }, [data]);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const navigateToURL = () => {
    if (selectedOption === "scheme") {
      window.location.href = "/profile/scheme";
    } else if (selectedOption === "asset-class") {
      window.location.href = "/profile/assetclass";
    } else if (selectedOption === "scheme-type") {
      window.location.href = "/profile/schemetype";
    } else if (selectedOption === "investors") {
      window.location.href = "/profile/investors";
    }
  };
  const response = {
    "TRAN DATE": "25-02-2022",
    "CLIENT NAME ": "Aproov Kathwar",
    "FUND NAME": "SBI MUTUAL FUNDS",
    "SCHEME NAME": "SBI BLUE CHIP FUND - REGULAR GROWTH",
    NATURE: "EQ/LCAP",
    "FOLIO NO": 249967,
    "TRAN TYPE": "REVERTOL",
    AMOUNT: 999.76,
    UNITS: 15.67,
    NAV: 62.53,
  };

  return (
    <>
      <Sidebar />
      <div style={{ display: "flex" }}>
        <div className="hidden md:block w-[5.5%]"></div>
        <div className="flex-grow bg-[#e6f3ff] min-h-screen flex-shrink-0">
          <div className="flex px-2 bg-[rgb(61,134,176)] bg-opacity-50">
            <div className="p-2 md:text-xm text-sm">
              <div>Summary Overview</div>
              <div>As on Date 27-03-23</div>
            </div>
            <div className="flex space-x-4 p-2">
              <div className="flex items-center">
                <RiFileDownloadLine />
                <div className="px-2"> Excel</div>
              </div>

              <div className="flex items-center">
                <MdOutlineEmail />
                <div className="px-2"> Email</div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap md:flex-nowrap mt-2 gap-1 md:border-b">
            <div className="md:hidden mx-auto">
              <select
                className="block w-full py-2 px-3 border border-gray-400 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={selectedOption}
                onChange={handleOptionChange}
              >
                <option value="scheme">Scheme</option>
                <option value="asset-class">Asset Class</option>
                <option value="scheme-type">Scheme Type</option>
                <option value="investors">Investors</option>
              </select>
            </div>
            <div className="hidden md:flex flex-wrap md:flex-nowrap">
              <div className="ml-4 mb-2 md:mb-0 md:mr-4 flex-shrink-0">
                <span className="font-bold ml-4 text-gray-700 text-opacity-40 text-xl">
                  <span
                    className={`text-gray-700 hover:text-gray-800 text-opacity-40 cursor-pointer ${
                      selectedOption === "scheme"
                        ? " border-b-2 border-gray-950 text-gray-800"
                        : ""
                    }`}
                    onClick={() => setSelectedOption("scheme")}
                  >
                    Scheme
                  </span>
                </span>
                <span className="ml-4">|</span>
              </div>
              <div className="mx-4 mb-2 md:mb-0 md:mr-4 flex-shrink-0">
                <span className="font-bold text-gray-700 text-opacity-40 text-xl">
                  <span
                    className={`text-gray-700 text-opacity-40 cursor-pointer hover:text-gray-800 ${
                      selectedOption === "asset-class"
                        ? "border-b-2 border-gray-950 text-gray-800"
                        : ""
                    }`}
                    onClick={() => setSelectedOption("asset-class")}
                  >
                    Asset Class
                  </span>
                </span>
                <span className="ml-4">|</span>
              </div>
              <div className="mb-2 md:mb-0 md:mr-4 flex-shrink-0">
                <span className="font-bold text-gray-700 text-opacity-40 text-xl">
                  <span
                    className={`text-gray-700 text-opacity-40 cursor-pointer hover:text-gray-800 ${
                      selectedOption === "scheme-type"
                        ? "border-b-2 border-gray-950 text-gray-800"
                        : ""
                    }`}
                    onClick={() => setSelectedOption("scheme-type")}
                  >
                    Scheme Type
                  </span>
                </span>
                <span className="ml-4">|</span>
              </div>
              <div className="ml-4 flex-shrink-0">
                <span className="font-bold text-gray-700 text-opacity-40 text-xl border-b-0">
                  <span
                    className={`text-gray-700 text-opacity-40 cursor-pointer hover:text-gray-800 ${
                      selectedOption === "investors"
                        ? "border-b-2 border-gray-950 text-gray-800"
                        : ""
                    }`}
                    onClick={() => setSelectedOption("investors")}
                  >
                    Investors
                  </span>
                </span>
              </div>
            </div>
          </div>

          {selectedOption === "landing" && (
            <div className="md:flex md:justify-start justify-center md:flex-wrap">
              <div className="grid md:justify-items-start justify-items-center mt-4">
                <canvas ref={(el) => (chartRef.current[0] = el)} />
              </div>

              <div className="grid overflow-x-auto mt-4 gap-6">
                <div className="md:px-10 px-4 py-2 border border-gray-300 rounded bg-white text-gray-700 shadow-lg">
                  <div className="text-center text-2xl font-bold">
                    Investments <br />
                    {investments}
                  </div>
                </div>
                <div className="md:px-10 px-4 border border-gray-300 rounded bg-white text-gray-700 shadow-lg">
                  <div className="text-center text-2xl font-bold">
                    Current Value <br />
                    {current_value}
                  </div>
                </div>
                <div className="md:px-10 px-4 border border-gray-300 rounded bg-white text-gray-700 shadow-lg">
                  <div className="text-center text-2xl font-bold">
                    Unrealized{" "}
                  </div>
                  <div className="text-center text-2xl font-bold">
                    Gain/Loss <br />
                    {unrealised_gain_or_loss}
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedOption !== "landing" && (
            <div className="text-center mt-4">
              <h1 className="text-3xl font-bold">{selectedOption}</h1>
              <div className="flex flex-wrap justify-center">
                <div className="w-full">
                  <div className="flex flex-wrap gap-6 justify-center">
                    {Object.keys(response).map((key) => (
                      <div
                        key={key}
                        className="flex flex-col items-center p-2 m-2"
                      >
                        <div className=" px-2 py-3 font-bold">{key}</div>
                        <div className="text-[#464F60]">
                          {[...Array(10)].map((_, index) => (
                            <div className="py-3" key={index}>
                              {response[key]}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Profile;
