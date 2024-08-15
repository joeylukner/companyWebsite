import {nextui} from '@nextui-org/theme';
import type { Config } from "tailwindcss";

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

const config: Config = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        trueGray: colors.neutral,
      },
      fontSize: {
        '20vw': '20vw',
        '10vw': '10vw',
        '7vw': '7vw',
        '6vw': '6vw',
        '5vw': '5vw',
        '4vw': '4vw',
        '3vw': '3vw',
        '2.5vw': '2.5vw',
        '2vw': '2vw',
        '1.5vw': '1.5vw',
        '1.25vw': '1.25vw',
        '1vw': '1vw',
      },
    },
    fontFamily: {
      sans: ["Raleway", ...defaultTheme.fontFamily.sans],
      stock: [defaultTheme.fontFamily.sans],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [nextui()],
};
export default config;
