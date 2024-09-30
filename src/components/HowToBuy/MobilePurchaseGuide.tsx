"use client";
import { useState } from "react";
import Image from "next/image";

interface Step {
  title: string;
  description: string;
  icon: string;
}

const steps: Step[] = [
  {
    title: "Connect your wallet",
    description:
      "Press the connect button and choose one of the many supported wallets to connect to the website.",
    icon: "/assets/icons/wallet.svg",
  },
  {
    title: "Pay with the currency you like",
    description:
      "Use one of the supported currencies to buy your FICCO coins. We accept ETH, USDT, SOL and CARD.",
    icon: "/assets/icons/pay.svg",
  },
  {
    title: "Claim your FICCO coins",
    description:
      "Coins can be claimed after the second sale ended. Connect your wallet and press the claim button to receive them.",
    icon: "/assets/icons/claim.svg",
  },
];

export default function MobilePurchaseGuide() {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div className="w-full flex flex-col items-center justify-center rounded-md bg-[#131511] text-white p-8">
      <div className="w-full max-w-md">
        <h1 className="text-lg font-revoluti text-center">HOW TO BUY FICCO</h1>
        <p className="mt-2 text-lg font-revoluti text-center text-[#854b3d]">
          GET STARTED
        </p>
        <p className="my-4 text-lg font-helvetica text-center text-[#854b3d]">
          Follow these easy steps to purchase FICCO tokens and embrace on our
          journey
        </p>
        <div className="h-[240px] bg-[#353731] p-6 rounded-lg shadow-lg font-helvetica">
          <Image
            src={steps[currentStep].icon}
            alt="icon"
            width={60}
            height={60}
            className="my-4"
          />
          <h2 className="text-xl font-semibold mb-2">
            {steps[currentStep].title}
          </h2>
          <p className="text-gray-400">{steps[currentStep].description}</p>
        </div>
        <div className="flex justify-center space-x-2 mt-6 font-helvetica">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentStep(index)}
              className={`w-12 h-10 rounded ${
                index === currentStep ? "bg-yellow-600" : "bg-gray-700"
              } text-white font-semibold transition-colors duration-200`}
              aria-label={`Step ${index + 1}`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}