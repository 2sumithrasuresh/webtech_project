import React, { useState } from "react";
import "./Module1.css"; // Import Module1.css for styling

const Module2 = () => {
  const [selectedTopic, setSelectedTopic] = useState('conditionals');

  const controlTopics = {
    conditionals: {
      title: "Conditionals in Python",
      content: "Conditionals allow you to execute certain pieces of code based on specific conditions. The main keywords used are 'if', 'elif', and 'else'.",
      example: `temperature = 5
      # Simple if statement
if temperature > 30:
    print("It's a hot day!")

# If-elif-else statement
if temperature > 30:
    print("It's a hot day!")
elif temperature < 10:
    print("It's a cold day!")
else:
    print("It's a nice day!")`,
    },
    loops: {
      title: "Loops in Python",
      content: "Loops allow you to repeat a block of code multiple times. The most commonly used loops are 'for' and 'while'.",
      example: `# For loop
for i in range(5):
    print(i)

# While loop
count = 0
while count < 5:
    print(count)
    count += 1`,
    }
  };

  return (
    <div className="module">
      <h1>Module 2: Control Structures</h1>
      <p>Explore conditionals and loops to control the flow of your programs.</p>

      <div className="topic-navigation">
        <button onClick={() => setSelectedTopic('conditionals')} className={selectedTopic === 'conditionals' ? 'active' : ''}>
          Conditionals
        </button>
        <button onClick={() => setSelectedTopic('loops')} className={selectedTopic === 'loops' ? 'active' : ''}>
          Loops
        </button>
      </div>

      <div className="topic-content">
        <h2>{controlTopics[selectedTopic].title}</h2>
        <p>{controlTopics[selectedTopic].content}</p>

        <div className="example-section">
          <h3>Try this example:</h3>
          <pre>{controlTopics[selectedTopic].example}</pre>
        </div>

        <div className="compiler">
        <h3>Practice Area - Try your own code here:</h3>
        <iframe
          src="https://trinket.io/embed/python3"
          width="100%"
          height="400"
          frameBorder="0"
          marginwidth="0"
          marginheight="0"
          allowFullScreen
          title="Python Editor"
        ></iframe>
      </div>

        <div className="exercises">
          <h3>Exercises:</h3>
          {selectedTopic === 'conditionals' && (
            <ol>
              <li>Write a program that checks if a number is positive, negative, or zero.</li>
              <li>Create a simple grading system that prints "Pass" or "Fail" based on a score.</li>
            </ol>
          )}
          {selectedTopic === 'loops' && (
            <ol>
              <li>Write a for loop that prints numbers from 1 to 10.</li>
              <li>Create a while loop that counts down from 10 to 1.</li>
            </ol>
          )}
        </div>
      </div>

      
    </div>
  );
};

export default Module2;