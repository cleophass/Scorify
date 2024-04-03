import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar.jsx';
import './App.css';
import Signin from './components/Signin.jsx';
import Signup from './components/Signup.jsx';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <div className="app">
        <div className="bg-gray-100 min-h-screen">
          {isLoggedIn && <Sidebar />}
          <div className="flex items-center justify-center h-screen">
            <Routes>
              {isLoggedIn ? (
                <Route path="/" element={<Navigate replace to="/home" />} />
              ) : (
                <Route path="/" element={<Signin onLoginSuccess={handleLoginSuccess} />} />
              )}
              <Route path="/signup" element={<Signup onSignupSuccess={handleLoginSuccess} />} />
              <Route path="/home" element={isLoggedIn ? <div>Home Page Content Here</div> : <Navigate replace to="/" />} />
              {/* Ajoutez d'autres routes au besoin */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
