/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#637381',
        'light-gray': '#DFE4EA',
        'back-gray':'#F7F8FA',
        'custom-blue' : '#3758F9',
        'primary-light':'#E9F0FF',
        'light-blue' : '#EFF2FF'
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      fontSize: {
        '15px': '0.8rem',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}

