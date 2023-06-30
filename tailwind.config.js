/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Primary-I':"#CDA274",
        "Primary-II": "#292F36",
        "Primary-III": "#F4F0EC",
      }
    },
    fontFamily:{
      dmSans:['DM Serif Display','sans-serif'],
      Jost : ['Jost','sans-serif'],
    }
  },
  plugins: [],
}

