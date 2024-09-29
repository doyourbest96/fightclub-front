import type { Metadata } from "next";
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
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
