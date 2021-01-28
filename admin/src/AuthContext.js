import { createContext, useContext, useState } from "react";
import { LoginPage } from "./LoginPage/LoginPage";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState();

  const isLoggedIn = !!token;

  const login = (newToken) => {
    setToken(newToken);
  };

  const logout = () => {
    setToken(null);
  };
  return (
    <AuthContext.Provider value={{ token, isLoggedIn, login, logout }}>
      {isLoggedIn ? children : <LoginPage />}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
