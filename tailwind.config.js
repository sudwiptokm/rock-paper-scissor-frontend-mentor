module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        mobile: { min: "370px", max: "640px" },
        mobile2: { min: "370px", max: "460px" },
      },
      scale: {
        25: "0.25",
        40: "0.40",
        35: "0.35",
      },
    },
  },
  plugins: [],
};
