import React from "react";
import SearchBar from "./components/SearchBar";
import ProfileIcon from "./components/ProfileIcon";
import HamburgerMenu from "./components/HamburgerMenu";
import AuthSection from "./components/AuthSection";
import welcomeImage from "./files/welcomeImage.png";
import "./App.css";

function App() {
  return (
    <div className="welcome-page">
      <header className="header">
        <HamburgerMenu />
        <div className="header-right">
          <SearchBar />
          <ProfileIcon />
        </div>
      </header>
      
      <div className="welcome-container">
        <img src={welcomeImage} alt="Welcome" className="welcome-image" />
        
        {/* Overlaying text */}
        <div className="welcome-text">
          <h1>Welcome to Python Learning Platform</h1>
        </div>
        <AuthSection />
      </div>

      <div className="content">
        <p></p>
      </div>
    </div>
  );
}

export default App;
