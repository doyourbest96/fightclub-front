import HowtoItem from "@/components/HowtoItem/HowtoItem";

const items = [
  {
    icon: "/assets/icons/wallet.svg",
    title: "Connect your wallet",
    content:
      "Press the connect button and choose one of the many supported wallets to connect to the website.",
  },
  {
    icon: "/assets/icons/pay.svg",
    title: "Pay with the currency you like",
    content:
      "Use one of the supported currencies to buy your FICCO coins. We accept ETH, USDT, SOL and CARD.",
  },
  {
    icon: "/assets/icons/claim.svg",
    title: "Claim your FICCO coins",
    content:
      "Coins can be claimed after the second sale ended. Connect your wallet and press the claim button to receive them.",
  },
];

const HowtoBuy = () => {
  return (
    <div className="p-10 flex flex-col gap-10 rounded-md bg-[#151312]">
      <div className="text-xl font-black text-center">
        <p className="italic uppercase">How to buy FICCO</p>
        <p className="text-orange-900 italic uppercase">Get started</p>
      </div>
      <div className="flex justify-center">
        <p className="max-w-96 text-center text-orange-900">
          Follow these easy steps to purchase FICCO tokens and embrace on our
          journey
        </p>
      </div>
      <div className="flex flex-row gap-10">
        {items.map((item, idx) => (
          <div key={idx}>
            <HowtoItem item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowtoBuy;
