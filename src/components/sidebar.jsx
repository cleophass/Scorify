import React from 'react';
import UserProfile from './userprofile.jsx'; // Si userprofile.jsx est au même niveau que sidebar.jsx


// import logo
import Logo from '../assets/Logo.svg'; // Assurez-vous que le chemin est correct

const NavItem = ({ children }) => {
  return (
    <div className="group text-l font-inter font-medium text-custom-grey py-2 px-10 cursor-pointer relative hover:bg-primary-light hover:text-custom-blue">
      {/* Trait vertical bleu à gauche lors du survol */}
      <span className="absolute inset-y-0 right-0 w-1 bg-custom-blue scale-0 group-hover:scale-100 transition-transform duration-200"></span>
      {children}
    </div>
  );
};
const Sidebar = () => {
  return (
    
    <aside className="w-64 bg-white-100 min-h-screen flex flex-col bg-white"> {/* flex-col pour disposer en colonne */}
      <div className="flex-grow"> {/* flex-grow pour prendre tout l'espace disponible */}
        <div className="flex items-center justify-center pb-5">
            <img src={Logo} alt="logo" className="h-14" />

        </div>
      
        <NavItem>Tableau de bord</NavItem>
        <NavItem>Contrats</NavItem>
        <NavItem>Affaires</NavItem>
        <NavItem>Fournisseurs</NavItem>
        <NavItem>Critères d'évaluation</NavItem>

        {/* now i need a line */}
        <div className="py-2 px-5"><div className="border-t border-light-gray my-5 mx-auto"></div></div>
        <NavItem>Mon compte</NavItem>
        <NavItem>Déconnexion</NavItem>
        </div>
        {/* now i need a div that is in the bottom */}
        {/* <div className="flex items-center justify-center text-custom-grey p-5"> */}
        <UserProfile /> 
        
    </aside>
  );
};

export default Sidebar;
