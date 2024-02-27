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
  const [credentials, setCredentials] = useState(null);

  const logout = () => {
    localStorage.removeItem("session");
    setIsAuthenticated(false);
  };

  useEffect(() => {
    try {
      // Get the session data from localStorage
     console.log(credentials)
      // Check if the session is present and the refresh_token is a string
      if (credentials) {
        localStorage.setItem("session", credentials)
        const session = JSON.parse(localStorage.getItem("session"))
        //console.log(session);
       
        const decoded = jwtDecode(session.refresh_token);
        if (decoded && decoded.exp) {
          const expiry = dayjs(decoded.exp * 1000);
          const isValid = dayjs().isBefore(expiry);
          console.log(isValid)

          if (isValid) {
            setIsAuthenticated(true);
          } 
        }
       else {
        console.error("Invalid session or refresh_token");
        //logout();
      }
    } 
  
  }
  catch (error) {
    // Handle any other decoding errors gracefully
    console.error("Error decoding token", error);
   // logout();
  }
}, [credentials]);



  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, logout, setUser, user, setCredentials }}>
      {children}
    </AuthContext.Provider>
  );
};