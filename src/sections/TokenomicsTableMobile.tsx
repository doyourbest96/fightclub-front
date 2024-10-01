"use client";
import React, { useState } from "react";
import TrackImg from "@/components/trackImg";
import { tokenomicsTableData } from "@/data/tokenomics.table";

const TokenomicsTableMobile = () => {
  const [viewAll, setViewAll] = useState(false);

  return (
    <>
      <div
        id="tokenomics"
        className="w-full text-lg font-revoluti text-[#dbdbcf] text-center lg:text-left uppercase sm:px-8"
      >
        <span className="relative">
          Tokenomics
          <TrackImg className="absolute top-1/2 right-0 translate-x-1/3 md:translate-x-1/2 -translate-y-1/2 -z-10 w-[240px] h-[240px]" />
        </span>
      </div>
      <div className="flex w-full font-helvetica font-thin min-w-xl max-w-xl justify-center items-center">
        <div className="rounded-md overflow-hidden w-full">
          <table className="w-full overflow-scroll bg-[#353731]">
            <thead className="w-full text-[#dbdbcf]">
              <tr className="text-left bg-[#814b3d]">
                <th className="px-2 py-3 lg:text-sm xl:text-base scale-x-90 scale-y-110">
                  Structure
                </th>
                <th className="px-2 lg:text-sm xl:text-base scale-x-90 scale-y-110">
                  %
                </th>
                <th className="lg:text-sm xl:text-base scale-x-75 scale-y-110 w-[150px] -ml-3">
                  Token Allocation
                </th>
                <th className="px-2 lg:text-sm xl:text-base scale-x-90 scale-y-110">
                  Vesting schedule
                </th>
              </tr>
            </thead>
            <tbody>
              {tokenomicsTableData.map(
                (row, idx) =>
                  (viewAll || idx < 3) && (
                    <tr key={idx}>
                      <td
                        className="px-3 py-2 lg:text-sm xl:text-base scale-x-90 scale-y-110 text-nowrap"
                        style={{ color: row.color }}
                      >
                        {row.structure}
                      </td>
                      <td className="px-2 py-2 lg:text-sm xl:text-base scale-x-90 scale-y-110">
                        {row.percent}
                      </td>
                      <td className="px-2 py-2 lg:text-sm xl:text-base scale-x-90 scale-y-110">
                        {row.allocation}
                      </td>
                      <td className="px-2 py-2 lg:text-sm xl:text-base scale-x-90 scale-y-110">
                        {row.schedule}
                      </td>
                    </tr>
                  )
              )}
            </tbody>
          </table>
          <div className="relative rounded-b-md bg-[#814b3d] mb-4">
            <button
              className="min-w-full p-2 text-center"
              onClick={() => setViewAll(!viewAll)}
            >
              {viewAll ? "View few allocations" : "View all allocations"}
            </button>
            <div className="absolute left-1/2 top-8 w-4 h-4 bg-[#814b3d] transform -translate-x-1/2 rotate-45"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TokenomicsTableMobile;
