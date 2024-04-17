import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Signin from '../components/Signin';
import Signup from '../components/Signup';
import { useToasts, ToastProvider, ToastContainer } from "../components/ToastContext.jsx";
import GuideSign from '../components/GuideSign';
import ForgetPassword from '../components/ForgetPassword';

const Auth = ({ onLoginSuccess }) => {
  return (
    <ToastProvider>
      <div className='bg-back-gray'>
        <div className="flex justify-center items-center h-screen">
          <ToastContainer /> {/* Assurez-vous d'inclure le ToastContainer */}
          <Routes>
            <Route path="/" element={<Signin onLoginSuccess={onLoginSuccess} />} />
            <Route path="/signup" element={<Signup onSignupSuccess={onLoginSuccess} />} />
            <Route path="/guideSign" element={<GuideSign onLoginSuccess={onLoginSuccess} />} />
            <Route path="*" element={<Signin onLoginSuccess={onLoginSuccess} />} />
            <Route path="/forgetpass" element={<ForgetPassword />} />
          </Routes>
        </div>
      </div>
    </ToastProvider>
  );
};

export default Auth;
