import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import welcomeImage from "../files/welcomeImage.png";

const HomePage = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="home-content">
      <img src={welcomeImage} alt="Welcome" className="welcome-image" />
      {user ? (
        <div className="welcome-text">
          <h1>Welcome, {user.username}</h1>
        </div>
      ) : (
        <div className="welcome-text">
          <h1>Welcome to Our Website</h1>
          <p>Explore our content and sign up to enjoy more features.</p>
        </div>
      )}
    </div>
  );
};

export default HomePage;
