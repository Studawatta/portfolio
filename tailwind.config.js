/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppings: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      keyframes: {
        drop: {
          "0%": { height: "0px" },
          "100%": { height: "fit-content" },
        },
        pulse: {
          "0%,100%": { opacity: "1" },
          "50%": { opacity: "0.2" },
        },
      },
      animation: {
        drop: "drop 2s ease-in-out",
        pulse1: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        pulse2: "pulse 0.5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};
