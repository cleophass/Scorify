import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Auth from './components/Auth'; // Un nouveau composant pour gérer l'authentification
import MainApp from './components/MainApp'; // Un composant pour la partie principale de l'application

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <div className="app bg-gray-100 min-h-screen">
        <Routes>
          {isLoggedIn ? (
            <Route path="/*" element={<MainApp onLogout={() => setIsLoggedIn(false)} />} />
          ) : (
            <Route path="/*" element={<Auth onLoginSuccess={handleLoginSuccess} />} />
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
