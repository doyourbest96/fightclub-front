"use client";
import React, { useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { tokenomicsData } from "@/data/tokenomics.data";
import { tokenomicsOption } from "@/data/tokenomics.option";
import { tokenomicsTableData } from "@/data/tokenomics.table";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const Tokenomics = () => {
  const [viewAll, setViewAll] = useState(false);

  return (
    <>
      <div className="flex flex-col gap-8 justify-center">
        <p className="text-xl font-black italic uppercase">Tokenomics</p>
        <div className="lg:hidden">
          <div className="rounded-md bg-[#814b3d] overflow-auto">
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
                        <td className="px-2" style={{ color: row.color }}>
                          {row.structure}
                        </td>
                        <td className="px-2">{row.percent}</td>
                        <td className="px-2">
                          {row.allocation.replace(",000,000,000", " billion")}
                        </td>
                        <td className="px-2">{row.schedule}</td>
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
        <div className="p-8 md:px-44 lg:p-8 w-full flex flex-col items-center justify-center">
          <Doughnut
            data={tokenomicsData}
            options={tokenomicsOption}
            className="!w-full !h-full"
          />
        </div>
      </div>
    </>
  );
};

export default Tokenomics;
