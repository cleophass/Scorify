import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar.jsx';
import './App.css';
import Signin from './components/Signin.jsx';
import Signup from './components/Signup.jsx';
import Dashboard from './components/Dashboard.jsx';
import Contrats from './components/Contrats.jsx';
// Importez vos autres components ici

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // Ajout d'un state pour suivre la page active
  const [activePage, setActivePage] = useState('dashboard');

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <div className="app">
        <div className="bg-gray-100 min-h-screen">
          {isLoggedIn && <Sidebar activePage={activePage} setActivePage={setActivePage} />}
          <div className={`main-content ${isLoggedIn ? 'ml-64' : ''}`}>
            <Routes>
              {isLoggedIn ? (
                <Route path="/" element={<Navigate replace to="/dashboard" />} />
              ) : (
                <Route path="/" element={<Signin onLoginSuccess={handleLoginSuccess} />} />
              )}
              <Route path="/signup" element={<Signup onSignupSuccess={handleLoginSuccess} />} />
              <Route path="/dashboard" element={isLoggedIn ? <Dashboard/> : <Navigate replace to="/" />} />
              <Route path="/contrats" element={isLoggedIn ? <Contrats/> : <Navigate replace to="/" />} />
              {/* Ajoutez d'autres routes en respectant le modèle ci-dessus pour chaque page/component */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
