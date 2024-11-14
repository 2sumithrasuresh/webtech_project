import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="login-page">
      <h2>Login to Your Account</h2>
      <form>
        <input type="text" placeholder="Username" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
    </div>
  );
};

export default LoginPage;
