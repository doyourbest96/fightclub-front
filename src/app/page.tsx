"use client";

import Header from "@/components/header";
import Branding from "@/components/Brading";

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
import Roadmap from "@/sections/Roadmap";
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

export default function Home() {
  return (
    <div className="landing max-w-7xl px-10 flex flex-col gap-10 w-full">
      <Header />
      <Branding />
      <div className="flex flex-col gap-4 md:gap-10 items-center">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-3/5">
            <About />
          </div>
          <div className="w-full lg:w-2/5">
            <Supply />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row-reverse">
          <div className="w-full lg:w-2/5  lg:relative lg:-top-36">
            <PreSaleInterface />
          </div>
          <div className="w-full lg:w-3/5">
            <TokenSaleS />
          </div>
        </div>
        <div>
          <div className="hidden lg:block lg:w-3/5 lg:relative lg:-top-48">
            <FuelRevolution />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-3/5 lg:relative lg:-top-48">
            <Tokenomics />
          </div>
          <div className="w-full lg:w-2/5 lg:relative lg:-top-96">
            <TokenomicsTable />
          </div>
        </div>
        <div className="w-full lg:w-2/5 flex justify-start items-center flex-col gap-16"></div>
      </div>
      <div className="flex flex-col gap-4 lg:relative lg:-top-48">
        <Bander />
        <Roadmap />
        <HowtoBuy />
        <Members />
        <div className="relative top-24">
          <Faq />
        </div>
        <div className="relative top-48">
          <Footer />
        </div>
      </div>
    </div>
  );
}
