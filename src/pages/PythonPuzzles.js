import React, { useState } from "react";
import '../styles/PythonPuzzles.css'; // Ensure you have the CSS file created

const PythonPuzzles = () => {
  const puzzles = [
    {
      question: "What is the output of the following code?\n\n```python\nprint(type(5))\n```",
      answer: "int",
      hint: "It's a basic data type for whole numbers."
    },
    {
      question: "What will be the output of `print('Hello' * 3)`?",
      answer: "HelloHelloHello",
      hint: "Think about how strings can be repeated in Python."
    },
    {
      question: "What will be the result of `len([1, 2, 3])`?",
      answer: "3",
      hint: "Consider how to count elements in a list."
    },
    {
      question: "Which keyword is used to define a function in Python?",
      answer: "def",
      hint: "It's a short word that starts with 'd'."
    }
  ];

  const [currentPuzzleIndex, setCurrentPuzzleIndex] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [message, setMessage] = useState('');
  const [showHint, setShowHint] = useState(false);

  const handleGuess = () => {
    if (userInput.toLowerCase() === puzzles[currentPuzzleIndex].answer.toLowerCase()) {
      setMessage('Correct! Well done!');
      setTimeout(() => {
        setCurrentPuzzleIndex((currentPuzzleIndex + 1) % puzzles.length);
        setMessage('');
        setUserInput('');
        setShowHint(false);
      }, 2000);
    } else {
      setMessage('Incorrect! Try again.');
    }
  };

  return (
    <div className="python-puzzles-container">
      <h1>Python Puzzles Game</h1>
      <p>Can you solve this puzzle?</p>
      <pre className="puzzle-question">{puzzles[currentPuzzleIndex].question}</pre>
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button onClick={handleGuess}>Submit</button>
      <button onClick={() => setShowHint(true)}>Hint</button>
      {showHint && <p className="hint">Hint: {puzzles[currentPuzzleIndex].hint}</p>}
      <p>{message}</p>
    </div>
  );
};

export default PythonPuzzles;