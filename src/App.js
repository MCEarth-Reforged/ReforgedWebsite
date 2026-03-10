import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="header-container">
          <img 
            src="https://raw.githubusercontent.com/MCEarth-Reforged/.github/main/banner.png" 
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
            <svg className="search-icon" fill="white" viewBox="0 0 24 24">
              <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            </svg>
            <svg className="account-icon" fill="white" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
            </svg>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Minecraft LIVE<br />is coming!</h1>
          <p className="hero-subtitle">Join us for the biggest Minecraft event of the year</p>
          <button className="watch-trailer-btn">Watch Trailer</button>
        </div>
      </section>

      {/* Game Previews Section */}
      <section className="game-previews">
        <div className="game-previews-container">
          <div className="game-preview-card">
            <img 
              src="https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" 
              alt="Minecraft Dungeons" 
              className="game-preview-image"
            />
            <div className="game-preview-info">
              <h3 className="game-preview-title">Minecraft Dungeons</h3>
              <p className="game-preview-description">Fight your way through an all-new action-adventure game.</p>
            </div>
          </div>
          
          <div className="game-preview-card">
            <img 
              src="https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" 
              alt="Minecraft Legends" 
              className="game-preview-image"
            />
            <div className="game-preview-info">
              <h3 className="game-preview-title">Minecraft Legends</h3>
              <p className="game-preview-description">Discover the mysteries of Minecraft Legends.</p>
            </div>
          </div>
          
          <div className="game-preview-card">
            <img 
              src="https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" 
              alt="Minecraft Education" 
              className="game-preview-image"
            />
            <div className="game-preview-info">
              <h3 className="game-preview-title">Minecraft Education</h3>
              <p className="game-preview-description">Engage students in game-based learning.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
