"use client";
import dynamic from "next/dynamic";
import { useState } from "react";
import { MinusIcon, PlusIcon } from "@heroicons/react/20/solid";
import { faqData } from "@/data/faq.data";

const TrackImg = dynamic(() => import("@/components/trackImg"), {
  ssr: false,
});

export default function FiccoFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faq" className=" text-[#dbdbcf] p-2">
      <div className="max-w-xl mx-auto">
        <h2 className="text-lg font-revoluti text-center mb-6">
          <span className="relative">
            FAQ
            <TrackImg className="absolute top-0 md:translate-x-52 -translate-y-16 -z-10  w-[240px] h-[240px]" />
          </span>
        </h2>
        <div className="font-roboto-bold">
          {faqData.map((item, index) => (
            <div key={index}>
              <button
                className="flex justify-between items-center w-full py-1 text-left focus:outline-none group"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span className="text-lg font-roboto-bold font-black pr-8">
                  {item.question}
                </span>
                <span className="text-[#dbdbcf] transition-transform duration-200 ease-in-out group-hover:text-white">
                  {openIndex === index ? (
                    <MinusIcon className="w-6 h-6" />
                  ) : (
                    <PlusIcon className="w-6 h-6" />
                  )}
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="py-2 pl-4 text-[#dbdbcf] font-roboto-thin">
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
