import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sidebar: "#B3EBF2",
        primaryText: "#0F172A",
      },
    },
  },
  plugins: [],
} satisfies Config;

