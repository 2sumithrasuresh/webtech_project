import React, { useState } from 'react';
import '../styles/WordScramble.css';

const WordScramble = () => {
  const words = [
    { scrambled: 'vraialbe', answer: 'variable' },
    { scrambled: 'fnuctoin', answer: 'function' },
    { scrambled: 'daat tyep', answer: 'data type' },
    { scrambled: 'moudle', answer: 'module' },
    { scrambled: 'iternrept', answer: 'interpreter' }
  ];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [message, setMessage] = useState('');

  const handleGuess = () => {
    if (userInput.toLowerCase() === words[currentWordIndex].answer) {
      setMessage('Correct! Great job!');
      setTimeout(() => {
        setCurrentWordIndex((currentWordIndex + 1) % words.length);
        setMessage('');
        setUserInput('');
      }, 2000);
    } else {
      setMessage('Incorrect! Try again.');
    }
  };
  console.log("WordScramble Component Rendered");
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
    </div>
  );
};

export default WordScramble;