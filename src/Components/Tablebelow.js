import React from "react";
import { FaShoppingCart } from "react-icons/fa";
function TableB() {
  return (
    <div className="w-full justify-center items-center mx-auto px-6 overflow-x-hidden" >
      <table className="table-auto w-full border border-gray-900"  style={{backgroundColor: "white"}}>
        <thead className="hidden md:table-header-group">
          <tr>
            <th style = {{fontSize: "large"}}className="p-2 text-center text-sm md:text-base font-bold w-1/3 border-l-2 border-t-0 border-b-2"></th>
            <th style = {{fontSize: "large"}}className="p-2 text-center  text-sm md:text-base w-1/9 border-r-2 border-t-0 border-b-2"></th>
            <th style = {{fontSize: "large"}}className="p-2 text-center text-sm md:text-base w-1/9 border-l-2 border-t-0 border-b-2"></th>
            <th style = {{fontSize: "large"}}className="p-2 text-start w-1/9 text-sm md:text-base border-r-2 border-t-0 border-b-2">
              Absolute Return (%)
            </th>
            <th style = {{fontSize: "large"}}className="hidden md:table-cell p-2 text-center text-sm md:text-base w-1/9 border-t-0 border-b-2"></th>
            <th style = {{fontSize: "large"}}className="hidden md:table-cell p-2 text-center  text-sm md:text-base w-1/9 border-t-0 border-b-2"></th>
            <th style = {{fontSize: "large"}}className="hidden md:table-cell p-2 text-start text-sm md:text-base border-t-0 border-b-2">
              Compounded Annualized Return (%)
            </th>
            <th style = {{fontSize: "large"}}className="hidden md:table-cell p-2 text-center text-sm md:text-base w-1/9 border-t-0 border-b-2"></th>
            <th style = {{fontSize: "large"}}className="hidden md:table-cell p-2 text-center text-sm md:text-base w-1/9 border border-gray-400"></th>
          </tr>
        </thead>
        <thead>
          <tr>
            <th style = {{fontSize: "large"}}className="p-2 text-center text-sm md:text-base font-bold w-1/3 border border-gray-400">
              Scheme Name
            </th>
            <th style = {{fontSize: "large"}}className="p-2 text-center  text-sm md:text-base w-1/9 border border-gray-400">
              Corpus
            </th>
            <th style = {{fontSize: "large"}}className="p-2 text-center text-sm md:text-base w-1/9 border border-gray-400">
              3 Month
            </th>
            <th style = {{fontSize: "large"}}className="hidden md:table-cell p-2 text-center text-sm md:text-base w-1/9 border border-gray-400">
              6 Month
            </th>
            <th style = {{fontSize: "large"}}className=" p-2 text-center text-sm md:text-base w-1/9 border border-gray-400">
              1 Year
            </th>
            <th style = {{fontSize: "large"}}className="hidden md:table-cell p-2 text-center  text-sm md:text-base w-1/9 border border-gray-400">
              2 Year
            </th>
            <th style = {{fontSize: "large"}}className="hidden md:table-cell p-2 text-center text-sm md:text-base w-1/9 border border-gray-400">
              3 Year
            </th>
            <th style = {{fontSize: "large"}}className="hidden md:table-cell p-2 text-center text-sm md:text-base w-1/9 border border-gray-400">
              5 Year
            </th>
            <th style = {{fontSize: "large"}}className=" p-2 text-center text-sm md:text-base w-1/9 border border-gray-400">
              Invest
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style = {{fontSize: "large"}}className="p-2 text-center text-sm md:text-base font-bold w-1/3 border border-gray-400">
              Baroda BNP Multi Cap Fund - Regular Plan - Growth
            </td>
            <td style = {{fontSize: "large"}}className="p-2 text-center text-sm md:text-base w-1/9 border border-gray-400">
              1677.64
            </td>
            <td style = {{fontSize: "large"}}className="p-2 text-center text-sm md:text-base w-1/9 border border-gray-400">
              1.41
            </td>
            <td style = {{fontSize: "large"}}className="hidden md:table-cell p-2 text-center text-sm md:text-base w-1/9 border border-gray-400">
              1.41
            </td>
            <td style = {{fontSize: "large"}}className=" p-2 text-center text-sm md:text-base w-1/9 border border-gray-400">
              1.41
            </td>
            <td style = {{fontSize: "large"}}className="hidden md:table-cell p-2 text-center text-sm md:text-base w-1/9 border border-gray-400">
              1.41
            </td>
            <td style = {{fontSize: "large"}}className="hidden md:table-cell p-2 text-center text-sm md:text-base w-1/9 border border-gray-400">
              1.41
            </td>
            <td style = {{fontSize: "large"}}className="hidden md:table-cell p-2 text-center text-sm md:text-base w-1/9 border border-gray-400">
              1.41
            </td>
            <td style = {{fontSize: "large"}}className="p-2 text-sm md:text-base w-1/9 border">
              <div className="flex transition-transform duration-300 transform-gpu hover:scale-125 cursor-pointer justify-center items-center">
                <FaShoppingCart />
              </div>
            </td>
          </tr>
          <tr>
            <td style = {{fontSize: "large"}}className="p-2 text-center text-sm md:text-base font-bold w-1/3 border">
              ICICI Prudential Multi Cap Fund - Growth
            </td>
            <td style = {{fontSize: "large"}}className="p-2 text-center text-sm md:text-base w-1/9 border">
              1677.64
            </td>
            <td style = {{fontSize: "large"}}className="p-2 text-center text-sm md:text-base w-1/9 border">
              7.87
            </td>
            <td style = {{fontSize: "large"}}className="hidden md:table-cell p-2 text-center text-sm md:text-base w-1/9 border">
              7.87
            </td>
            <td style = {{fontSize: "large"}}className=" p-2 text-center text-sm md:text-base w-1/9 border">
              7.87
            </td>
            <td style = {{fontSize: "large"}}className="hidden md:table-cell p-2 text-center text-sm md:text-base w-1/9 border">
              7.87
            </td>
            <td style = {{fontSize: "large"}}className="hidden md:table-cell p-2 text-center text-sm md:text-base w-1/9 border">
              7.87
            </td>
            <td style = {{fontSize: "large"}}className="hidden md:table-cell p-2 text-center text-sm md:text-base w-1/9 border">
              7.87
            </td>
            <td style = {{fontSize: "large"}}className=" p-2 text-sm md:text-base w-1/9 border">
              <div className="flex cursor-pointer transition-transform duration-300 transform-gpu hover:scale-125 justify-center items-center">
                <FaShoppingCart />
              </div>
            </td>
          </tr>
          <tr>
            <td style = {{fontSize: "large"}}className="p-2 text-center text-sm md:text-base font-bold w-1/3 border border-gray-400">
              Invesco India Multi Cap Fund - Growth
            </td>
            <td style = {{fontSize: "large"}}className="p-2 text-center text-sm md:text-base w-1/9 border border-gray-400">
              1677.64
            </td>
            <td style = {{fontSize: "large"}}className="p-2 text-center text-sm md:text-base w-1/9 border border-gray-400">
              1.41
            </td>
            <td style = {{fontSize: "large"}}className="hidden md:table-cell p-2 text-center text-sm md:text-base w-1/9 border border-gray-400">
              1.41
            </td>
            <td style = {{fontSize: "large"}}className=" p-2 text-center text-sm md:text-base w-1/9 border border-gray-400">
              1.41
            </td>
            <td style = {{fontSize: "large"}}className="hidden md:table-cell p-2 text-center text-sm md:text-base w-1/9 border border-gray-400">
              1.41
            </td>
            <td style = {{fontSize: "large"}}className="hidden md:table-cell p-2 text-center text-sm md:text-base w-1/9 border border-gray-400">
              1.41
            </td>
            <td style = {{fontSize: "large"}}className="hidden md:table-cell p-2 text-center text-sm md:text-base w-1/9 border border-gray-400">
              1.41
            </td>
            <td style = {{fontSize: "large"}}className=" p-2 text-sm md:text-base w-1/9 border">
              <div className="flex transition-transform duration-300 transform-gpu hover:scale-125 cursor-pointer justify-center items-center">
                <FaShoppingCart />
              </div>
            </td>
          </tr>
          <tr>
            <td style = {{fontSize: "large"}}className="p-2 text-center text-sm md:text-base font-bold w-1/3 border border-gray-400">
              Nippon India Multi Cap Fund - Growth
            </td>
            <td style = {{fontSize: "large"}}className="p-2 text-center text-sm md:text-base w-1/9 border border-gray-400">
              1677.64
            </td>
            <td style = {{fontSize: "large"}}className="p-2 text-center text-sm md:text-base w-1/9 border border-gray-400">
              1.41
            </td>
            <td style = {{fontSize: "large"}}className="hidden md:table-cell p-2 text-center text-sm md:text-base w-1/9 border border-gray-400">
              1.41
            </td>
            <td style = {{fontSize: "large"}}className=" p-2 text-center text-sm md:text-base w-1/9 border border-gray-400">
              1.41
            </td>
            <td style = {{fontSize: "large"}}className="hidden md:table-cell p-2 text-center text-sm md:text-base w-1/9 border border-gray-400">
              1.41
            </td>
            <td style = {{fontSize: "large"}}className="hidden md:table-cell p-2 text-center text-sm md:text-base w-1/9 border border-gray-400">
              1.41
            </td>
            <td style = {{fontSize: "large"}}className="hidden md:table-cell p-2 text-center text-sm md:text-base w-1/9 border border-gray-400">
              1.41
            </td>
            <td style = {{fontSize: "large"}}className=" p-2 text-sm md:text-base w-1/9 border">
              <div className="flex transition-transform duration-300 transform-gpu hover:scale-125 cursor-pointer justify-center items-center">
                <FaShoppingCart />
              </div>
            </td>
          </tr>
          <tr>
            <td style = {{fontSize: "large"}}className="p-2 text-center text-sm md:text-base font-bold w-1/3 border border-gray-400">
              Nippon India Multi Cap Fund - Growth
            </td>
            <td style = {{fontSize: "large"}}className="p-2 text-center text-sm md:text-base w-1/9 border border-gray-400">
              1677.64
            </td>
            <td style = {{fontSize: "large"}}className="p-2 text-center text-sm md:text-base w-1/9 border border-gray-400">
              1.41
            </td>
            <td style = {{fontSize: "large"}}className="hidden md:table-cell p-2 text-center text-sm md:text-base w-1/9 border border-gray-400">
              1.41
            </td>
            <td style = {{fontSize: "large"}}className=" p-2 text-center text-sm md:text-base w-1/9 border border-gray-400">
              1.41
            </td>
            <td style = {{fontSize: "large"}}className="hidden md:table-cell p-2 text-center text-sm md:text-base w-1/9 border border-gray-400">
              1.41
            </td>
            <td style = {{fontSize: "large"}}className="hidden md:table-cell p-2 text-center text-sm md:text-base w-1/9 border border-gray-400">
              1.41
            </td>
            <td style = {{fontSize: "large"}}className="hidden md:table-cell p-2 text-center text-sm md:text-base w-1/9 border border-gray-400">
              1.41
            </td>
            <td style = {{fontSize: "large"}}className=" p-2 text-sm md:text-base w-1/9 border">
              <div className="flex transition-transform duration-300 transform-gpu hover:scale-125 cursor-pointer justify-center items-center">
                <FaShoppingCart />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TableB;
