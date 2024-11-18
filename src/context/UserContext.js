// src/context/UserContext.js
import React, { createContext, useState, useEffect } from "react";
import { jwtDecode as jwt_decode } from "jwt-decode";  // Corrected import

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        // Decode the JWT token to get user info
        const decoded = jwt_decode(token);
        setUser(decoded);  // Set the user from decoded token info
      } catch (error) {
        console.error("Error decoding token:", error);
        setUser(null);  // In case token decoding fails, set user to null
      }
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, setUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};
