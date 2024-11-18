import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted");
    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        alert("Login successful!");
        navigate("/"); // Redirect to the home page
      } else {
        const data = await response.json();
        if (response.status === 404) {
          alert("User does not exist");
        } else if (response.status === 401) {
          alert("Password incorrect");
        } else {
          alert(`Error: ${data.message}`);
        }
      }
    } catch (error) {
      alert("Error logging in");
    }
  };

  return (
    <div className="login-page">
      <h2>Login to Your Account</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" onClick={() => console.log("Button clicked")}>Login</button>
      </form>
      <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
    </div>
  );
};

export default LoginPage;
