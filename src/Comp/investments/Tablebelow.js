import React from "react";

function TableB() {
  return (
    <div className="w-full overflow-x-auto">
      <table className="table-auto w-full border border-gray-400">
        <thead>
          <tr>
            <th className="p-2 text-sm md:text-base font-bold w-1/3 border border-gray-400">
              Column 1
            </th>
            <th className="p-2 text-sm md:text-base w-1/9 border border-gray-400">
              Column 2
            </th>
            <th className="p-2 text-sm md:text-base w-1/9 border border-gray-400">
              Column 3
            </th>
            <th className="p-2 text-sm md:text-base w-1/9 border border-gray-400">
              Column 4
            </th>
            <th className="hidden md:table-cell p-2 text-sm md:text-base w-1/9 border border-gray-400">
              Column 5
            </th>
            <th className="hidden md:table-cell p-2 text-sm md:text-base w-1/9 border border-gray-400">
              Column 6
            </th>
            <th className="hidden md:table-cell p-2 text-sm md:text-base w-1/9 border border-gray-400">
              Column 7
            </th>
            <th className="hidden md:table-cell p-2 text-sm md:text-base w-1/9 border border-gray-400">
              Column 8
            </th>
            <th className="hidden md:table-cell p-2 text-sm md:text-base w-1/9 border border-gray-400">
              Column 9
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2 text-sm md:text-base font-bold w-1/3 border border-gray-400">
              Row 1, Column 1
            </td>
            <td className="p-2 text-sm md:text-base w-1/9 border border-gray-400">
              Row 1, Column 2
            </td>
            <td className="p-2 text-sm md:text-base w-1/9 border border-gray-400">
              Row 1, Column 3
            </td>
            <td className="p-2 text-sm md:text-base w-1/9 border border-gray-400">
              Row 1, Column 4
            </td>
            <td className="hidden md:table-cell p-2 text-sm md:text-base w-1/9 border border-gray-400">
              Row 1, Column 5
            </td>
            <td className="hidden md:table-cell p-2 text-sm md:text-base w-1/9 border border-gray-400">
              Row 1, Column 6
            </td>
            <td className="hidden md:table-cell p-2 text-sm md:text-base w-1/9 border border-gray-400">
              Row 1, Column 7
            </td>
            <td className="hidden md:table-cell p-2 text-sm md:text-base w-1/9 border border-gray-400">
              Row 1, Column 8
            </td>
            <td className="hidden md:table-cell p-2 text-sm md:text-base w-1/9 border border-gray-400">
              Row 1, Column 9
            </td>
          </tr>
          <tr>
            <td className="p-2 text-sm md:text-base font-bold w-1/3 border">
              Row 2, Column 1
            </td>
            <td className="p-2 text-sm md:text-base w-1/9 border">
              Row 2, Column 2
            </td>
            <td className="p-2 text-sm md:text-base w-1/9 border">
              Row 2, Column 3
            </td>
            <td className="p-2 text-sm md:text-base w-1/9 border">
              Row 2, Column 4
            </td>
            <td className="hidden md:table-cell p-2 text-sm md:text-base w-1/9 border">
              Row 2, Column 5
            </td>
            <td className="hidden md:table-cell p-2 text-sm md:text-base w-1/9 border">
              Row 2, Column 6
            </td>
            <td className="hidden md:table-cell p-2 text-sm md:text-base w-1/9 border">
              Row 2, Column 7
            </td>
            <td className="hidden md:table-cell p-2 text-sm md:text-base w-1/9 border">
              Row 2, Column 8
            </td>
            <td className="hidden md:table-cell p-2 text-sm md:text-base w-1/9 border">
              Row 2, Column 9
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TableB;
