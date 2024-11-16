import React, { useState } from "react";
import "./Module1.css"; // Import Module1.css for styling

const Module3 = () => {
  const [selectedTopic, setSelectedTopic] = useState('functions');

  const functionTopics = {
    functions: {
      title: "Functions in Python",
      content: "Functions are reusable pieces of code that can be called with arguments. They help organize code and avoid repetition.",
      example: `# Defining a function
def greet(name):
    return f"Hello, {name}!"

# Calling a function
message = greet("Alice")
print(message)`,
    },
    modules: {
      title: "Modules in Python",
      content: "Modules allow you to organize your Python code into separate files. You can import functions and variables from these modules into your main program.",
      example: `# Importing a module
import math

# Using a function from the math module
result = math.sqrt(16)
print(result)`,
    }
  };

  return (
    <div className="module">
      <h1>Module 3: Functions and Modules</h1>
      <p>Understand how to create reusable code with functions and modules in Python.</p>

      <div className="topic-navigation">
        <button onClick={() => setSelectedTopic('functions')} className={selectedTopic === 'functions' ? 'active' : ''}>
          Functions
        </button>
        <button onClick={() => setSelectedTopic('modules')} className={selectedTopic === 'modules' ? 'active' : ''}>
          Modules
        </button>
      </div>

      <div className="topic-content">
        <h2>{functionTopics[selectedTopic].title}</h2>
        <p>{functionTopics[selectedTopic].content}</p>

        <div className="example-section">
          <h3>Try this example:</h3>
          <pre>{functionTopics[selectedTopic].example}</pre>
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
          {selectedTopic === 'functions' && (
            <ol>
              <li>Define a function that takes two numbers and returns their sum.</li>
              <li>Create a function that checks if a number is even or odd.</li>
            </ol>
          )}
          {selectedTopic === 'modules' && (
            <ol>
              <li>Create a simple module `math_utils.py` that contains a function for squaring a number.</li>
              <li>Import your module and use it in your main program.</li>
            </ol>
          )}
        </div>
      </div>

      
    </div>
  );
};

export default Module3;