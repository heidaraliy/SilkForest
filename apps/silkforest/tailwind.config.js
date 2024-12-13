module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "../silkverb/src/**/*.{js,jsx,ts,tsx}",
  ],
  media: false,
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
