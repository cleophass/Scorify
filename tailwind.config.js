/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/components/Contrats.jsx",
    "./src/components/Dashboard.jsx",
    "./src/components/Sidebar.jsx",
    "./src/components/Signin.jsx",
    "./src/components/Signup.jsx",
    "./src/primarycomponents/Auth.jsx",
    "./src/primarycomponents/MainApp.jsx",
    "./src/subcomponents/ButtonFill.jsx",
    "./src/subcomponents/Modal.jsx",
    "./src/subcomponents/PasswordInput.jsx",
    "./src/subcomponents/TextInput.jsx",
    "./src/subcomponents/Userprofile.jsx",
    "./src/subcomponents/Score.jsx",
    "./src/subcomponents/Table.jsx",
    "./src/subcomponents/TeamAvatars.jsx",
    "./src/subcomponents/ButtonIcon.jsx",
    "./src/subcomponents/ButtonGroup.jsx",
    "./src/subcomponents/DropDownButton.jsx",
    "./src/App.jsx",
    "./src/main.jsx",
    
  ],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#637381',
        'light-gray': '#DFE4EA',
        'back-gray':'#F7F8FA',
        'custom-blue' : '#3758F9',
        'primary-light':'#E9F0FF'
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

