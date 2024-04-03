/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "/Users/cleophasfournier/Scorify/src/components/sidebar.jsx",
    "/Users/cleophasfournier/Scorify/src/components/userprofile.jsx",
    "/Users/cleophasfournier/Scorify/src/App.jsx",
    "/Users/cleophasfournier/Scorify/src/components/modal.jsx",
    "/Users/cleophasfournier/Scorify/src/signin.jsx",
    "/Users/cleophasfournier/Scorify/src/components/TextInput.jsx",
    "/Users/cleophasfournier/Scorify/src/main.jsx",
    "/Users/cleophasfournier/Scorify/src/components/PasswordInput.jsx",
    "/Users/cleophasfournier/Scorify/src/components/ButtonFill.jsx",
  ],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#637381',
        'light-gray': '#DFE4EA',
        'custom-blue' : '#3758F9',
        'primary-light':'#E9F0FF'
      },
    },
  },
  plugins: [],
}

