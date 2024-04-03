import React, { useState } from 'react';
import Sidebar from './Sidebar'; // Assurez-vous du chemin d'accès
import Dashboard from './Dashboard.jsx';
import Contrats from './Contrats.jsx';
// Autres imports de composants
import { Routes, Route, Navigate } from 'react-router-dom';

const MainApp = ({ onLogout }) => {
    const [activePage, setActivePage] = useState('dashboard');
  
    return (
      <div className="flex"> {/* Utilisez flex pour aligner Sidebar et le contenu principal */}
        <Sidebar activePage={activePage} setActivePage={setActivePage} onLogout={onLogout} />
        {/* Appliquez ml-64 ici pour ajouter une marge à gauche à tout le contenu principal */}
        <div className=" flex-grow" style={{ marginLeft: '16rem' }}> {/* flex-grow pour que le contenu prenne l'espace restant */}
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/contrats" element={<Contrats />} />
            {/* Ajoutez d'autres routes ici si nécessaire */}
          </Routes>
        </div>
      </div>
    );
  };
  
  export default MainApp;
  
