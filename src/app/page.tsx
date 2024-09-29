"use client";

import Header from "@/components/header";
import Branding from "@/components/Brading";

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
import PreSaleInterface from "@/sections/PreSale";
import About from "@/sections/About";
import TokenSaleS from "@/sections/TokenSaleS";
import FuelRevolution from "@/sections/FuelRevolution";
import Supply from "@/sections/Supply";
import Bander from "@/sections/Bander";
import TokenomicsTable from "@/sections/TokenomicsTable";
import Tokenomics from "@/sections/Tokenomics";
import HowtoBuy from "@/sections/HowtoBuy";
import Members from "@/sections/Members";
import Faq from "@/sections/Faq";
import Footer from "@/sections/Footer";
import Roadmap from "@/components/roadmap/Roadmap";

export default function Home() {
  return (
    <div className="landing max-w-7xl px-10 flex flex-col gap-16 w-full">
      <Header />
      <Branding />
      <div className="flex flex-col gap-16 md:gap-10 items-center">
        <div className="flex flex-col gap-16 lg:gap-8 lg:flex-row items-center">
          <div className="w-full lg:w-3/5">
            <About />
          </div>
          <div className="w-full lg:w-2/5">
            <Supply />
          </div>
        </div>
        <div className="flex flex-col gap-16 lg:gap-8 lg:flex-row-reverse w-full">
          <div className="w-full lg:min-w-[480px] lg:max-w-[480px]  lg:relative">
            <PreSaleInterface />
          </div>
          <div className="overflow-auto">
            <TokenSaleS />
          </div>
        </div>
        <div className="flex">
          <div className="hidden lg:block lg:relative lg:-top-32">
            <FuelRevolution />
          </div>
          <div className="min-w-[560px]" />
        </div>
        <div className="flex flex-col lg:flex-row w-full">
          <div className="w-full   lg:relative lg:-top-36">
            <Tokenomics />
          </div>

          <div className="w-full  lg:relative lg:-top-[300px] lg:min-w-[560px] lg:max-w-[560px]">
            <TokenomicsTable />
          </div>
        </div>
        <div className="w-full lg:w-2/5 flex justify-start items-center flex-col gap-16"></div>
      </div>
      <div className="flex flex-col gap-16 lg:relative lg:-top-48">
        <Bander />
        <Roadmap />
        <HowtoBuy />
        <Members />
        <Bander />
        <div className="relative">
          <Faq />
        </div>
        <div className="relative">
          <Footer />
        </div>
      </div>
    </div>
  );
}
