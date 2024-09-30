"use client";

import Logo from "@/components/Logo/Logo";
import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { Bars3Icon } from "@heroicons/react/20/solid";
import { IoDocumentTextOutline } from "react-icons/io5";

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
      <div className="advertisement flex flex-col gap-16">
        <div className="py-7 flex flex-row items-center gap-4">
          <div className="flex flex-1 flex-row items-center gap-12 uppercase">
            <Logo />
            <div className="hidden p-3 lg:flex flex-1 flex-row items-end gap-6 font-revoluti text-sm text-[#824b3d] bg-black/70 tracking-tighter">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  // className="text-sm font-semibold leading-6 text-gray-900"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <button className="hidden lg:block p-2 text-lg font-extrabold italic uppercase rounded-md bg-orange-950">
            whitepaper
          </button>
        </div>
        <div className="relative w-full">
          <div className="absolute -top-12 w-full max-w-[580px] text-center">
            <p className="text-[164px] text-stroke-8">FIGHT</p>
          </div>
          <div className="absolute top-40 w-full max-w-[580px] text-center">
            <p className="text-4xl text-stroke-4 text-[#824b3d]">C L U B</p>
          </div>
          <div className="mt-64 max-w-[580px] px-8 flex flex-col items-center text-center w-full font-light">
            <p className="font-helvetica text-xl font-light">
              Empowering martial artists, engaging fans and connecting industry
              leaders for a financially rewarding experience with the FIght Club
              platform.
            </p>
            <button className="my-14 px-4 py-1 flex justify-center items-center gap-4 font-light rounded-sm  bg-gradient-to-r from-[#824b3d]/50 from-10% via-[#824b3d] via-50% to-[#824b3d]/50 to-90% hover:filter hover:brightness-125 hover:-translate-y-1 transition-all">
              <IoDocumentTextOutline aria-hidden="true" className="h-6 w-6" />
              Whitepaper
            </button>
          </div>
        </div>
      </div>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
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
