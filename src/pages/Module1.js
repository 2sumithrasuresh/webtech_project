import React, { useState } from "react";
import "./Module1.css";

const Module1 = () => {
  const [selectedTopic, setSelectedTopic] = useState('introduction');

  const pythonTopics = {
    introduction: {
      title: "Welcome to Python",
      content: "Python is a high-level, interpreted programming language known for its simplicity and readability. It's perfect for beginners!",
      example: "# This is your first Python program\nprint('Hello, World!')",
    },
    variables: {
      title: "Variables in Python",
      content: "Variables are containers for storing data values. Python has no command for declaring a variable - a variable is created the moment you first assign a value to it.\nF-strings (formatted string literals) are a way to embed expressions inside string literals, using the 'f' or 'F' prefix and curly braces {}. They make string formatting more readable and convenient.",
      example: "# Creating variables\nname = 'John'\nage = 25\nheight = 1.75\n\nprint(f'Name: {name}')\nprint(f'Age: {age}')\nprint(f'Height: {height} meters')",
    },
    dataTypes: {
      title: "Data Types in Python",
      content: "Python has several built-in data types: strings (text), integers (whole numbers), floats (decimal numbers), booleans (True/False), and more.",
      example: "# Different data types\ntext = 'Hello'          # string\nnumber = 42           # integer\ndecimal = 3.14        # float\nis_active = True      # boolean\n\nprint(f'Type of text: {type(text)}')\nprint(f'Type of number: {type(number)}')\nprint(f'Type of decimal: {type(decimal)}')\nprint(f'Type of is_active: {type(is_active)}')",
    },

    fStrings: {
      title: "F-Strings in Python",
      content: `F-strings (formatted string literals) are a way to embed expressions inside string literals, 
                using the 'f' or 'F' prefix and curly braces {}. They make string formatting more readable 
                and convenient.`,
      example: `# Without f-string (old way)
      name = "Alice"
      age = 25
      print("My name is " + name + " and I am " + str(age) + " years old")

      # With f-string (modern way)
      name = "Alice"
      age = 25
      print(f"My name is {name} and I am {age} years old")

      # F-strings can format numbers
      pi = 3.14159
      print(f"Pi rounded to 2 decimals: {pi:.2f}")`,
    }


  };

  return (
    <div className="module">
      <h1>Module 1: Introduction to Python</h1>
      <p>Welcome to Module 1. Let's start with the fundamentals of Python!</p>

      {/* Navigation Menu */}
      <div className="topic-navigation">
        <button
          onClick={() => setSelectedTopic('introduction')}
          className={selectedTopic === 'introduction' ? 'active' : ''}
        >
          Introduction
        </button>
        <button
          onClick={() => setSelectedTopic('variables')}
          className={selectedTopic === 'variables' ? 'active' : ''}
        >
          Variables
        </button>
        <button
          onClick={() => setSelectedTopic('dataTypes')}
          className={selectedTopic === 'dataTypes' ? 'active' : ''}
        >
          Data Types
        </button>
        <button
          onClick={() => setSelectedTopic('fStrings')}
          className={selectedTopic === 'fStrings' ? 'active' : ''}
        >
          F-Strings
        </button>
      </div>

      {/* Content Section */}
      <div className="topic-content">
        <h2>{pythonTopics[selectedTopic].title}</h2>
        <p>{pythonTopics[selectedTopic].content}</p>

        <div className="example-section">

          <h3>Try this example:</h3>
          <pre>{pythonTopics[selectedTopic].example}</pre>
        </div>
      </div>



      {/* Code Editor */}
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

      {/* Exercise Section */}
      <div className="exercises">
        <h3>Exercises:</h3>
        {selectedTopic === 'introduction' && (
          <div>
            <p>1. Try to print "Hello, your name" using the print function</p>
            <p>2. Write a comment explaining what your code does</p>
          </div>
        )}
        {selectedTopic === 'variables' && (
          <div>
            <p>1. Create a variable called 'favorite_number' and assign it a value</p>
            <p>2. Create two variables and perform a mathematical operation with them</p>
          </div>
        )}
        {selectedTopic === 'dataTypes' && (
          <div>
            <p>1. Create one variable of each data type (string, integer, float, boolean)</p>
            <p>2. Use the type() function to check the type of each variable</p>
          </div>
        )}
        {selectedTopic === 'fStrings' && (
          <div>
            <p> 1.Create variables for your name and age, then use an f-string to print: "Hello, I'm [name] and I'm [age] years old"</p>
            <p>2.Create two number variables and use an f-string to show their multiplication result</p>
            <p>3.Create a float variable and use an f-string to display it with exactly 2 decimal places</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Module1;