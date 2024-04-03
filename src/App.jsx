import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Sidebar from './components/Sidebar'
import './App.css'
import Modal from './components/Modal'
import Signin from './components/Signin.jsx'
import Signup from './components/Signup.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'



function App() {
  return (
    <>
    <Router>
      <div className="app">
      <div className="bg-gray-100 min-h-screen">
      <div className="flex items-center justify-center h-screen">
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          {/* Ajoutez d'autres routes au besoin */}
        </Routes>
      </div>
    </div>
    </div>
    </Router>


    
      
     
        
    </>
  )
}

export default App
