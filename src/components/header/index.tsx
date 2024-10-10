"use client";

import Logo from "@/components/Logo/Logo";
import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";

const navigation = [
  { name: "about", href: "#about" },
  { name: "buy", href: "#buy" },
  { name: "tokenomics", href: "#tokenomics" },
  { name: "roadmap", href: "#roadmap" },
  { name: "founders", href: "#founders" },
  { name: "faq", href: "#faq" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col gap-12 pb-8 branding">
        <div className="py-7 flex px-1 md:px-4 lg:px-2 xl:px-4">
          <div className="flex flex-row flex-1 justify-between items-center uppercase bg-[#030303]/60">
            <Logo />
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="hidden lg:block font-revoluti lg:text-[14px] text-[#824b3d] tracking-tighter hover:text-[#dbdbcf]"
              >
                {item.name}
              </a>
            ))}
            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="inline-flex items-center justify-center rounded-md p-2.5 text-[#dbdbcf]"
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <Link
              href="/assets/documents/whitepaper.pdf"
              className="hidden lg:block p-2 ml-8 lg:text-[14px] font-revoluti uppercase rounded-md bg-[#854b3d] text-[#dbdbcf] hover:filter hover:brightness-125 hover:-translate-y-1 transition-all"
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              whitepaper
            </Link>
          </div>
        </div>
        <div className="relative w-full lg:pl-12">
          <div className="max-w-[516px] mx-1 md:mx-8 flex flex-col items-center text-center w-full font-light">
            <div className="w-full mt-8">
              <Image
                src="/assets/images/mark.png"
                alt="mark"
                width={383}
                height={160}
                className="w-full h-auto mb-12"
              />
            </div>
            <div className="w-full max-w-[31rem] pr-2 sm:pr-8 flex flex-col justify-center items-center">
              <p className="font-helvetica text-[1.4rem] sm:text-2xl font-light text-[#d3d3c7]">
                Empowering martial artists, engaging fans and connecting
                industry leaders for a financially rewarding experience with the
                IRONWILL platform.
              </p>
              <Link
                href="/assets/documents/whitepaper.pdf"
                className="my-12 px-6 py-2 flex justify-center items-center gap-4 text-[#d3d3c7] text-md font-helvetica font-light rounded-md bg-gradient-to-r from-[#824b3d]/50 from-10% via-[#824b3d] via-50% to-[#824b3d]/50 to-90% hover:filter hover:brightness-125 hover:-translate-y-1 transition-all"
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                <Image
                  src="/assets/icons/doc.svg"
                  alt="whitepaper"
                  width={20}
                  height={20}
                  className="w-auto h-auto"
                />
                <span className="font-black">Whitepaper</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <Dialog
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 bg-black">
          <div className="flex items-center justify-between">
            <div />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon
                aria-hidden="true"
                className="h-6 w-6 text-[#824b3d] hover:bg-orange-400"
              />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="flex flex-col items-start gap-2 text-lg font-black text-[#824b3d] uppercase">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="hover:bg-orange-400 w-full p-2 rounded-md"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </>
  );
};

export default Header;
