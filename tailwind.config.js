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
        'dark-grey' :'#637381',
        'custom-blue' : '#3758F9',
        'primary-light':'#E9F0FF',
        'light-blue' : '#EFF2FF',
        'custom-yellow' : '#FBBF24',
        'custom-green' : '#22AD5C',
        'custom-red' : '#F23030',
        'success-light' :'#DAF8E6',
        'warning-light' :'#FFFBEB',
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

