import { Space_Grotesk, Roboto } from "next/font/google";

export const space_grotesk_init = Space_Grotesk({
  weight: "400",
  display: "swap",
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const roboto_init = Roboto({
  weight: "400",
  display: "swap",
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const space_grotesk = space_grotesk_init.variable;
export const roboto = roboto_init.variable;
