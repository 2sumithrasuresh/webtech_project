// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./components/SignUpPage";
import LearningPath from "./pages/LearningPath";
import Module1 from "./pages/Module1";
import Module2 from "./pages/Module2";
import Module3 from "./pages/Module3";

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
          <Route path="/Module2" element={<Module2 />} />
          <Route path="/Module3" element={<Module3 />} />
        
        </Routes>
      </div>
    </Router>
  );
}

export default App;
