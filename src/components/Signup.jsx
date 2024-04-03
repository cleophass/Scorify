import React, { useState } from 'react';
import Logo from '../assets/Logo.svg';
import TextInput from './TextInput.jsx';
import PasswordInput from "./PasswordInput.jsx";
import ButtonFill from "./ButtonFill.jsx";
import { Link, useNavigate } from 'react-router-dom';

// Fonction pour valider l'adresse e-mail
const isValidEmail = (email) => {
  return /\S+@\S+\.\S+/.test(email);
}

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    let isValid = true;

    if (!isValidEmail(email)) {
      setEmailError(true);
      isValid = false;
    } else {
      setEmailError(false);
    }

    if (password !== confirmPassword || !password) {
      setPasswordError(password === '');
      setConfirmPasswordError(password !== confirmPassword);
      isValid = false;
    } else {
      setPasswordError(false);
      setConfirmPasswordError(false);
    }

    if (isValid) {
      const newUser = { email, password };
      const users = JSON.parse(localStorage.getItem('users')) || [];
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));

      navigate('/'); // Redirection vers la page de connexion
    }
  };

    return (
    <section>
      <div>
        <div>
          <div>
            <div className="overflow-hidden rounded-lg bg-white px-10 py-16 text-center sm:px-12 md:px-[60px]" style={{ width: '520px', height: '740px' }}>
              <div className="mb-8 md:mb-16"style={{ paddingTop: '50px' }}>
                <img src={Logo} alt="logo" className="h-8 mx-auto" />
              </div>
              <h2 className="text-l font-medium text-custom-grey"style={{paddingTop:'20px',paddingBottom:'40px'}}>
                Inscrivez-vous pour accéder à l'outil
              </h2>
              <form onSubmit={handleSignup}>

                <div className="mb-6 flex justify-center">
                <TextInput label="Adresse email" value={email} onChange={(e) => setEmail(e.target.value)} isInvalid={emailError} />
                </div>
                <div className="mb-6 flex justify-center">
                <PasswordInput label="Mot de passe" value={password} onChange={(e) => setPassword(e.target.value)}isInvalid={passwordError} />

                </div>
                <div className="mb-6 flex justify-center">
                <PasswordInput label="Confirmation du mot de passe" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} isInvalid={confirmPasswordError} />
                </div>   
                <div className='mb-6 flex justify-center'>
                  <TextInput label="Adresse email manager (optionnel)" />
                </div>
                <div className='mb-6'>
                  <ButtonFill label="Inscription" ></ButtonFill>
                </div>              
              </form>
              
              <div className="mb-6 mt-6" style={{ paddingBottom: '20px' }}>
                <p className="text-base text-body-color dark:text-dark-6">
                  <span className='text-l font-inter font-medium text-custom-grey '>
                  Vous êtes déjà membre ?{" "}</span>
                  <Link to="/" className="font-medium text-blue-600">Connectez-vous</Link>
                </p> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
