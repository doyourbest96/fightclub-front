import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { RxSlash } from "react-icons/rx";

const Footer = () => {
  return (
    <footer className="py-4 px-6 w-full border-t">
      <div className="container mx-auto flex flex-col lg:flex-row gap-4 items-center px-2 justify-between">
        <div className="flex items-center mb-4 md:mb-0 mx-4">
          <div className="flex flex-row items-center">
            <Link
              href={"/"}
              className="font-revoluti text-xl tracking-tighter text-[#dbdbcf]"
            >
              IRONWILL
            </Link>
            <RxSlash className="w-5 h-5 stroke-[#dbdbcf]" />
            <Link href={"https://x.com/IRONWILLIO"}>
              <FaXTwitter className="w-5 h-5 stroke-[#dbdbcf]" />
            </Link>
            <RxSlash className="w-5 h-5 stroke-[#dbdbcf]" />
            <Link href={"https://t.me/IRONWILL.IO"}>
              <FaTelegramPlane className="w-5 h-5 stroke-[#dbdbcf]" />
            </Link>
            <RxSlash className="w-5 h-5 stroke-[#dbdbcf]" />
            <Link href={"https://www.instagram.com/ironwill_io"}>
              <FaInstagram className="w-5 h-5 stroke-[#dbdbcf]" />
            </Link>
          </div>
        </div>
        <div className="max-w-5xl font-helvetica text-center lg:text-left text-[#dbdbcf]">
          <p>
            Please review this legal disclaimer carefully. Seek professional
            advice for any doubt. The information provided is not exhaustive and
            doesn&apos;t constitute part of a contractual agreement. While we
            strive for accuracy, the information, services, and timelines are
            subject to change without notice. This disclaimer doesn&apos;t
            obligate anyone to enter a contract or binding commitment. By using
            this information, you acknowledge that it doesn&apos;t contravene
            applicable laws, regulatory requirements, or regulations.
            Cryptocurrency may be unregulated in your jurisdiction. The value of
            cryptocurrencies may fluctuate. Profits may be subject to capital
            gains or other taxes applicable in your jurisdiction.
            <span className="mt-2 text-xm font-bold stroke-[#dbdbcf]">
              © Fight Club. All rights reserved.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
