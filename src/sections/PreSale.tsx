"use client";
import React, { useState, useEffect } from "react";
import { FaEthereum, FaCopy } from "react-icons/fa";
import { SiTether } from "react-icons/si";
import { IoLogoUsd } from "react-icons/io";

const PreSaleInterface: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 14,
    hours: 24,
    minutes: 40,
    seconds: 60,
  });
  const [progress, setProgress] = useState(90000.24);
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
    <div className="text-white flex items-center justify-center sm:px-8 md:px-12 lg:px-4">
      <div className="border border-orange-900 rounded-lg shadow-lg w-full">
        <div className="w-full bg-[#131511] rounded-lg text-center p-4 sm:p-8">
          <h1 className="text-2xl font-bold mb-4 italic">PRE SALE 1</h1>

          <div className="mb-4">
            <div className="w-full bg-gray-700 rounded-full h-2.5">
              <div
                className="bg-orange-900 h-2.5 rounded-full"
                style={{ width: `${(progress / 1000000) * 100}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-lg font-bold mt-1 italic">
              <span>${progress}</span>
              <span>$1,000,000</span>
            </div>
          </div>

          <div className="mb-4">
            <p className="text-sm text-orange-900">
              Current maximum price: $ 0.0001
            </p>
            <p className="text-sm">Sale 2 maximum price: $ 0.0004</p>
          </div>

          <div className="mb-4">
            <p className="font-bold italic text-2xl">TIME LEFT</p>
          </div>

          <div className="grid grid-cols-4 gap-2 mb-6">
            <div className="bg-[#212121] border border-orange-900 p-2 rounded">
              <div className="text-2xl font-bold italic">{timeLeft.days}</div>
              <div className="text-xs">days</div>
            </div>
            <div className="bg-[#212121] border border-orange-900 p-2 rounded">
              <div className="text-2xl font-bold italic">{timeLeft.hours}</div>
              <div className="text-xs">hours</div>
            </div>
            <div className="bg-[#212121] border border-orange-900 p-2 rounded">
              <div className="text-2xl font-bold italic">
                {timeLeft.minutes}
              </div>
              <div className="text-xs">minutes</div>
            </div>
            <div className="bg-[#212121] border border-orange-900 p-2 rounded">
              <div className="text-2xl font-bold italic">
                {timeLeft.seconds}
              </div>
              <div className="text-xs">seconds</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 mb-4">
            <button
              className={`bg-[#212121] border ${
                paymentType === "ETH" ? "border-orange-900" : "border-gray-600"
              } p-2 rounded-md flex items-center justify-center`}
              onClick={() => setPaymentType("ETH")}
            >
              <FaEthereum className="mr-2" /> Pay with ETH
            </button>
            <button
              className={`bg-[#212121] border ${
                paymentType === "USDT" ? "border-orange-900" : "border-gray-600"
              } p-2 rounded-md flex items-center justify-center`}
              onClick={() => setPaymentType("USDT")}
            >
              <SiTether className="mr-2" /> Pay with USDT
            </button>
            <button
              className={`bg-[#212121] border ${
                paymentType === "SOL" ? "border-orange-900" : "border-gray-600"
              } p-2 rounded-md flex items-center justify-center`}
              onClick={() => setPaymentType("SOL")}
            >
              <IoLogoUsd className="mr-2" /> Pay with SOL
            </button>
            <button
              className={`bg-[#212121] border ${
                paymentType === "Card" ? "border-orange-900" : "border-gray-600"
              } p-2 rounded-md flex items-center justify-center`}
              onClick={() => setPaymentType("Card")}
            >
              <SiTether className="mr-2" /> Pay with Card
            </button>
          </div>

          <div className="grid grid-cols-2 gap-2 mb-4">
            <div className="text-left">
              <label className="block text-sm mb-1">AMOUNT (ETH)</label>
              <input
                type="number"
                value={amountETH}
                onChange={(e) => setAmountETH(e.target.value)}
                className="bg-[#212121] rounded p-2 text-white w-full"
              />
            </div>
            <div className="text-left">
              <label className="block text-sm mb-1">GET AMOUNT (FICCO)</label>
              <input
                type="number"
                value={getAmount}
                onChange={(e) => setGetAmount(e.target.value)}
                className="bg-[#212121] rounded p-2 text-white w-full"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm mb-1">CURRENT MYSTERY FICCO</label>
            <input
              type="number"
              value="0.0"
              readOnly
              className="bg-[#212121] rounded p-2 text-white w-[50%]"
            />
          </div>

          <button className="w-[70%] bg-orange-900 p-3 rounded font-bold mb-4">
            CONNECT WALLET
          </button>

          <div className="">
            <p className="text-sm">Your current holdings:</p>
            <p className="text-sm mb-2">0 USDT</p>
            <p className="text-sm">Balance PICCO</p>
            <p className="text-sm">0</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between bg-[#212121] border-t border-orange-900 p-2 rounded-b-lg">
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
