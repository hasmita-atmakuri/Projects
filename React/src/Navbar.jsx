import React from 'react';
import './Navbar.css'; // Link to your CSS file

const Header = () => {
  return (
    <header className="header">
      {/* Left Section */}
      <div className="left-section">
        <img className="hamburger-menu" src="/hamburger-menu.svg" alt="Menu" />
        <img className="youtube-logo" src="/youtube-logo.svg" alt="YouTube Logo" />
      </div>

      {/* Middle Section */}
      <div className="middle-section">
        <input className="search-bar" type="text" placeholder="Search" />
        <button className="search-button">
          <img className="search-icon" src="/search.svg" alt="Search" />
          <div className="tooltip">Search</div>
        </button>

        <button className="voice-search-button">
          <img className="voice-search-icon" src="/voice-search-icon.svg" alt="Voice Search" />
          <div className="tooltip">Search with your voice</div>
        </button>
      </div>

      {/* Right Section */}
      <div className="right-section">
        <div className="upload-icon-container">
          <img className="upload-icon" src="/upload.svg" alt="Upload" />
          <div className="tooltip">Create</div>
        </div>

        <div className="youtube-icon-container">
          <img className="youtube-icon" src="/youtube-apps.svg" alt="YouTube Apps" />
          <div className="tooltip">YouTube apps</div>
        </div>

        <div className="notifications-icon-container">
          <img className="notifications-icon" src="/notifications.svg" alt="Notifications" />
          <div className="notifications-count">3</div>
          <div className="tooltip">Notifications</div>
        </div>

        <img className="current-user-picture" src="/my-channel.jpeg" alt="User" />
      </div>
    </header>
  );
};

export default Header;
