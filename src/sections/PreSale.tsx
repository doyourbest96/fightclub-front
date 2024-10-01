"use client";
import React, { useState, useEffect } from "react";
import { FaCopy } from "react-icons/fa";

import Image from "next/image";

const PreSaleInterface: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 14,
    hours: 24,
    minutes: 40,
    seconds: 60,
  });
  const [progress] = useState(90000.24);
  const [amountETH, setAmountETH] = useState("0.0");
  const [getAmount, setGetAmount] = useState("0.0");
  const [paymentType, setPaymentType] = useState("ETH");

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime.seconds > 0) {
          return { ...prevTime, seconds: prevTime.seconds - 1 };
        } else if (prevTime.minutes > 0) {
          return { ...prevTime, minutes: prevTime.minutes - 1, seconds: 59 };
        } else if (prevTime.hours > 0) {
          return {
            ...prevTime,
            hours: prevTime.hours - 1,
            minutes: 59,
            seconds: 59,
          };
        } else if (prevTime.days > 0) {
          return {
            ...prevTime,
            days: prevTime.days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59,
          };
        }
        return prevTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  return (
    <div className="text-[#dbdbcf] flex items-center justify-center sm:px-8 md:px-12 lg:px-4 max-w-md min-w-md">
      <div className="border border-[#824B3D] rounded-lg shadow-lg w-full">
        <div className="w-full bg-[#131511] rounded-lg text-center p-4 ">
          <h1 className="text-2xl font-revoluti font-bold mb-4 italic">
            PRE SALE 1
          </h1>
          <div className="mb-4 items-center">
            <div className="w-full bg-[#787871] border-[#824B3D] border-2 rounded-xl h-8">
              <div
                className="bg-[#824B3D] h-7 rounded-l-lg"
                style={{ width: `${(progress / 1000000) * 100}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-lg font-bold font-revoluti mt-1 text-[#dbdbcf]">
              <span>${progress}</span>
              <span>$1000000</span>
            </div>
          </div>

          <div className="mb-4">
            <p className="text-sm font-bold text-[#824b3d]">
              Current maximum price: $ 0.0001
            </p>
            <p className="text-sm font-bold text-[#dbdbcf]" >Sale 2 maximum price: $ 0.0004</p>
          </div>

          <div className="mb-4">
            <p className="font-bold font-revoluti text-2xl text-[#dbdbcf]">TIME LEFT</p>
          </div>

          <div className="grid grid-cols-4 gap-2 mb-6">
            <div className="bg-[#212121] border border-orange-900 p-2 rounded">
              <div className="text-2xl font-revoluti">{timeLeft.days}</div>
              <div className="text-sm">days</div>
            </div>
            <div className="bg-[#212121] border border-orange-900 p-2 rounded">
              <div className="text-2xl font-revoluti">{timeLeft.hours}</div>
              <div className="text-sm">hours</div>
            </div>
            <div className="bg-[#212121] border border-orange-900 p-2 rounded">
              <div className="text-2xl font-revoluti">{timeLeft.minutes}</div>
              <div className="text-sm">minutes</div>
            </div>
            <div className="bg-[#212121] border border-orange-900 p-2 rounded">
              <div className="text-2xl font-revoluti">{timeLeft.seconds}</div>
              <div className="text-sm">seconds</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 mb-4">
            <button
              className={`bg-[#353535] border ${
                paymentType === "ETH"
                  ? "border-orange-900 border-2"
                  : "border-gray-600"
              } p-1 sm:p-2 lg:p-2 justify-center rounded-md flex items-center text-sm font-bold`}
              onClick={() => setPaymentType("ETH")}
            >
              <Image
                src={"/assets/icons/eth.png"}
                alt="icon"
                width={24}
                height={24}
                className="mr-1 sm:mr-4 rounded-full"
              />{" "}
              Pay with ETH
            </button>
            <button
              className={`bg-[#353535] border ${
                paymentType === "USDT"
                  ? "border-orange-900 border-2"
                  : "border-gray-600"
              } pl-1 sm:p-2 lg:p-2 justify-center rounded-md flex items-center text-sm font-bold`}
              onClick={() => setPaymentType("USDT")}
            >
              <Image
                src={"/assets/icons/usdt.png"}
                alt="icon"
                width={24}
                height={24}
                className="mr-1 lg:mr-2 rounded-full"
              />{" "}
              Pay with USDT
            </button>
            <button
              className={`bg-[#353535] border ${
                paymentType === "BNB"
                  ? "border-orange-900 border-2"
                  : "border-gray-600"
              }  p-1 sm:p-2 lg:p-2 justify-center rounded-md flex items-center text-sm font-bold`}
              onClick={() => setPaymentType("BNB")}
            >
              <Image
                src={"/assets/icons/bnb.png"}
                alt="icon"
                width={24}
                height={24}
                className="mr-1 sm:mr-3 rounded-full"
              />{" "}
              Pay with BNB
            </button>
            <button
              className={`bg-[#353535] border ${
                paymentType === "Card"
                  ? "border-orange-900 border-2"
                  : "border-gray-600"
              }  p-1 sm:p-2 lg:p-2 justify-center rounded-md flex items-center text-sm font-bold`}
              onClick={() => setPaymentType("Card")}
            >
              <Image
                src={"/assets/icons/card.png"}
                alt="icon"
                width={24}
                height={24}
                className="mr-1 lg:mr-2 rounded-full bg-white"
              />{" "}
              Pay with Card
            </button>
          </div>

          <div className="grid grid-cols-2 gap-2 mb-4">
            <div className="text-left">
              <label className="block text-sm mb-1 sm:font-bold">
                AMOUNT (ETH)
              </label>
              <input
                type="number"
                value={amountETH}
                onChange={(e) => setAmountETH(e.target.value)}
                className="bg-[#353535] rounded p-2 text-[#dbdbcf] w-full"
              />
            </div>
            <div className="text-left">
              <label className="block text-sm mb-1 sm:font-bold">
                GET AMOUNT(FICCO)
              </label>
              <input
                type="number"
                value={getAmount}
                onChange={(e) => setGetAmount(e.target.value)}
                className="bg-[#353535] rounded p-2 text-[#dbdbcf] w-full"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm mb-1 sm:font-bold">
              CURRENT MYSTERY FICCO
            </label>
            <input
              type="number"
              value="0.0"
              readOnly
              className="bg-[#353535] rounded p-2 text-[#dbdbcf] w-[50%]"
            />
          </div>

          <button className="w-[70%] bg-[#824B3D] p-3 rounded font-bold mb-4 focus:bg-orange-800">
            CONNECT WALLET
          </button>

          <div className="">
            <p className="text-sm font-bold">Your current holdings:</p>
            <p className="text-sm mb-2">0 USDT</p>
            <p className="text-sm font-bold">Balance PICCO</p>
            <p className="text-sm">0</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between bg-[#353535] border-t border-orange-900 p-2 rounded-b-lg">
          <span className="text-xs font-bold">Contract address:</span>
          <div className="flex items-center gap-2 mt-1 justify-center w-[90%]">
            <span className="text-xs">
              0x5384545c3190474713bdc48c3371fdbccd2b8e9
            </span>
            <button
              onClick={() =>
                copyToClipboard("0x5384545c3190474713bdc48c3371fdbccd2b8e9")
              }
            >
              <FaCopy />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreSaleInterface;
