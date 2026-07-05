import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "oklch(98% 0.006 230)",
        panel: "oklch(95.5% 0.012 235)",
        ink: "oklch(20% 0.025 245)",
        muted: "oklch(45% 0.025 245)",
        line: "oklch(88% 0.012 235)",
        accent: "oklch(54% 0.14 235)",
        "accent-dark": "oklch(36% 0.12 240)",
        warm: "oklch(68% 0.16 55)",
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
