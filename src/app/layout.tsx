import type { Metadata } from "next";
import { space_grotesk, roboto } from "@/utils/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "FIGHTCLUB",
  description:
    "Fight Club envisions a world where martial arts transcend barriers, empowers individuals and unites communities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto}>
        <div className="font-roboto w-full flex flex-col items-center">
          {children}
        </div>
      </body>
    </html>
  );
}
