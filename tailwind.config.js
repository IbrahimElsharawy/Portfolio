/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: 'true',
      padding: '2rem',
      screens: {
        '2xl': '1400px',

      }
    },
    extend: {
      colors: {
        'primary': '#153448',
        'primary-light': '#3C5B6F',
        'secondary': '#948979',
        'secondary-light': '#DFD0B8',
        'secodary-light-1':'#948979',
        'sky-1': '#E2ECF6',
        'sky-2':'#EFFE6A',
        'sky-3':'#E2ECF6',
        'black-1':'#2E2E37',
        'black-2':'#4D4D5C',
        'black-3':'#9B9DB1'



      },
      fontFamily: {
        jost: [
          "Jost", "serif",
        ],
        openSans: [
          "Open Sans", "serif"
        ]


      },

      screens: {
        xs: '400px'
      },
    },
  },
  plugins: [],
}