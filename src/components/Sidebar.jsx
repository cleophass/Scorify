import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importez useNavigate pour la navigation
import UserProfile from './Userprofile.jsx';
import Logo from '../assets/Logo.svg';

const NavItem = ({ children, onClick, isActive }) => {
  const itemClass = isActive ? "text-custom-blue bg-primary-light" : "text-custom-grey";
  return (
    <div className={`group text-l font-inter font-medium py-2 px-10 cursor-pointer relative hover:bg-primary-light hover:text-custom-blue ${itemClass}`}
         onClick={onClick}>
      <span className={`absolute inset-y-0 right-0 w-1 ${isActive ? 'bg-custom-blue' : 'scale-0'} group-hover:scale-100 transition-transform duration-200`}></span>
      {children}
    </div>
  );
};

const Sidebar = ({ activePage, setActivePage, onLogout }) => {
  const navigate = useNavigate();

  const handleItemClick = (page) => {
    setActivePage(page);
    navigate(`/${page}`);
  };

  return (
    <aside className="w-64 bg-white-100 min-h-screen flex flex-col bg-white fixed">
      <div className="flex-grow">
        <div className="flex items-center justify-center pb-5">
          <img src={Logo} alt="logo" className="h-14" />
        </div>
        <NavItem onClick={() => handleItemClick('dashboard')} isActive={activePage === 'dashboard'}>Tableau de bord</NavItem>
        <NavItem onClick={() => handleItemClick('contrats')} isActive={activePage === 'contrats'}>Contrats</NavItem>
        <NavItem onClick={() => handleItemClick('affaires')} isActive={activePage === 'affaires'}>Affaires</NavItem>
        <NavItem onClick={() => handleItemClick('fournisseurs')} isActive={activePage === 'fournisseurs'}>Fournisseurs</NavItem>
        <NavItem onClick={() => handleItemClick('criteres')} isActive={activePage === 'criteres'}>Critères d'évaluation</NavItem>
        <div className="py-2 px-5"><div className="border-t border-light-gray my-5 mx-auto"></div></div>
        <NavItem onClick={() => handleItemClick('account')} isActive={activePage === 'account'}>Mon compte</NavItem>
        <NavItem onClick={onLogout}>Déconnexion</NavItem>
      </div>
      <UserProfile />
    </aside>
  );
};

export default Sidebar;
