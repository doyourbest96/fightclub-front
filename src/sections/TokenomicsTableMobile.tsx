"use client";
import React, { useState } from "react";
import { tokenomicsTableData } from "@/data/tokenomics.table";

const TokenomicsTableMobile = () => {
  const [viewAll, setViewAll] = useState(false);

  return (
    <>
      <div className="flex w-full font-helvetica font-thin md:w-[460px] justify-center items-center">
        <div className="rounded-sm bg-[#814b3d] overflow-auto w-full md:min-w-lg md:max-w-lg">
          <table className="w-full overflow-scroll bg-[#353731]">
            <thead>
              <tr className="text-left bg-[#814b3d]">
                <th className="p-2">Structure</th>
                <th className="p-2">%</th>
                <th className="p-2">Token Allocation</th>
                <th className="p-2">Vesting schedule</th>
              </tr>
            </thead>
            <tbody>
              {tokenomicsTableData.map(
                (row, idx) =>
                  (viewAll || idx < 3) && (
                    <tr key={idx}>
                      <td className="px-2 py-2" style={{ color: row.color }}>
                        {row.structure}
                      </td>
                      <td className="px-2 py-2">{row.percent}</td>
                      <td className="px-2 py-2">
                        {row.allocation.replace(",000,000,000", " billion")}
                      </td>
                      <td className="px-2 py-2">{row.schedule}</td>
                    </tr>
                  )
              )}
            </tbody>
          </table>
          <button
            className="min-w-full p-2 text-center"
            onClick={() => setViewAll(!viewAll)}
          >
            {viewAll ? "View few allocations" : "View all allocations"}
          </button>
        </div>
      </div>
    </>
  );
};

export default TokenomicsTableMobile;
