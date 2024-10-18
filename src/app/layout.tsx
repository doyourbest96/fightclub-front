import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "IRONWILL",
  description:
    "IRONWILL envisions a world where martial arts transcend barriers, empowers individuals and unites communities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/icons/favicon.ico" />
      </head>
      <body className="relative" cz-shortcut-listen="">
        <div className="absolute -z-50 bg-[#030303] top-0 left-0 right-0 bottom-0" />
        <div className="w-full flex flex-col items-center">{children}</div>
      </body>
    </html>
  );
}
