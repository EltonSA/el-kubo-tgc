import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      colors: {
        "elkubo-cyan": "#00BFFF",
        "elkubo-yellow": "#FDD835",
        "elkubo-teal": "#0F4C5C",
        "elkubo-blue-light": "#80DEEA",
        "elkubo-blue-dark": "#1a5f7a",
        "ig-bg": "#0a0a0a",
        "ig-card": "#141414",
        "ig-border": "#262626",
      },
      borderRadius: {
        "elkubo": "2rem",
        "elkubo-lg": "2.5rem",
        "elkubo-xl": "3rem",
      },
      boxShadow: {
        "elkubo-card": "0 25px 50px -12px rgba(15, 76, 92, 0.35), 0 0 0 1px rgba(253, 216, 53, 0.08)",
        "elkubo-btn": "0 2px 8px rgba(15, 76, 92, 0.15)",
        "elkubo-btn-active": "0 1px 3px rgba(15, 76, 92, 0.2) inset",
      },
      keyframes: {
        "card-fade-in": {
          "0%": { opacity: "0", transform: "translateY(24px) scale(0.96)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        "photo-float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        "splash-in": {
          "0%": { opacity: "0", transform: "scale(0.92)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "splash-logo": {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "60%": { opacity: "1", transform: "scale(1.02)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "contact-in": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "contact-item": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "logo-in": {
          "0%": { opacity: "0", transform: "scale(0.85)" },
          "70%": { opacity: "1", transform: "scale(1.03)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "card-fade-in": "card-fade-in 0.6s ease-out forwards",
        "photo-float": "photo-float 4s ease-in-out infinite",
        "splash-in": "splash-in 0.5s ease-out forwards",
        "splash-logo": "splash-logo 0.7s ease-out 0.15s forwards",
        "contact-in": "contact-in 0.6s ease-out forwards",
        "contact-item": "contact-item 0.45s ease-out forwards",
        "logo-in": "logo-in 0.6s ease-out 0.2s forwards",
        "fade-in": "fade-in 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
