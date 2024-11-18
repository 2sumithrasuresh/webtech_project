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
import GamePage from "./pages/GamePage";
import NumberGuessing from "./pages/NumberGuessing";
import BuildNumberGuessing from "./pages/BuildNumberGuessing";
import LeaderBoard from "./pages/LeaderBoard";
import AboutPage from "./pages/AboutPage";
import Contact from "./pages/Contact";
import WordScramble from "./pages/WordScramble";
import PythonPuzzles from "./pages/PythonPuzzles";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="welcome-page">
        <Header /> 
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/learning-path" element={<LearningPath />} />
          <Route path="/Module1" element={<Module1 />} />
          <Route path="/Module2" element={<Module2 />} />
          <Route path="/Module3" element={<Module3 />} />
          <Route path="/game" element={<GamePage />} />
          <Route path="/number-guessing" element={<NumberGuessing />} />
          <Route path="/build-number-guessing" element={<BuildNumberGuessing />} />
          <Route path="/LeaderBoard" element={<LeaderBoard />} />
          <Route path="/AboutPage" element={<AboutPage />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/WordScramble" element={<WordScramble />} />
          <Route path="/PythonPuzzles" element={<PythonPuzzles />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
