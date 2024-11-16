/*
// src/pages/Module1.js
import React from "react";
import "./Module1.css";
const Module1 = () => {
  return (
    <div className="module">
      <h1>Module 1: Introduction to Python</h1>
      <p>Welcome to Module 1. This is where you will start learning Python!</p>
    
    <div className="compiler">compiler</div>
    text----
    </div>
  );
};

export default Module1;

*/

import React from "react";
// import "./Module1.css";

const Module1 = () => {
  return (
    <div className="module">
      <h1>Module 1: Introduction to Python</h1>
      <p>Welcome to Module 1. This is where you will start learning Python!</p>
    
      <div className="compiler">
        <iframe
          src="https://codesandbox.io/embed/new"
          width="100%"
          height="500px"
          frameBorder="0"
          allowFullScreen
          title="Online Editor"
        ></iframe>
      </div>

      <p>text----</p>
    </div>
  );
};

export default Module1;

