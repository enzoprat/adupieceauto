import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Graphite / atelier
        ink: {
          DEFAULT: "#0D0F12",
          950: "#0A0B0D",
          900: "#0D0F12",
          800: "#15171B",
          700: "#1B1E24",
          600: "#23272E",
          500: "#2C3138",
        },
        paper: "#F5F3EE", // blanc technique
        metal: "#8A8F98", // gris métal
        "metal-dim": "#5A5F68",
        // Signal atelier (rouge de marque)
        signal: {
          DEFAULT: "#E10600",
          soft: "#FF2A22",
          dark: "#A30400",
        },
        // Statuts
        avail: "#39D98A", // dispo
        pending: "#F6C445", // à confirmer / sous 4h
      },
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.03em",
      },
      maxWidth: {
        content: "1240px",
      },
      boxShadow: {
        card: "0 1px 0 0 rgba(255,255,255,0.04) inset, 0 24px 60px -24px rgba(0,0,0,0.75)",
        signal:
          "0 0 0 1px rgba(225,6,0,0.35), 0 18px 50px -12px rgba(225,6,0,0.45)",
        // Glass premium : reflet interne + halo rouge diffus
        glass:
          "inset 0 1px 0 0 rgba(255,255,255,0.14), inset 0 -1px 0 0 rgba(0,0,0,0.35), 0 10px 30px -10px rgba(225,6,0,0.45)",
        lift: "0 30px 70px -30px rgba(0,0,0,0.85)",
      },
      backgroundImage: {
        "grid-dark":
          "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
        "signal-radial":
          "radial-gradient(60% 60% at 50% 0%, rgba(225,6,0,0.20), transparent 70%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "grid-drift": {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "64px 64px" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "pulse-ring": {
          "0%": { boxShadow: "0 0 0 0 rgba(57,217,138,0.5)" },
          "70%": { boxShadow: "0 0 0 8px rgba(57,217,138,0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(57,217,138,0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both",
        "grid-drift": "grid-drift 20s linear infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-ring": "pulse-ring 2.4s ease-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
