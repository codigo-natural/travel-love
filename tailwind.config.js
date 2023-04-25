/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,js}"],
  media: false,
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        ...theme("colors"),
        primary: "#cc2d4a",
        secondary: "#8fa206",
        terciary: "#61aec9",
      }),
      textColor: {
        primary: "#cc2d4a",
        secondary: "#8fa206",
        terciary: "#61aec9",
      },
      fontFamily: ['Montserrat', 'sans-serif']
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
};
