import Logo from "@/components/Logo/Logo";
import Faq from "@/sections/Faq";
import Stage from "@/sections/Stagge";
import HowtoBuy from "@/sections/HowtoBuy";
import Members from "@/sections/Members";
import Footer from "@/sections/Footer";
import Image from "next/image";
import Tokenomics from "@/sections/Tokenomics";
import TokenomicsTable from "@/sections/TokenomicsTable";
import Roadmap from "@/sections/Roadmap";
import PreSaleInterface from "@/sections/PreSale";
import About from "@/sections/About";
import TokenSaleS from "@/sections/TokenSaleS";
import FuelRevolution from "@/sections/FuelRevolution";
import Supply from "@/sections/Supply";
import Bander from "@/sections/Bander";

export default function Home() {
  return (
    <div className="landing max-w-7xl px-10 flex flex-col gap-10">
      <div className="py-7 flex flex-row justify-between items-center gap-4">
        <div className="flex flex-row items-end gap-14 italic uppercase">
          <Logo />
          <div className="flex flex-row items-end gap-8 text-xl font-black text-orange-900">
            <span>about</span>
            <span>buy</span>
            <span>roadmap</span>
            <span>faq</span>
          </div>
        </div>
        <button className="p-2 text-xl font-extrabold italic uppercase rounded-md bg-orange-950">
          whitepaper
        </button>
      </div>
      <div className="mt-72 w-1/2 flex flex-col justify-center items-center">
        <p className="px-28 text-center text-xl font-light">
          Empowering martial artists, engaging fans and connecting industry
          leaders for a financially rewarding experience with the FIght Club
          platform.
        </p>
        <button className="my-14 px-4 py-2 flex justify-center items-center gap-4 text-lg font-light rounded-md bg-gradient-to-r from-[#824b3d]/50 from-10% via-[#824b3d] via-50% to-[#824b3d]/50 to-90%">
          Whitepaper
        </button>
      </div>
      <div className="px-20 py-10 flex flex-row justify-around items-center gap-10 bg-[linear-gradient(to_right,_#000000,_#824b3d,_#824b3d,_#824b3d,_#000000)]">
        <div className="flex flex-col gap-2">
          <p className="font-semibold">Empower</p>
          <p className="font-light">
            Get control over your career and be seen by millions of people
            worldwide.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-semibold">Revenue</p>
          <p className="font-light">
            Whether you are a fighter, fan or club, our platform offers income
            models for everyone.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-semibold">Connect</p>
          <p className="font-light">
            Build your empire and get in touch with everyone, from fans to
            industry leaders.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-semibold">Transparency</p>
          <p className="font-light">
            By leveraging blockchain nothing can be hidden. Its easy to use and
            fool proof.
          </p>
        </div>
      </div>
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
