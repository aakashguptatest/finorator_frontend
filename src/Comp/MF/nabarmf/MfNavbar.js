import React, { useState } from "react";

const MfNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="top-0 z-40 sticky">
      <div className="bg-white p-2 shadow-sm">
        <div className="flex justify-between items-center">
          <div>
            <div className="flex cursor-pointer">
              <div className="text-sm md:text-3xl font-bold">
                <a className="text-orange-500 hover:text-orange-600" style={{ textDecoration: "none" }} href="/">FINO</a>
              </div>
              <div className="text-[#4D81B2] text-sm md:text-3xl font-bold">
                <a style={{ textDecoration: "none" }} href="/" className="text-[#4D81B2] hover:text-[#31688E]">RATOR</a> 
              </div>
            </div>
            <div className="hidden md:block mt-0 py-0 text-[0.75rem]">
              Enhancing Financial Decisions
            </div>
            <div className="pt-2 shadow-inner text-sm md:text-2xl font-bold text-[#4D81B2]">
              MUTUAL FUNDS
            </div>
          </div>
          <div className=" mr-6">
            <div className="flex md:hidden">
              <div className="relative">
                <div
                  className="text-2xl px-3 py-2 font-bold rounded-lg bg-[#4D81B2] hover:bg-[#31688E] cursor-pointer flex items-center"
                  onClick={toggleMenu}
                >
                  <span className="text-white px-3">INVEST</span>
                  <svg
                    className={`${
                      isOpen ? "transform rotate-180" : ""
                    } w-4 h-4 ml-1`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </div>
                {isOpen && (
                  <div className="absolute right-0 py-2 w-32 bg-white rounded-md shadow-lg">
                    <a
                      className="block px-4 py-2 text-[#4D81B2] text-sm"
                      href="/iconnect"
                    >
                      iConnect
                    </a>
                    <a
                      className="block px-4 py-2 text-[#4D81B2] text-sm"
                      href="/aiselect"
                    >
                      AiSelect
                    </a>
                  </div>
                )}
              </div>
            </div>
            <div className="hidden md:flex gap-7">
              <div className="text-2xl px-[6rem] rounded-md mx-2 py-2 font-bold bg-[#4D81B2] hover:bg-[#31688E] cursor-pointer">
                <a className="text-white" style={{ textDecoration: "none" }} href="/">
                  INVEST
                </a>
              </div>
              <div className="text-2xl px-[6rem] rounded-md py-2 mx-2 font-bold bg-[#4D81B2] hover:bg-[#31688E] cursor-pointer">
                <a className="text-white" style={{ textDecoration: "none" }} href="/iconnect">
                  iConnect
                </a>
              </div>
              <div className="text-2xl px-[6rem] rounded-md shadow-2xl py-2 mx-2 font-bold bg-[#4D81B2] hover:bg-[#31688E] cursor-pointer">
                <a className="text-white" style={{ textDecoration: "none" }} href="/aiselect">
                  AiSelect
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MfNavbar;
