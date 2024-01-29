/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        RobotoR: ["Roboto-Regular", "sans", "mono"],
        RobotoB: ["Roboto-Bold", "sans", "mono"],
        RobotoL: ["Roboto-Light", "sans", "mono"],
        MarckR: ["Marck-Regular", "sans", "mono"],
      },
      keyframes: {
        fadeKey: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        fade: "fadeKey 1s ease-in",
      },
      transitionDuration: {
        1600: "1600ms",
      },
    },
  },
  plugins: [],
};
