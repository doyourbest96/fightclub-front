"use client";

import { classNames } from "@/utils/classNames";
import { useEffect, useRef, useState } from "react";
import { IoDocumentTextOutline } from "react-icons/io5";

const Branding = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [selectedIntroView, setSelectedIntroView] = useState(0);

  useEffect(() => {
    console.log(selectedIntroView);
  }, [selectedIntroView]);

  const scrollToElement = (index: number) => {
    const element = scrollRef.current?.children[index] as HTMLElement;
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  };
  return (
    <>
      <div className="relative w-full">
        <div className="absolute -top-12 w-full max-w-[580px] text-center">
          <p className="text-[136px] text-stroke-8">FIGHT</p>
        </div>
        <div className="absolute top-32 w-full max-w-[580px] text-center">
          <p className="text-4xl text-stroke-4 text-[#824b3d]">C L U B</p>
        </div>
        <div className="mt-64 max-w-[580px] px-8 flex flex-col items-center text-center w-full font-light">
          <p className="font-helvetica text-xl font-light">
            Empowering martial artists, engaging fans and connecting industry
            leaders for a financially rewarding experience with the FIght Club
            platform.
          </p>
          <button className="my-14 px-4 py-1 flex justify-center items-center gap-4 font-light rounded-sm  bg-gradient-to-r from-[#824b3d]/50 from-10% via-[#824b3d] via-50% to-[#824b3d]/50 to-90% hover:filter hover:brightness-125 hover:-translate-y-1 transition-all">
            <IoDocumentTextOutline aria-hidden="true" className="h-6 w-6" />
            Whitepaper
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div
          className="px-20 py-10 flex flex-row gap-10 font-helvetica bg-[linear-gradient(to_right,_#0000000f,_#824b3d,_#824b3d,_#824b3d,_#0000000f)] overflow-x-hidden"
          ref={scrollRef}
        >
          <span></span>
          <div className="flex flex-col gap-2 min-w-48">
            <p className="font-black">Empower</p>
            <p className="font-light">
              Get control over your career and be seen by millions of people
              worldwide.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-w-48">
            <p className="font-black">Revenue</p>
            <p className="font-light">
              Whether you are a fighter, fan or club, our platform offers income
              models for everyone.
            </p>
          </div>
          <span></span>
          <div className="flex flex-col gap-2 min-w-48">
            <p className="font-black">Connect</p>
            <p className="font-light">
              Build your empire and get in touch with everyone, from fans to
              industry leaders.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-w-48">
            <p className="font-black">Transparency</p>
            <p className="font-light">
              By leveraging blockchain nothing can be hidden. Its easy to use
              and fool proof.
            </p>
          </div>
          <span></span>
        </div>
        <div className="flex lg:hidden m-auto gap-4 ">
          <div
            className={classNames(
              "rounded-full w-6 h-6 hover:cursor-pointer hover:bg-gray-100",
              selectedIntroView === 0 ? "bg-gray-200" : "bg-gray-400 "
            )}
            onClick={() => {
              scrollToElement(0);
              setSelectedIntroView(0);
            }}
          ></div>
          <div
            className={classNames(
              "rounded-full w-6 h-6  hover:cursor-pointer hover:bg-gray-100",
              selectedIntroView === 2 ? "bg-gray-200" : "bg-gray-400 "
            )}
            onClick={() => {
              scrollToElement(2);
              setSelectedIntroView(2);
            }}
          ></div>
          <div
            className={classNames(
              "rounded-full w-6 h-6 hover:cursor-pointer hover:bg-gray-100",
              selectedIntroView === 4 ? "bg-gray-200" : "bg-gray-400 "
            )}
            onClick={() => {
              scrollToElement(4);
              setSelectedIntroView(4);
            }}
          ></div>
          <div
            className={classNames(
              "rounded-full w-6 h-6 hover:cursor-pointer hover:bg-gray-100",
              selectedIntroView === 6 ? "bg-gray-200" : "bg-gray-400 "
            )}
            onClick={() => {
              scrollToElement(6);
              setSelectedIntroView(6);
            }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Branding;
