module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "../../packages/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: false,
  theme: {
    extend: {},
    fontFamily: {
      arimo: ["Arimo", "sans-serif"],
      vidaloka: ["Vidaloka", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
