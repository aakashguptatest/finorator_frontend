import React, { useState } from "react";
import NumberToWord from "./numbertoword";
import { useNavigate } from "react-router";

const banks = [
  { value: "Net Banking", label: "Please Select a Bank" },
  { value: "Easy Pay (Using Mandate)", label: "Please Select a Easy Pay Account" },
  { value: "UPI", label: "Please Select a UPI" },
  { value: "NEFT/RTGS", label: "Please Select a Neft/rtgs" },
];

const Page3Invest = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/page2");
  };

  const [selectedBank, setSelectedBank] = useState("");

  const handleBankSelect = (e) => {
    setSelectedBank(e.target.value);
  };

  const getLabelText = (value) => {
    const bank = banks.find((b) => b.value === value);
    return bank ? bank.label : "";
  };

  return (
    <div className="m-0 p-0">
      <div className="flex justify-between p-9 border-b-2">
        <div className="font-bold text-xl">Total 1000 for 1 Scheme</div>
        <div
          onClick={handleClick}
          className="font-bold text-xl text-blue-900 cursor-pointer"
        >
          View Details
        </div>
      </div>
      <div className="border-b-[16px] p-6 rounded-xl flex justify-end">
        <div className="flex flex-col items-end">
          <div className="font-bold text-sm">Total Amount ₹1000</div>
          <div className="font-bold text-sm">
            <NumberToWord amount={1000} />
          </div>
        </div>
      </div>

      <div className="border-b-2 font-bold text-md p-3">
        Select Payment Method
      </div>

      {/* For mobile screens */}
      <div className="md:hidden flex justify-center items-center my-3">
        <label htmlFor="bank-select">{getLabelText(selectedBank)}</label>
        <select
          id="bank-select"
          className="ml-3 rounded-md border border-gray-400 p-1"
          value={selectedBank}
          onChange={handleBankSelect}
        >
          {banks.map((bank) => (
            <option
              key={bank.value}
              value={bank.value}
              className={selectedBank === bank.value ? "text-blue-500" : ""}
            >
              {bank.value}
            </option>
          ))}
        </select>
      </div>

      {/* For larger screens */}
      <div className="hidden cursor-pointer md:flex mx-auto">
        <div className="w-1/5 pr-4 border-r-4 p-4 rounded-md">
          {banks.map((bank) => (
            <div
              key={bank.value}
              className={`mb-2 p-2 font-bold rounded-md ${
                selectedBank === bank.value ? "bg-blue-500 text-white" : "bg-gray-100"
              }`}
              onClick={() => setSelectedBank(bank.value)}
            >
              {bank.value}
            </div>
          ))}
        </div>
        <div className="w-4/5 flex justify-center items-center">
          <p>{getLabelText(selectedBank)}</p>
        </div>
      </div>
    </div>
  );
};

export default Page3Invest;
