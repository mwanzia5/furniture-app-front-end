import React, { createContext, useContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import dayjs from "dayjs";

// Create the context with default values
export const AuthContext = createContext({
  isAuthenticated: false,
  user: null,
  setIsAuthenticated: () => null,
  logout: () => null,
});
// AuthProvider component
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const logout = () => {
    localStorage.removeItem("session");
    setIsAuthenticated(false);
  };

  useEffect(() => {
    try {
      // Get the session data from localStorage
      const session = JSON.parse(localStorage.getItem("session"));

      // Check if the session is present and the refresh_token is a string
      if (session && typeof session.refresh_token === "string") {
        // Decode the JWT token
        const decoded = jwtDecode(session.refresh_token);

        // Check if the decoded token has an 'exp' property
        if (decoded && decoded.exp) {
          // Check if the token is still valid based on its expiration time
          const expiry = dayjs(decoded.exp * 1000);
          const isValid = dayjs().isBefore(expiry);

          if (isValid) {
            // Set the user and mark as authenticated
            setUser(session.user);
            setIsAuthenticated(true);
          } else {
            // Token is expired, perform logout
            logout();
          }
        } else {
          // Token doesn't have 'exp' property, handle gracefully
          console.error("Invalid token: Missing 'exp' property");
          logout();
        }
      } else {
        // session or refresh_token is not in the expected format, handle gracefully
        console.error("Invalid session or refresh_token");
        logout();
      }
    } catch (error) {
      // Handle any other decoding errors gracefully
      console.error("Error decoding token", error);
      logout();
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};
