"use client";
import { useState } from "react";
import { MinusIcon, PlusIcon } from "@heroicons/react/20/solid";
import TrackImg from "@/components/trackImg";

interface FAQItem {
  question: string;
  answer: string;
}
const faqItems: FAQItem[] = [
  {
    question: "What is FICCO coin?",
    answer:
      "FICCO is the native cryptocurrency of the Fight Club platform, designed to facilitate transactions within the decentralized ecosystem, including sponsorships, match funding, and access to exclusive content.",
  },
  {
    question: "How do I purchase FICCO coins from the pre-sale?",
    answer:
      "You can purchase FICCO coins during the pre-sale by participating in the initial fundraising stage, which allows early investors to acquire tokens before the public sale.",
  },
  {
    question: "Which blockchain network is FICCO coin on?",
    answer: "FICCO coin is built on the Ethereum blockchain.",
  },
  {
    question: "When can I claim my coins?",
    answer:
      "You can claim your coins after the Token Generation Event (TGE), with specific release schedules depending on the sale phase.",
  },
  {
    question: "How can I store and manage my FICCO coins?",
    answer:
      "You can store and manage your FICCO coins in a compatible cryptocurrency wallet that supports Ethereum-based tokens.",
  },
  {
    question: "For what can I use my FICCO coins?",
    answer:
      "You can use your FICCO coins for various purposes, including funding matches, purchasing exclusive content, merchandise, and participating in community features.",
  },
  {
    question: "Can I sell my FICCO coins?",
    answer:
      "Yes, you can sell your FICCO coins on exchanges where they are listed after the public sale.",
  },
];

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
            <TrackImg className="absolute top-0 translate-x-52 -translate-y-16 -z-10  w-[240px] h-[240px]" />
          </span>
        </h2>
        <div className="font-roboto-bold">
          {faqItems.map((item, index) => (
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
