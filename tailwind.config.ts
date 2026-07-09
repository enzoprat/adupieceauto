import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0B0B0D",
          900: "#0B0B0D",
          800: "#101116",
          700: "#181A1F",
          600: "#202329",
        },
        anthracite: "#181A1F",
        racing: {
          DEFAULT: "#E10600",
          dark: "#9E1111",
        },
        mute: "#9CA3AF",
        haze: "#F3F4F6",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        tight: ["var(--font-inter-tight)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        content: "1200px",
      },
      boxShadow: {
        card: "0 1px 0 0 rgba(255,255,255,0.04) inset, 0 12px 40px -12px rgba(0,0,0,0.6)",
        glow: "0 0 0 1px rgba(225,6,0,0.4), 0 12px 40px -8px rgba(225,6,0,0.35)",
      },
      backgroundImage: {
        "grid-dark":
          "linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
