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
        // instagram: linear gradient hsl(37, 97%, 70%) to hsl(329, 70%, 58%),
      },
      fontSize: {
        cardHeading: "14px", // (Overview Card Headings)
      },
    },
  },
  plugins: [],
};
