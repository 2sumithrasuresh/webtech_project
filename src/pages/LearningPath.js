// src/pages/LearningPath.js
import React from "react";
import { Link } from "react-router-dom";
import "./LearningPath.css";

const LearningPath = () => {
  return (
    <div className="learning-path">
      <h1>Learning Path</h1>
      <div className="modules-container">
        <Link to="/module1" className="modules">
          <h2>Module 1</h2>
          <p>Introduction to Python: Learn the basics of Python programming, including syntax, variables, and data types.</p>
        </Link>
        <Link to="/module2" className="modules">
          <h2>Module 2</h2>
          <p>Control Structures: Explore conditionals and loops to control the flow of your programs.</p>
        </Link>
        <Link to="/module3" className="modules">
          <h2>Module 3</h2>
          <p>Functions and Modules: Understand how to create reusable code with functions and modules in Python.</p>
        </Link>
      </div>
    </div>
  );
};

export default LearningPath;
