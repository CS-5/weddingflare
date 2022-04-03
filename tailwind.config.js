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
    extend: {
      fontFamily: {
        serif: ["Frank Ruhl Libre", ...defaultTheme.fontFamily.serif],
        cursive: ["Dancing Script"],
      },
      colors: {
        "theme-primary": colors.yellow[600],
        "theme-accent": colors.lime[700],
        "theme-gray": "#473425",
        "theme-white": "#EEF0EB",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
    require("tailwindcss-textshadow"),
    require("@tailwindcss/typography"),
  ],
};
