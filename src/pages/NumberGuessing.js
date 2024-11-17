// import React from "react";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import '../styles/NumberGuessing.css';

const NumberGuessing = () => {
  const [targetNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");
  const [attempts, setAttempts] = useState(0);

  const handleGuess = () => {
    const userGuess = parseInt(guess, 10);
    setAttempts(attempts + 1);

    if (userGuess > targetNumber) {
      setMessage("Too high! Try again.");
    } else if (userGuess < targetNumber) {
      setMessage("Too low! Try again.");
    } else {
      setMessage(`Congratulations! You guessed it in ${attempts + 1} attempts.`);
    }
    setGuess("");
  };

  return (
    <div className="number-guessing-container">
      <h1>Number Guessing Game</h1>
      <p>Guess a number between 1 and 100</p>
      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
      />
      <button onClick={handleGuess}>Submit</button>
      <p>{message}</p>
      <p>Attempts: {attempts}</p>


      <div>
        <p>now build</p>
        <Link to="/build-number-guessing">
            <button>gooo</button>
        </Link>
      </div>
    </div>
  );
};

export default NumberGuessing;
