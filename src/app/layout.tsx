import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IRONWILL",
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
      <body>
        <div className="w-full flex flex-col items-center">{children}</div>
      </body>
    </html>
  );
}
