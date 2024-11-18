import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext"; // Import UserContext

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useContext(UserContext); // Access user context to determine if the user is logged in
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // Clears user context
    navigate("/"); // Redirect to home page visible for logged-out users
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="hamburger-menu"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button onClick={toggleMenu} className="hamburger-button">
        &#9776;
      </button>
      {isOpen && (
        <nav className="menu">
          <ul>
            {/* Always show Home, About, and Contact Us links */}
            <li>
              <Link to="/">Home</Link> {/* Link to the home page */}
            </li>
            <li>
              <Link to="/AboutPage">About</Link>
            </li>
            <li>Contact</li>

            {/* Show other links only if the user is logged in */}
            {user ? (
              <>
                <li>
                  <Link to="/Learning-path">Courses</Link>
                </li>
                <li>
                  <Link to="/game">Games</Link>
                </li>
                <li>
                  <Link to="/LeaderBoard">Leaderboard</Link>
                </li>
                {/* Optionally, you can add Profile and Logout links */}
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li>
                  <Link to="/" onClick={handleLogout}>Logout</Link>
                </li>
              </>
            ) : (
              // Show Login and Sign Up links if the user is not logged in
              <>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/signup">Sign Up</Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      )}
    </div>
  );
};

export default HamburgerMenu;
