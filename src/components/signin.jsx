import React from "react";
import Logo from '../assets/Logo.svg'; // Assurez-vous que le chemin est correct
import TextInput from './TextInput.jsx'
import PasswordInput from "./PasswordInput.jsx";
import ButtonFill from "./ButtonFill.jsx";

const Signin = () => {
  return (
    <section className="bg-gray-1 py-20 dark:bg-dark lg:py-[120px]">
      <div className="">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white px-10 py-16 text-center dark:bg-dark-2 sm:px-12 md:px-[60px]">
              <div className="mb-8 md:mb-16" style={{ paddingTop: '50px' }}> 
                <a
                  className="mx-auto inline-block max-w-[160px]"
                >
                  <img src={Logo} alt="logo" className="h-8" />
                </a>
              </div>
              <div className=" text-l font-inter font-medium text-custom-grey " style={{paddingTop:'20px',paddingBottom:'40px'}}>
                Connectez-vous pour accéder à l'outil
              </div>

              <form>
                <div className="mb-6">
                <TextInput label="Adresse email" />
                </div>
                <div className="mb-6">
                <PasswordInput label="Mot de passe" />
                </div>
              </form>
              <div className="text-left mb-6 ">
              <a href="" className="text-left font-bold text-custom-blue">
                Mot de passe oublié?
              </a>
              </div>
              <div className="mb-6">
              <ButtonFill label="Connexion" />
              </div>
              <div className="mb-6" style={{paddingBottom: '20px'}}>
              <p className="text-base text-body-color dark:text-dark-6">
                <span className="text-l font-inter font-medium text-custom-grey ">Vous n’êtes pas encore membre ? </span>
                <a
                  href="/#"
                  className="text-l font-inter font-medium text-custom-blue ">Inscrivez-vous</a>
              </p>
              </div>

              <div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signin;

const InputBox = ({ type, placeholder, name }) => {
  return (
    <div className="mb-6">
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        className="w-full rounded-md border border-stroke bg-transparent px-5 py-3 text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:text-white"
      />
    </div>
  );
};
