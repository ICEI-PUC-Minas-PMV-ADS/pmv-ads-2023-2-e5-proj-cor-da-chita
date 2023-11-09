import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        white: "#FBFEF9",
        black: "#100C08",
        light: "#FBFEF9",
        dark: "#100C08",
        green: "#4cb69f",
        grey: "#3b4849",
        foreground: "#100C08",
        success: "#4cb69f",
        secondary: "#EE4266",
      },
      fontFamily: {
        sans: ['Roboto', 'Sans-serif'],
      },
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      addCommonColors: true,
      layout: {
        radius: {
          small: '2px', // rounded-small
          medium: '2px', // rounded-medium
          large: '2px', // rounded-large
          DEFAULT: '2px', // rounded by default
        },
        borderWidth: {
          small: '1px', // border-small
          medium: '1px', // border-medium
          large: '1px', // border-large
          DEFAULT: '1px', // border by default
        },
      },
    }),
  ],
};

export default config;
