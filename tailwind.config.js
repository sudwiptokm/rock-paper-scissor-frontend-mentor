module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: { mobile: "370px" },
      scale: {
        25: "0.25",
        40: "0.40",
        35: "0.35",
      },
    },
  },
  plugins: [],
};
