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
        "theme-primary": ["Merriweather", "serif"],
        "theme-secondary": ["Dancing Script", "cursive"],
      },
      colors: {
        "theme-primary": colors.yellow[600],
        "theme-accent": colors.lime[700],
        "theme-gray": colors.stone[700],
        "theme-white": colors.orange[50],
      },
      backgroundImage: {
        "theme-background": "url('/image/background.jpg')",
      },
      width: {
        "48rem": "48rem",
      },
      height: {
        "30rem": "30rem",
      },
      borderRadius: {
        "6xl": "3rem",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-textshadow")],
};
