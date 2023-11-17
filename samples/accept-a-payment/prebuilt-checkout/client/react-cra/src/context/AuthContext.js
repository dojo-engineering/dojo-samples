import React, { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext({
  isAuthenticated: false,
  customerName: null,
  dojoCustomerId: null,
  customerId: null,
  token: null,
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    isAuthenticated: false,
    token: null,
    customerName: null,
    dojoCustomerId: null,
    customerId: null,
  });

  useEffect(() => {
    const storedAuth = localStorage.getItem("auth");
    if (storedAuth) {
      setAuth(JSON.parse(storedAuth));
    }
  }, []);

  const login = (token, customerName, dojoCustomerId, customerId) => {
    const newAuth = {
      isAuthenticated: true,
      token,
      customerName,
      dojoCustomerId,
      customerId,
    };
    localStorage.setItem("auth", JSON.stringify(newAuth));
    setAuth(newAuth);
  };

  const logout = () => {
    localStorage.removeItem("auth");
    setAuth({
      isAuthenticated: false,
      token: null,
      customerName: null,
      dojoCustomerId: null,
      customerId: null,
    });
  };

  return (
    <AuthContext.Provider value={{ ...auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
