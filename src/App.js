// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import LearningPath from "./pages/LearningPath";
import Module1 from "./pages/Module1";
import AboutPage from "./pages/AboutPage";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="welcome-page">
        <Header /> {/* Header component now separated */}
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/learning-path" element={<LearningPath />} />
          <Route path="/Module1" element={<Module1 />} />
          <Route path="/AboutPage" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
