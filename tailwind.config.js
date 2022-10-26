/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        midasHand: "url('./img/midas.png')",
      },
    },
  },
  plugins: [],
};
