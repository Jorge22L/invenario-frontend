/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{html,ts}", ],
  theme: {
    extend: {
      colors:{
        "prussian-blue": "#273043",
        "prussian-blue-dark": "#1f2833",
        "cool-gray": "#9197AE",
        "mint-cream": "#EFF6EE",
        "imperial-red": "#F02D3A",
        "custom-red": "#DD0426"
      }
    },
  },
  plugins: [],
}

