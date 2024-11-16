// src/pages/Home.js
import React from "react";
import AuthSection from "../components/AuthSection";
import welcomeImage from "../files/welcomeImage.png";
//import "./HomePage.css";
import "../App.css"

const HomePage = () => {
  return (
    <div className="home-content">
      <div className="welcome-container">
        <img src={welcomeImage} alt="Welcome" className="welcome-image" />
        <div className="welcome-text">
          <h1>Welcome to Python Learning Platform</h1>
        </div>
      </div>
      <AuthSection />
    </div>
  );
};

export default HomePage;
