import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { RxSlash } from "react-icons/rx";

const Logo = () => {
  return (
    <div className="flex flex-row items-center">
      <Link
        href={"/"}
        className="font-revoluti text-2xl xl:text-3xl tracking-tighter"
      >
        IRONWILL
      </Link>
      <RxSlash className="w-6 h-6" />
      <Link href={"/"}>
        <FaXTwitter className="w-6 h-6" />
      </Link>
      <RxSlash className="w-6 h-6" />
      <Link href={"/"}>
        <FaTelegramPlane className="w-6 h-6" />
      </Link>
      <RxSlash className="w-6 h-6" />
      <Link href={"/"}>
        <FaInstagram className="w-6 h-6" />
      </Link>
    </div>
  );
};

export default Logo;
