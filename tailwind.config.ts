import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        studio: {
          black: "#020403",
          panel: "#2d2d2d",
          ink: "#f4f4f4",
          muted: "#a5a5a5",
          green: "#002e06",
          lime: "#1c5f18",
        },
      },
      fontFamily: {
        sans: ["Inter", "Arial", "Helvetica", "sans-serif"],
      },
      boxShadow: {
        drawer: "18px 0 35px rgba(0, 0, 0, 0.45)",
      },
    },
  },
  plugins: [],
} satisfies Config;
