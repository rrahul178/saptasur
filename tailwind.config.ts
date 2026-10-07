import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        ink: "var(--ink)",
        muted: "var(--muted)",
        line: "var(--line)",
        accent: "var(--accent)",
      },
      fontFamily: {
        display: ['"Noto Serif Bengali"', "serif"],
        sans: ['"Hind Siliguri"', "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
