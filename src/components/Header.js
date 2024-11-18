// src/components/Header.js
import React, { useContext } from "react";
import { UserContext } from "../context/UserContext"; // Import UserContext to access user state
import HamburgerMenu from "./HamburgerMenu";
import SearchBar from "./SearchBar";
import ProfileIcon from "./ProfileIcon";

const Header = () => {
  const { user } = useContext(UserContext); // Access the user state from UserContext

  return (
    <header className="header">
      <HamburgerMenu />
      <div className="header-right">
        {/* Show SearchBar and ProfileIcon only if user is logged in */}
        {user ? (
          <>
            <SearchBar />
            <ProfileIcon />
          </>
        ) : (
          <>
            {/* Show Login and SignUp buttons if user is not logged in */}
            <button onClick={() => window.location.href = "/login"}>Login</button>
            <button onClick={() => window.location.href = "/signup"}>Sign Up</button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
