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
      <div className="flex flex-row gap-10">
        <div className="w-3/5 flex flex-col gap-12">
          <About />
          <TokenSaleS />
          <FuelRevolution />
          <Tokenomics />
        </div>
        <div className="w-2/5 flex justify-start items-center flex-col gap-16">
          <Supply />
          <PreSaleInterface />
          <TokenomicsTable />
        </div>
      </div>
      <Bander />
      <Roadmap />
      <HowtoBuy />
      <Members />
      <Faq />
      <Footer />
    </div>
  );
}
