import React from 'react';
import './App.css';

function App() {
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
          
          <nav className="nav-links">
            <button className="nav-link">Games</button>
            <button className="nav-link">Shop</button>
            <button className="nav-link">News</button>
            <button className="nav-link">Support</button>
            <button className="buy-now-btn">Buy Now</button>
          </nav>
          
          <div className="header-actions">
            <i className="bi bi-search search-icon"></i>
            <i className="bi bi-person-circle account-icon"></i>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">MCEarth: Reforged<br />is coming!</h1>
          <p className="hero-subtitle">We're a community dedicated to recreating the Minecraft: Earth server infrastructure so that the community can continue to play even after the shutdown.</p>
          <button className="watch-trailer-btn">Learn More</button>
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
