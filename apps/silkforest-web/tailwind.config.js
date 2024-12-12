module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "../../packages/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: false,
  theme: {
    extend: {
      backgroundImage: {
        "steel-gradient":
          "linear-gradient(to top left, #c7d2fe, #9fa8db, #71769d)",
      },
    },
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
