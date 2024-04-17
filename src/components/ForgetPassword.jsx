import React, { useState } from "react";
import Logo from '../assets/Logo.svg';
import TextInput from '../subcomponents/TextInput.jsx';
import ButtonFill from "../subcomponents/ButtonFill.jsx";
import { useNavigate } from 'react-router-dom';
import { useToasts } from "../components/ToastContext.jsx"; // Assurez-vous que ce chemin est correct

function isValidEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [isEmailInvalid, setIsEmailInvalid] = useState(false);
  const navigate = useNavigate();
  const { addToast } = useToasts(); // Fonction pour ajouter un toast

  const handleForgetPassword = (e) => {
    e.preventDefault();
    const validEmail = isValidEmail(email);
    setIsEmailInvalid(!validEmail);

    if (validEmail) {
      // Simule l'envoi de l'email
      addToast('Un e-mail contenant les instructions de réinitialisation de mot de passe vient de vous être envoyé sur votre adresse mail.', 'success');
      navigate('/'); // Rediriger vers la page de connexion
    }
  };

  return (
    <section className="bg-gray-1 dark:bg-dark lg:py-[120px]" >
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-white dark:bg-dark-2 rounded-lg p-14 text-center" style={{ width: '520px' }}>
          <img src={Logo} alt="logo" className="h-12 mx-auto mb-6" />
          <h2 className="text-gray-900 text-base font-normal font-inter mb-6  leading-normal mt-2">
          L’email de réinitialisation vous sera envoyé par mail          </h2>
          <div className="mx-auto">
          <form onSubmit={handleForgetPassword}>
            <TextInput label="Adresse email" value={email} onChange={(e) => setEmail(e.target.value)} isInvalid={isEmailInvalid} />
            <div className="mt-4"></div>
            <ButtonFill label="Réinitialiser" width="400px" />
          </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgetPassword;
