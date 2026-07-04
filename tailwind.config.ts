import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "oklch(97.5% 0.014 75)",
        panel: "oklch(94.5% 0.022 70)",
        ink: "oklch(24% 0.024 50)",
        muted: "oklch(46% 0.03 55)",
        line: "oklch(88% 0.022 65)",
        accent: "oklch(56% 0.16 40)",
        "accent-dark": "oklch(43% 0.14 35)",
        warm: "oklch(74% 0.13 75)",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
