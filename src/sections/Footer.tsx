import Logo from "@/components/Logo/Logo";

const Footer = () => {
  return (
    <div className="py-10 flex flex-row justify-between items-center gap-6 border-t">
      <Logo />
      <p className="text-sm">
        {`Please review this legal disclaimer carefully. Seek professional advice
        for any doubt. The information provided is not exhaustive and doesn't
        constitute part of a contractual agreement. While we strive for
        accuracy, the information, services, and timelines are subject to change
        without notice. This disclaimer doesn't obligate anyone to enter a
        contract or binding commitment. By using this information, you
        acknowledge that it doesn't contravene applicable laws, regulatory
        requirements, or regulations. Cryptocurrency may be unregulated in your
        jurisdiction. The value of cryptocurrencies may fluctuate. Profits may
        be subject to capital gains or other taxes applicable in your
        jurisdiction. © FIght Club. All rights reserved.`}
      </p>
    </div>
  );
};

export default Footer;
