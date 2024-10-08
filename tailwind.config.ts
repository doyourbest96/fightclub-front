import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        helvetica: ["Helvetica Neue", "sans-serif"],
        helveticaNeue5: ["Helvetica Neue 5", "sans-serif"],
        revoluti: ['"Revoluti"', "sans-serif"],
        "roboto-thin": ["roboto-thin", "sans-serif"],
        "roboto-bold": ["roboto-bold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
