const colors = require("tailwindcss/colors");

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
        "theme-header": ["Frank Ruhl Libre", "serif"],
        "theme-title": ["Dancing Script", "cursive"],
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
