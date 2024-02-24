import { createContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import dayjs from "dayjs";

export const AuthContext = createContext({
  isAuthenticated: false,
  user: null,
  setIsAuthenticated: () => null,
  logout: () => null,
});

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [user, setUser] = useState(null);

  const logout = () => {
    localStorage.removeItem("session");
    setIsAuthenticated(false);
  };

  useEffect(() => {
    const session = JSON.parse(localStorage.getItem("session"));

    if (session) {
      const decoded = jwtDecode(session.refresh_token);
      const expiry = dayjs(decoded.exp * 1000);
      const isValid = dayjs().isBefore(expiry);

      if (isValid) {
        setUser(session.user);
        setIsAuthenticated(true);
      } else {
        logout();
      }
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, logout, user }}
    >
      {children}
    </AuthContext.Provider>
  );
};
