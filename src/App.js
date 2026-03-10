import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('light-theme', !isDarkTheme);
  }, [isDarkTheme]);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="header-container">
          <img 
            src={process.env.PUBLIC_URL + '/logo.png'} 
            alt="MCEarth Reforged" 
            className="logo"
          />
          <button className="theme-toggle" onClick={toggleTheme}>
            <i className={`bi ${isDarkTheme ? 'bi-sun' : 'bi-moon'}`}></i>
          </button>
        </div>
      </header>

      {/* Hero Section with Background */}
      <section className="hero">
        {/* Frosted Glass Card */}
        <div className="frosted-glass-card">
          <div className="hero-content">
            <h1 className="hero-title">MCEarth: Reforged</h1>
            <p className="hero-subtitle">We're a community dedicated to recreating the Minecraft: Earth server infrastructure so that community can continue to play even after the shutdown.</p>
            <button className="watch-trailer-btn">Learn More</button>
          </div>
        </div>
      </section>

      {/* Progress Section */}
      <section className="progress-section">
        <div className="progress-container">
          <h2 className="progress-title">Current Progress</h2>
          <div className="progress-list">
            <div className="progress-item">
              <i className="bi bi-check-circle-fill checkmark"></i> Server infrastructure recreation
            </div>
            <div className="progress-item">
              <i className="bi bi-check-circle-fill checkmark"></i> Patching Official APK
            </div>
            <div className="progress-item">
              <i className="bi bi-check-circle-fill checkmark"></i> Buildplates (Mostly Working)
            </div>
            <div className="progress-item">
              <i className="bi bi-check-circle-fill checkmark"></i> Legal Notice
            </div>
            <div className="progress-item">
              <i className="bi bi-arrow-repeat pending"></i> Shop (In Progress)
            </div>
            <div className="progress-item">
              <i className="bi bi-circle not-started"></i> Achievements
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
