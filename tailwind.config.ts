import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#ffffff",
        cream: "#fbf6ef",
        tan: "#f6e4d3",
        ink: "#16324f",
        ink2: "#1c2430",
        muted: "#77705f",
        line: "#ecdfc9",
        accent: "#c1652f",
        "accent-dark": "#a8501f",
        warm: "#f0a35f",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
