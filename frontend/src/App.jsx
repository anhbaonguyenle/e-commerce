import React, { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';

function App() {
  const currentTheme = localStorage.getItem('currentTheme');
  const [theme, setTheme] = useState(currentTheme ? currentTheme : 'light');

  useEffect(() => {
    localStorage.setItem('currentTheme', theme);
  }, [theme]);

  return (
    <Router>
      <div className={`container ${theme}`}>
        <Navbar theme={theme} setTheme={setTheme} />
        <Hero theme={theme} />
        <div className="content">
          <Routes>
            <Route path="/" element={<h1>Home</h1>} />
            <Route path="/Products" element={<h1>Products</h1>} />
            <Route path="/Galleries" element={<h1>Galleries</h1>} />
            <Route path="/About" element={<h1>About</h1>} />
          </Routes>
        </div>
        <Footer theme={theme} />
      </div>
    </Router>
  );
}

export default App;
