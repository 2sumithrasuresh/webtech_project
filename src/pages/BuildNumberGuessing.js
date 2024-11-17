
import React, { useState } from 'react';
import '../styles/BuildNumberGuessing.css'; 

const BuildNumberGuessing = () => {
  const [selectedOptions, setSelectedOptions] = useState({});
  const questions = [
    { question: "'import __?______'Options:(pandas, random)", correctAnswer: "random", options: ["pandas", "random"] },
    { question: "'if guess __?__ targetNumber  'Options:(==, <=)", correctAnswer: "==", options: ["==", "<="] },
    { question: "'for attempt in __?__  'Options:(range, input):", correctAnswer: "range", options: ["range", "input"] },
    { question: "'guess = int( __?___('Enter your guess: '))' Options:(break, input)", correctAnswer: "input", options: ["break", "input"] }
  ];

  const handleSelection = (index, option) => {
    setSelectedOptions(prev => ({ ...prev, [index]: option }));
  };

  return (
    <div className="container">
      <h1>Fill in the Blanks Quiz</h1>
      {questions.map(({ question, correctAnswer, options }, index) => (
        <div key={index} className="question-card">
          <p className="question-text">{question}</p>
          <div>
            {options.map(option => (
              <button
                key={option}
                onClick={() => handleSelection(index, option)}
                className="button"
              >
                {option}
              </button>
            ))}
          </div>
          {selectedOptions[index] && (
            <p className={`result ${selectedOptions[index] === correctAnswer ? 'correct' : 'incorrect'}`}>
              {selectedOptions[index] === correctAnswer ? "Correct!" : "Incorrect, try again!"}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default BuildNumberGuessing;
