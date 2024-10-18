"use client";
import { useState } from "react";
import Image from "next/image";
import { stepData } from "@/data/step.data";

export default function MobilePurchaseGuide() {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div className="w-full flex flex-col items-center justify-center rounded-md bg-[#131511] text-[#dbdbcf] p-4 md:p-8">
      <div className="w-full max-w-md">
        <h1 className="text-lg font-revoluti text-center text-[#dbdbcf]">
          HOW TO BUY FICCO
        </h1>
        <p className="text-lg font-revoluti text-center text-[#854b3d]">
          GET STARTED
        </p>
        <p className="my-6 text-lg font-helvetica text-center text-[#854b3d]">
          Follow these easy steps to purchase FICCO coins and embrace on our
          journey
        </p>
        <div className="h-[250px] sm:h-[240px] bg-[#353731] p-8 sm:p-6 rounded-lg shadow-lg">
          <Image
            src={stepData[currentStep].icon}
            alt="icon"
            width={60}
            height={60}
            className="my-1 sm:my-4 w-16 h-auto"
          />
          <h2 className="text-xl font-roboto-bold mb-2">
            {stepData[currentStep].title}
          </h2>
          <p className="font-helvetica text-[#dbdbcf]">
            {stepData[currentStep].description}
          </p>
        </div>
        <div className="flex justify-center space-x-2 mt-6 font-helvetica">
          {stepData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentStep(index)}
              className={`w-12 h-10 rounded ${
                index === currentStep ? "bg-[#824B3D]" : "bg-[#824B3D]/50"
              } text-[#dbdbcf] font-semibold transition-colors duration-200`}
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
