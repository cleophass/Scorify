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
    "./src/subcomponents/StatsCard.jsx",
    "./src/subcomponents/ProgressBar.jsx",
    "./src/App.jsx",
    "./src/main.jsx",
    "./src/subcomponents/DonutChart.jsx",
    "./src/subcomponents/GraphComponent.jsx",
    "./src/subcomponents/DropdownIcon.jsx",
    "./src/subcomponents/ButtonFillpdf.jsx",
    
    
  ],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#637381',
        'light-gray': '#DFE4EA',
        'back-gray':'#F7F8FA',
        'custom-blue' : '#3758F9',
        'primary-light':'#E9F0FF',
        'light-blue' : '#EFF2FF',
        'custom-yellow' : '#FBBF24',
        'custom-green' : '#22AD5C',
        'custom-red' : '#F23030'
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      fontSize: {
        '15px': '0.8rem',
      },
    },
  },
  plugins: [],
}

