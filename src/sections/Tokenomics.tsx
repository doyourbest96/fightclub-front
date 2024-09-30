import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { tokenomicsData } from "@/data/tokenomics.data";
import { tokenomicsOption } from "@/data/tokenomics.option";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const Tokenomics = () => {
  return (
    <>
      <p
        id="tokenomics"
        className="w-full text-lg font-revoluti text-center lg:text-left uppercase sm:px-8 md:px-12 lg:px-4 "
      >
        Tokenomics
      </p>
      <div className="flex flex-col gap-8 justify-center w-3/4">
        <div className="p-8 w-full flex flex-col items-center justify-center">
          <Doughnut
            data={tokenomicsData}
            options={tokenomicsOption}
            className="!w-full !h-full text-lg !font-revoluti"
          />
        </div>
      </div>
    </>
  );
};

export default Tokenomics;
