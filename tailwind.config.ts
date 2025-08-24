import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // --- THESE ARE THE CHANGES ---
        "dark-bg": "#0a0a0f",
        "dark-card": "#12121a",
        "light-bg": "#f5f5f5", // ADDED: Light mode background
        "light-card": "#ffffff", // ADDED: Light mode cards
        "dark-text": "#1a1a1a", // UPDATED: Light mode text
        // ---------------------------
        primary: "#00f5d4",
        secondary: "#9b5de5",
        accent: "#f15bb5",
        "vit-blue": "#007BFF",
        "light-text": "#e0e0e0",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-roboto-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-pattern": "url('/grid.svg')",
        "aurora-gradient":
          "radial-gradient(ellipse at center, rgba(0, 245, 212, 0.25) 0%, rgba(0, 0, 0, 0) 70%)",
      },
      animation: {
        aurora: "aurora 60s linear infinite",
      },
      keyframes: {
        aurora: {
          from: { backgroundPosition: "50% 50%, 50% 50%" },
          to: { backgroundPosition: "350% 50%, 350% 50%" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
