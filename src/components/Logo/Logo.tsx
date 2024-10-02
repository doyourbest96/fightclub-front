import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { RxSlash } from "react-icons/rx";

const Logo = () => {
  return (
    <div className="pr-8 flex flex-row items-center">
      <Link
        href={"/"}
        className="font-revoluti text-[#dbdbcf] text-lg md::text-2xl xl:text-[24px] tracking-tighter"
      >
        IRONWILL
      </Link>
      <RxSlash className="w-6 h-6 stroke-[#dbdbcf]" />
      <Link href={"/"}>
        <FaXTwitter className="w-6 h-6 stroke-[#dbdbcf]" />
      </Link>
      <RxSlash className="w-6 h-6 stroke-[#dbdbcf]" />
      <Link href={"/"}>
        <FaTelegramPlane className="w-6 h-6 stroke-[#dbdbcf]" />
      </Link>
      <RxSlash className="w-6 h-6 stroke-[#dbdbcf]" />
      <Link href={"/"}>
        <FaInstagram className="w-6 h-6 stroke-[#dbdbcf]" />
      </Link>
    </div>
  );
};

export default Logo;
