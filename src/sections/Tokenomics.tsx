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
          <div className="rounded-md bg-[#353731] overflow-hidden">
            <table className="w-full">
              <thead>
                <tr>
                  <th>Structure</th>
                  <th>%</th>
                  <th>Token Allocation</th>
                  <th>Vesting schedule</th>
                </tr>
              </thead>
              <tbody>
                {tokenomicsTableData.map(
                  (row, idx) =>
                    (viewAll || idx < 3) && (
                      <tr key={idx}>
                        <td style={{ color: row.color }}>{row.structure}</td>
                        <td>{row.percent}</td>
                        <td>{row.allocation}</td>
                        <td>{row.schedule}</td>
                      </tr>
                    )
                )}
              </tbody>
            </table>
            <button
              className="w-full p-2 text-center bg-[#814b3d]"
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
