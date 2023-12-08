/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        accentOrange: "#F2733B",
        accentYellow: {
          op20: "rgb(255, 192, 60, 0.2)",
          100: "#FFC935",
          200: "#FFA300",
        },
        hero: "#D8D8D8",
        section: "#FCFCFF",
        muted: "#838383",
        accentBlue: {
          100: "#2649E7",
        },
        batteryBlue: "#119FDD",
        secHeading: "#222222",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      margin: {
        section: "8rem",
      },
    },
  },
  plugins: [],
};
