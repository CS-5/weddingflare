const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  darkMode: "class",
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      ...colors,
    },
    extend: {
      fontFamily: {
        serif: ["Frank Ruhl Libre", ...defaultTheme.fontFamily.serif],
        cursive: ["Dancing Script"],
      },
      colors: {
        "theme-primary": colors.yellow[600],
        "theme-accent": colors.lime[700],
        "theme-gray": colors.stone[600],
        "theme-white": colors.orange[50],
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-textshadow")],
};
