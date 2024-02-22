import { createContext, useEffect, useState } from "react";


export const User = createContext({isAuthenticated: false, setIsAuthenticated: () => null,
logout: () => null,})

export const AuthProvider = ({children}) => {
const [isAuthenticated, setIsAuthenticated] = useState(false);

 useEffect(() => {
   const session = JSON.parse(localStorage.getItem("session"));
   console.log(session)
   if (session) {
     setIsAuthenticated(true);
    }
 }, []);

 const logout = () => {
  localStorage.removeItem('session')
  setIsAuthenticated(false)
 }

  return (
    <User.Provider value={{isAuthenticated, setIsAuthenticated, logout}}>
      {children}
    </User.Provider>
  )
}

