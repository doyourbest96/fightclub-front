import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { tokenomicsData } from "@/data/tokenomics.data";
import { tokenomicsOption } from "@/data/tokenomics.option";
import TrackImg from "@/components/trackImg";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const Tokenomics = () => {
  return (
    <>
      <p
        id="tokenomics"
        className="w-full text-lg font-revoluti text-[#dbdbcf] text-center lg:text-left uppercase sm:px-8 md:px-12 lg:px-4 "
      >
        <span className="relative">
          Tokenomics
          <TrackImg className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 -z-10  w-[240px] h-[240px]" />
        </span>
      </p>
      <div className="flex flex-col justify-center md:w-[60%] lg:w-[80%]">
        <div className="px-2 md:px-8 w-full flex flex-col items-center justify-center">
          <Doughnut
            data={tokenomicsData}
            options={tokenomicsOption}
            className="!w-full !h-full text-sm md:text-lg !font-revoluti"
          />
        </div>
      </div>
    </>
  );
};

export default Tokenomics;
