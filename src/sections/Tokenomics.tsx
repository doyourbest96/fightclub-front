"use client";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const data = {
  labels: [
    "Pre-sale",
    "Public sale 1",
    "Public sale 2",
    "Public sale 3",
    "Development fund",
    "Marketing",
    "Liquidity",
    "Community incent.",
    "Team",
    "Advisors",
    "Reserve",
  ],
  datasets: [
    {
      data: [10, 15, 10, 5, 20, 10, 5, 10, 8, 4, 3],
      backgroundColor: [
        "rgba(40, 10, 0, 0.8)",
        "rgba(55, 15, 5, 0.8)",
        "rgba(70, 25, 10, 0.8)",
        "rgba(85, 35, 15, 0.8)",
        "rgba(130, 50, 30, 0.8)",
        "rgba(180, 30, 30, 0.8)",
        "rgba(200, 50, 50, 0.8)",
        "rgba(220, 70, 70, 0.8)",
        "rgba(240, 90, 90, 0.8)",
        "rgba(255, 110, 110, 0.8)",
        "rgba(255, 180, 180, 0.8)",
      ],
      borderColor: [
        "rgba(40, 10, 0, 0.2)",
        "rgba(55, 15, 5, 0.2)",
        "rgba(70, 25, 10, 0.2)",
        "rgba(85, 35, 15, 0.2)",
        "rgba(130, 50, 30, 0.2)",
        "rgba(180, 30, 30 ,0.2)",
        "rgba(200, 50 ,50 ,0.2)",
        "rgba(220 ,70 ,70 ,0.2)",
        "rgba(240 ,90 ,90 ,0.2)",
        "rgba(255 ,110 ,110 ,0.2)",
        "rgba(255 ,180 ,180 ,0.2)",
      ],
      borderWidth: 1,
    },
  ],
  options: {
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        color: "#787871",
        anchor: "center",
        align: "center",
        font: {
          size: 20,
        },
        formatter: (value: string) => (value !== null ? value + "%" : ""),
      },
    },
  },
};

const Tokenomics = () => {
  return (
    <div className="flex flex-col">
      <p className="text-xl font-black italic uppercase">Tokenomics</p>
      <div className="p-8">
        <Doughnut data={data} />
      </div>
    </div>
  );
};

export default Tokenomics;
