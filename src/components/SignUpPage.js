import React from "react";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  return (
    <div className="signup-page">
      <h2>Create an Account</h2>
      <form>
        <input type="text" placeholder="Username" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Sign Up</button>
      </form>
      <p>Already have an account? <Link to="/login">Login</Link></p>
    </div>
  );
};

export default SignUpPage;
