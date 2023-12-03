import { type Config } from "tailwindcss";
import children from "tailwind-children";

export default {
  plugins: [children],
  content: ["{routes,islands,components}/**/*.{ts,tsx}"],
  theme: {
    fontFamily: {
      sans: "system-ui",
      serif: "system-ui",
      mono: "monospace",
      logo: "Kaiti SC",
    },
    data: {
      current: "current",
    },
    extend: {
      colors: {
        yellow: "#f1fa8c",
        black: "#1a1a1a",
        "black-lighter": "#1f1f1f",
        "black-light": "#313a3d",
        "yellow-dark": "#858579",
        blue: "#0645ad",
        "blue-light": "#0e81c7",
        "slider-bg": "#f0ede2",
      },
    },
  },
} as Config;
