import React from "react";
import { RiFileDownloadLine } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
// import { Doughnut } from 'react-chartjs-2';
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import Chart from "react-apexcharts";

// ChartJS.register(ArcElement, Tooltip, Legend);

const Profile = () => {
  return (
    <div className="min-h-screen">
      <div className="flex px-2 bg-[rgb(61,134,176)] bg-opacity-50 justify-between items-center">
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

      <div class="flex flex-wrap md:flex-nowrap mt-2 gap-1 md:border-b">
        <div class="md:hidden mx-auto">
          <select class="block w-full py-2 px-3 border border-gray-400 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
            <option value="scheme">Scheme</option>
            <option value="asset-class">Asset Class</option>
            <option value="scheme-type">Scheme Type</option>
            <option value="investors">Investors</option>
          </select>
        </div>
        <div class="hidden md:flex flex-wrap md:flex-nowrap">
          <div class="ml-4 mb-2 md:mb-0 md:mr-4 flex-shrink-0">
            <span class="font-bold ml-4 text-gray-700 text-opacity-40 text-xl">
              Scheme
            </span>
            <span class="ml-4">|</span>
          </div>
          <div class="mx-4 mb-2 md:mb-0 md:mr-4 flex-shrink-0">
            <span class="font-bold text-gray-700 text-opacity-40 text-xl">
              Asset Class
            </span>
            <span class="ml-4">|</span>
          </div>
          <div class="mb-2 md:mb-0 md:mr-4 flex-shrink-0">
            <span class="font-bold text-gray-700 text-opacity-40 text-xl">
              Scheme Type
            </span>
            <span class="ml-4">|</span>
          </div>
          <div class="ml-4 flex-shrink-0">
            <span class="font-bold text-gray-700 text-opacity-40 text-xl border-b-0">
              Investors
            </span>
          </div>
        </div>
      </div>
      <div className="flex md:justify-start justify-center flex-wrap">
        <div class="grid md:justify-items-start justify-items-center mt-4">
          <Chart
            type="donut"
            width={1000}
            height={450}
            series={[25, 35, 40]}
            options={{
              dataLabels: {
                enabled: true,
              },
              colors: ["#A7B5DB", "#375DA1", "#4472C4"],
              legend: {
                show: true,
                position: "bottom",
                itemMargin: {
                  horizontal: 5,
                  vertical: 2,
                },
                onItemClick: {
                  toggleDataSeries: true,
                },
                onItemHover: {
                  highlightDataSeries: true,
                },
                fontSize: "14px",
                markers: {
                  width: 14,
                  height: 14,
                  strokeWidth: 0,
                  strokeColor: "#375DA1",
                  fillColors: undefined,
                  radius: 16,
                  customHTML: undefined,
                  onClick: undefined,
                  offsetX: 0,
                  offsetY: 0,
                },
                horizontalAlign: "center",
              },
              responsive: [
                {
                  breakpoint: 480,
                  options: {
                    chart: {
                      width: 300,
                    },
                    legend: {
                      position: "bottom",
                      horizontalAlign: "left",
                    },
                  },
                },
              ],
              labels: [
                "Axis Mutual Fund - Gr",
                "DSP Equity Opportunities Fund - Gr",
                "SBI Flexicap Fund - Gr",
              ],
              plotOptions: {
                pie: {
                  donut: {
                    labels: {
                      show: true,
                      total: {
                        show: true,
                        fontSize: 12,
                      },
                    },
                  },
                },
              },
            }}
          />
        </div>

        <div class="grid mt-4 gap-4">
          <div class="px-2 py-2 border border-gray-300 rounded bg-white text-gray-700 shadow-lg">
            <div className="text-center text-xl font-bold">Investments</div>
          </div>
          <div class="p-4 border border-gray-300 rounded bg-white text-gray-700 shadow-lg">
            <div className="text-center text-xl font-bold">Current Value</div>
          </div>
          <div class="p-4 border border-gray-300 rounded bg-white text-gray-700 shadow-lg">
            <div className="text-center text-xl font-bold">Unrealized Gain/Loss</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
//  <DonutChart
//   innerRadius={0.5}
//   outerRadius={0.7}
//   legend={false}
//   data={[
//     {
//       label: "Axis Mutual Fund - Gr",
//       value: 25,
//     },
//     {
//       label: "DSP Equity Opportunities Fund - Gr",
//       value: 45,
//     },
//     {
//       label: "SBI Flexicap Fund - Gr",
//       value: 30,
//     },
//   ]}
// />

// const data = {
//     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//     datasets: [
//       {
//         label: '# of Votes',
//         data: [12, 19, 3, 5, 2, 3],
//         backgroundColor: [
//           'rgba(255, 99, 132, 0.2)',
//           'rgba(54, 162, 235, 0.2)',
//           'rgba(255, 206, 86, 0.2)',
//           'rgba(75, 192, 192, 0.2)',
//           'rgba(153, 102, 255, 0.2)',
//           'rgba(255, 159, 64, 0.2)',
//         ],
//         borderColor: [
//           'rgba(255, 99, 132, 1)',
//           'rgba(54, 162, 235, 1)',
//           'rgba(255, 206, 86, 1)',
//           'rgba(75, 192, 192, 1)',
//           'rgba(153, 102, 255, 1)',
//           'rgba(255, 159, 64, 1)',
//         ],
//         borderWidth: 1,
//       },
//     ],
//   };

//     <Doughnut
//     data={data}
//     options={{
//       responsive: true,
//     //   maintainAspectRatio: true,
//     }}
//   />
