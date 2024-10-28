"use client";

import RootProvider from "@/providers";
import Header from "@/components/header";
import Branding from "@/components/Brading";
import About from "@/sections/About";
import TokenSaleS from "@/sections/TokenSaleS";
import FuelRevolution from "@/sections/FuelRevolution";
import Supply from "@/sections/Supply";
import PreSale from "@/sections/PreSale";
import TokenomicsTable from "@/sections/TokenomicsTable";
import Tokenomics from "@/sections/Tokenomics";
import RoadToGlory from "@/sections/RoadToGlory";
import Roadmap from "@/components/roadmap/Roadmap";
import HowtoBuy from "@/sections/HowtoBuy";
import Members from "@/sections/Members";
import Faq from "@/sections/Faq";
import Footer from "@/sections/Footer";
import Bander2 from "@/sections/Bander2";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <div className="landing flex flex-col gap-12 w-full lg:max-w-7xl overflow-hidden">
      <div className="flex flex-col">
        <Header />
        <Branding />
      </div>
      <div className="px-1 sm:px-8 md:px-12 lg:px-4 flex flex-col gap-16">
        <RootProvider>
          {/* desktop for splitting */}
          <div className="hidden lg:flex lg:gap-4 xl:gap-12">
            <div className="w-3/5 flex flex-col gap-8 lg:gap-12 items-center">
              <About />
              <TokenSaleS />
              <FuelRevolution />
              <Tokenomics />
            </div>
            <div className="w-2/5 flex flex-col gap-10 items-center">
              <Supply />
              <PreSale />
              <TokenomicsTable />
            </div>
          </div>

          {/* mobile  */}
          <div className="flex flex-col lg:hidden items-center gap-8">
            <About />
            <Supply />
            <PreSale />
            <TokenSaleS />
            {/* <TokenomicsTableMobile /> */}
            {/* <Tokenomics /> */}
          </div>
        </RootProvider>
        {/* Bottom section */}
        <div className="flex flex-col gap-16 items-center">
          {/* Bander 2 */}
          <RoadToGlory />
          {/* <Bander /> */}
          <Roadmap />
          <HowtoBuy />
          <Members />
          <Bander2 />
          <Faq />
          <Footer />

          <ToastContainer
            position="top-right"
            autoClose={2500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable
            pauseOnHover
            theme="light"
          />
        </div>
      </div>
    </div>
  );
}
