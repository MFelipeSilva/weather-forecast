/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins'],
     },
      colors: {
        'white': '#ffffff',
      },
      spacing: {
        '110': '30rem',
        '140': '37rem',
      }
    },
  },
  plugins: [],
}
