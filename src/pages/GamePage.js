import React from "react";
import { Link } from "react-router-dom";
import "../styles/GamePage.css"; // Ensure this CSS file is styled appropriately

const GamePage = () => {
  return (
    <div className="gamepage-container">
      <h1 className="heading">Select a Game to Play</h1>
      <div className="game-list">
        <div className="game-card">
          <h2>Number Guessing Game</h2>
          <p>Guess the number between 1 and 100!</p>
          <Link to="/number-guessing">
            <button className="button">Play</button>
          </Link>
        </div>

        {/* Add Word Scramble Game */}
        <div className="game-card">
          <h2>Word Scramble Game</h2>
          <p>Unscramble the words related to Python concepts!</p>
          <Link to="/WordScramble">
            <button className="button">Play</button>
          </Link>
        </div>

        <div className="game-card">
          <h2>Python Puzzles Game</h2>
          <p>Can you solve the Python-related puzzles?</p>
          <Link to="/PythonPuzzles">
            <button className="button">Play</button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default GamePage;
