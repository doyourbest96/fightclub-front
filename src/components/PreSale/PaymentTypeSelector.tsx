import React from "react";
import Image from "next/image";

interface PaymentTypeSelectorProps {
  paymentType: string;
  handlePaymentTypeChange: (type: string) => void;
}

const PaymentTypeSelector: React.FC<PaymentTypeSelectorProps> = ({
  paymentType,
  handlePaymentTypeChange,
}) => {
  const paymentOptions = [
    { type: "ETH", icon: "/assets/icons/ethereum.svg" },
    { type: "USDT", icon: "/assets/icons/usdt.svg" },
    { type: "DAI", icon: "/assets/icons/dai.svg" },
    { type: "USDC", icon: "/assets/icons/usd-coin.svg" },
  ];

  return (
    <div className="px-4 grid grid-cols-2 gap-x-8 gap-y-4 mb-10">
      {paymentOptions.map((option) => (
        <button
          key={option.type}
          className={`bg-[#353535] border-2 ${
            paymentType === option.type
              ? "border-orange-900"
              : "border-gray-600"
          } p-2 justify-center rounded-md flex items-center text-sm font-bold disabled:cursor-not-allowed`}
          onClick={() => handlePaymentTypeChange(option.type)}
        >
          <Image
            src={option.icon}
            alt="icon"
            width={24}
            height={24}
            className="mr-1.5"
          />
          Pay with {option.type}
        </button>
      ))}
    </div>
  );
};

export default PaymentTypeSelector;
