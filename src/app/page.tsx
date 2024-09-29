"use client";

import Header from "@/components/header";
import Branding from "@/components/Brading";

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Home() {
  return (
    <div className="landing max-w-7xl px-10 flex flex-col gap-10 w-full">
      <Header />
      <Branding />
    </div>
  );
}
