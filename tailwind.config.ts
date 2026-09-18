import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Warm near-black taken from the logo plate. Text, footer, logo tile.
        ink: {
          DEFAULT: "#12100E",
          50: "#F6F5F3",
          100: "#E8E5E1",
          200: "#CFCAC3",
          300: "#A9A199",
          400: "#6E655C",
          500: "#564E46",
          600: "#3A332C",
          700: "#26211C",
          800: "#191512",
          900: "#0C0A08",
        },
        // Orange from the logo. 600 is the one used for buttons and links: white
        // text on it clears 4.5:1, which the brighter 500 does not.
        sun: {
          50: "#FEF3EB",
          100: "#FDE0CB",
          200: "#FBBE95",
          400: "#F58039",
          500: "#F26A21",
          600: "#BE4710",
          700: "#A03D0C",
        },
        leaf: {
          50: "#EDF8F2",
          600: "#18613C",
          700: "#124A2E",
        },
        bone: {
          100: "#FFFFFF",
          200: "#FAF7F1",
          300: "#F1EBE0",
          400: "#E4DBCB",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-serif)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
