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
      "Use one of the supported currencies to buy your FICCO coins. We accept ETH, USDT, USDC and DAI.",
    icon: "/assets/icons/pay.svg",
  },
  {
    title: "Claim your FICCO coins",
    description:
      "Coins can be claimed after the second sale ended. Connect your wallet and press the claim button to receive them.",
    icon: "/assets/icons/claim.svg",
  },
];

export default function DesktopPurchaseGuide() {
  return (
    <div className="w-full flex items-center justify-center rounded-md bg-[#131511] text-[#dbdbcf] p-8">
      <div className="max-w-6xl w-full space-y-8">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-lg font-revoluti text-[#dbdbcf]">
            HOW TO BUY FICCO
          </h2>
          <p className="text-lg font-revoluti text-[#854b3d]">GET STARTED</p>
          <p className="max-w-md mt-6 text-lg font-helvetica text-center pa text-[#854b3d]">
            Follow these easy steps to purchase FICCO tokens and embrace on our
            journey
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={index}
              className="text-[#dbdbcf] bg-[#353731] p-8 rounded-lg shadow-lg"
            >
              <Image
                src={step.icon}
                alt="icon"
                width={60}
                height={60}
                className="my-4"
              />
              <h3 className="text-lg font-roboto-bold text-[#dbdbcf]">
                {step.title}
              </h3>
              <p className="mt-2 font-helvetica text-[#dbdbcf]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
