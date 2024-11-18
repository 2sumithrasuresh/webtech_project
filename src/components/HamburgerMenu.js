import React, { useState } from "react";
import { Link } from "react-router-dom";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="hamburger-menu" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)} >
      <button onClick={toggleMenu} className="hamburger-button">
        &#9776;
      </button>
      {isOpen && (
        <nav className="menu">
          <ul>
            <li>
              <Link to="/">Home</Link> {/* Link to the home page */}
            </li>
            <li>
            <Link to="/AboutPage">About</Link>
            </li>
            <li>
              <Link to="/Learning-path">Courses</Link> {/* Link to the home page */}
            </li>
            <li>
              <Link to="/game">Games</Link> {/* Link to the home page */}
            </li>
            <li>
              <Link to="/LeaderBoard">leaderboard</Link> {/* Link to the home page */}
            </li>
            <li>Contact</li>
          </ul> 
        </nav>
      )}
    </div>
  );
};

export default HamburgerMenu;