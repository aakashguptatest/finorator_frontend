import React from "react";

const Table = ({ data }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col">
        <div className="flex flex-row items-center justify-center">
          <button
            className="bg-gray-200 hover:bg-gray-300 rounded-full px-2 py-1 mr-2 hidden sm:block"
            disabled={data.currentPosition === 0}
            onClick={data.handleLeftArrowClick}
          >
            {"<"}
          </button>
          <div className="hidden sm:flex">
            {data.displayData.map((row, index) => (
              <div
                key={index}
                className={`px-2 py-1 border border-gray-300 ${
                  index === data.currentPosition ? "bg-gray-200" : ""
                }`}
                style={{ minWidth: "100px" }}
              >
                {row}
              </div>
            ))}
          </div>
          <div className="flex sm:hidden">
            <div
              className="px-2 py-1 border border-gray-300 bg-gray-200"
              style={{ minWidth: "100px" }}
            >
              {data.displayData[data.currentPosition]}
            </div>
          </div>
          <button
            className="bg-gray-200 hover:bg-gray-300 rounded-full px-2 py-1 ml-2 hidden sm:block"
            disabled={data.currentPosition === data.totalData - 1}
            onClick={data.handleRightArrowClick}
          >
            {">"}
          </button>
        </div>
        <div className="flex flex-row items-center justify-center sm:hidden">
          <button
            className="bg-gray-200 hover:bg-gray-300 rounded-full px-2 py-1 mr-2"
            disabled={data.currentPosition === 0}
            onClick={data.handleLeftArrowClick}
          >
            {"<"}
          </button>
          <div
            className="px-2 py-1 border border-gray-300 bg-gray-200"
            style={{ minWidth: "100px" }}
          >
            {data.displayData[data.currentPosition]}
          </div>
          <button
            className="bg-gray-200 hover:bg-gray-300 rounded-full px-2 py-1 ml-2"
            disabled={data.currentPosition === data.totalData - 1}
            onClick={data.handleRightArrowClick}
          >
            {">"} 
          </button>
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 640px) {
          .flex-col {
            align-items: center;
          }
          .flex-row {
            flex-direction: column;
          }
          .hidden {
            display: none;
          }
          .block {
            display: block;
          }
        }
      `}</style>
    </div>
  );
};

export default Table;
