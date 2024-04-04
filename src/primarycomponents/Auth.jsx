import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Signin from '../components/Signin';
import Signup from '../components/Signup';

const Auth = ({ onLoginSuccess }) => {
  return (
    // Utilisation de Tailwind CSS pour centrer
    <div className='bg-back-gray'>
    <div className="flex justify-center items-center h-screen">
      <Routes>
        <Route path="/" element={<Signin onLoginSuccess={onLoginSuccess} />} />
        <Route path="/signup" element={<Signup onSignupSuccess={onLoginSuccess} />} />
        {/* Redirection si une autre route est tapée */}
        <Route path="*" element={<Signin onLoginSuccess={onLoginSuccess} />} />
      </Routes>
    </div>
    </div>
  );
};

export default Auth;