import React from "react";
import { Link } from "react-router-dom";

const AuthSection = () => {
  return (
    <div className="auth-section">
      <div className="auth-buttons">
        <Link to="/signup">
          <button className="sign-up">Sign Up</button>
        </Link>
        <Link to="/login">
          <button className="login">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default AuthSection;
