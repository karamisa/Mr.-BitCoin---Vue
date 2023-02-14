/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.html", "./src/**/*.vue", "./src/**/*.jsx"],
  darkMode: true, // or 'media' or 'class'

  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "rgb(251 ,191 ,36)",

          secondary: "#374151",

          accent: "#1FB2A5",

          neutral: "#191D24",

          "base-100": "#2A303C",

          info: "#3ABFF8",

          success: "#36D399",

          warning: "#FBBD23",

          error: "#F87272",
        },
      },
    ],
  },
  plugins: [require("@tailwindcss/forms"), require("daisyui")],

};
