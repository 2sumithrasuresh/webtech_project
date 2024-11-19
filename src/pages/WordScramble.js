import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import "../styles/WordScramble.css";

const WordScramble = () => {
  const { user } = useContext(UserContext);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [message, setMessage] = useState("");
  const [points, setPoints] = useState(user?.points || 0); // Initialize points with user's existing points

  const words = [
    { scrambled: "vraialbe", answer: "variable" },
    { scrambled: "fnuctoin", answer: "function" },
    { scrambled: "daat tyep", answer: "data type" },
    { scrambled: "moudle", answer: "module" },
    { scrambled: "iternrept", answer: "interpreter" }
  ];

  const handleGuess = async () => {
    if (userInput.toLowerCase() === words[currentWordIndex].answer) {
      setMessage("Correct! Great job!");
      try {
        const response = await fetch("http://localhost:5000/updatePoints", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setPoints(data.points); // Update points with new value from response
        }

        setTimeout(() => {
          setCurrentWordIndex((currentWordIndex + 1) % words.length);
          setMessage("");
          setUserInput("");
        }, 2000);
      } catch (error) {
        console.error("Error updating points:", error);
      }
    } else {
      setMessage("Incorrect! Try again.");
    }
  };

  return (
    <div className="word-scramble-container">
      <h1>Word Scramble Game</h1>
      <p>Unscramble the word related to Python concepts:</p>
      <p className="scrambled-word">{words[currentWordIndex].scrambled}</p>
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button onClick={handleGuess}>Submit</button>
      <p>{message}</p>
      <p>Points: {points}</p> {/* Display updated points */}
    </div>
  );
};

export default WordScramble;
