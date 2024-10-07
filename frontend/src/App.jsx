import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';  // Import the Hero component

function App() {
  const currentTheme = localStorage.getItem('currentTheme');
  const [theme, setTheme] = useState(currentTheme ? currentTheme : 'light');

  useEffect(() => {
    localStorage.setItem('currentTheme', theme);
  }, [theme]);

  return (
    <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} />

      {/* Add Hero component */}
      <Hero theme={theme} />

      {/* Your main content here */}
      <div className="content">
        {/* Page content */}
      </div>

      <Footer theme={theme} />
    </div>
  );
}

export default App;
