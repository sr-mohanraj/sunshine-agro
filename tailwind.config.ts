import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx,mdx}",
    "./data/**/*.{ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Near-black warm charcoal taken from the SAP logomark plate. Primary
        // surface for nav chrome, hero, footer and every dark band on the site.
        ink: {
          DEFAULT: "#12100E",
          50: "#F6F5F3",
          100: "#E8E5E1",
          200: "#CFCAC3",
          300: "#A9A199",
          // Muted body text on the bone page background. Kept dark enough to
          // clear 4.5:1 against #FAF7F1 at small sizes.
          400: "#6E655C",
          500: "#564E46",
          600: "#3A332C",
          700: "#26211C",
          800: "#191512",
          900: "#0C0A08",
        },
        // Sunrise orange - the left half of the logo gradient. Primary accent:
        // CTAs, active nav, rule lines, iconography.
        sun: {
          DEFAULT: "#F26A21",
          50: "#FEF3EB",
          100: "#FDE0CB",
          200: "#FBBE95",
          300: "#F89A5F",
          400: "#F58039",
          500: "#F26A21",
          // The accent used for eyebrow labels and links on light surfaces, so
          // it is tuned for 4.5:1 on #FAF7F1 rather than to match the logomark.
          600: "#BE4710",
          700: "#A03D0C",
          800: "#7A2F0A",
          900: "#4E1E06",
        },
        // Warm gold - the right half of the logo gradient. Used for gradient
        // terminals, highlight text on dark, and stat numerals.
        gold: {
          DEFAULT: "#F9C846",
          50: "#FEF9EC",
          100: "#FDEFC8",
          200: "#FBE193",
          300: "#F9D163",
          400: "#F9C846",
          500: "#E8AC15",
          600: "#BC8810",
          700: "#8D660C",
        },
        // Fermentation green - the biology half of the story (yeast, gut health,
        // agriculture). Support accent for badges, spec chips and diagrams.
        leaf: {
          DEFAULT: "#1F7A4C",
          50: "#EDF8F2",
          100: "#D2EDDF",
          200: "#A2DBBE",
          300: "#69C296",
          400: "#37A472",
          500: "#1F7A4C",
          600: "#18613C",
          700: "#124A2E",
          800: "#0C3320",
        },
        // Warm bone/paper - light-mode page background and dark-mode body text.
        bone: {
          DEFAULT: "#FAF7F1",
          100: "#FFFFFF",
          200: "#FAF7F1",
          300: "#F1EBE0",
          400: "#E4DBCB",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-sora)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        "8xl": "90rem",
      },
      boxShadow: {
        card: "0 2px 8px 0 rgba(18, 16, 14, 0.06), 0 1px 2px 0 rgba(18, 16, 14, 0.04)",
        "card-hover": "0 18px 40px -12px rgba(18, 16, 14, 0.24)",
        glow: "0 0 0 1px rgba(242, 106, 33, 0.35), 0 8px 32px -8px rgba(242, 106, 33, 0.45)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "ken-burns": {
          "0%": { transform: "scale(1) translate3d(0, 0, 0)" },
          "100%": { transform: "scale(1.09) translate3d(-1.5%, -1%, 0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-700px 0" },
          "100%": { backgroundPosition: "700px 0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        "ken-burns": "ken-burns 22s ease-out both",
        shimmer: "shimmer 2s infinite linear",
      },
      backgroundImage: {
        "sun-gradient": "linear-gradient(102deg, #F26A21 0%, #F9A03F 48%, #F9C846 100%)",
        "sun-radial": "radial-gradient(circle at 50% 120%, rgba(242,106,33,0.35) 0%, rgba(18,16,14,0) 62%)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
