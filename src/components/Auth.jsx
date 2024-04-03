import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Signin from './Signin';
import Signup from './Signup';

const Auth = ({ onLoginSuccess }) => {
  return (
    // Utilisation de Tailwind CSS pour centrer
    <div className="flex justify-center items-center h-screen">
      <Routes>
        <Route path="/" element={<Signin onLoginSuccess={onLoginSuccess} />} />
        <Route path="/signup" element={<Signup onSignupSuccess={onLoginSuccess} />} />
        {/* Redirection si une autre route est tapée */}
        <Route path="*" element={<Signin onLoginSuccess={onLoginSuccess} />} />
      </Routes>
    </div>
  );
};

export default Auth;
