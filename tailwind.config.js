/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        //  ### Primary
        "lime-green": "hsl(163, 72%, 41%)",
        "bright-red": "hsl(356, 69%, 56%)",
        facebook: "hsl(208, 92%, 53%)",
        twitter: "hsl(203, 89%, 53%)",
        youTube: "hsl(348, 97%, 39%)",
        fromInsta: "hsl(37, 97%, 70%)",
        toInsta: "hsl(329, 70%, 58%)",
        // #### Dark Theme
        fromToggle: "hsl(210, 78%, 56%)",
        toToggle: "hsl(146, 68%, 55%)",
        veryDarkBlueForBG: "hsl(230, 17%, 14%)",
        veryDarkBlueForTopBG: "hsl(232, 19%, 15%)",
        darkDesaturatedBlueForCardBG: "hsl(228, 28%, 20%)",
        desaturatedBlueForText: " hsl(228, 34%, 66%)",
        // #### Light Theme
        toggle: "hsl(230, 22%, 74%)",
        veryPaleBlueForTopBG: "hsl(225, 100%, 98%)",
        lightGrayishBlueForCardBG: "hsl(227, 47%, 96%)",
        darkGrayishBlueForText: "hsl(228, 12%, 44%)",
        veryDarkBlueForText: "hsl(230, 17%, 14%)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        cardHeading: "14px",
      },
    },
  },
  plugins: [],
};
