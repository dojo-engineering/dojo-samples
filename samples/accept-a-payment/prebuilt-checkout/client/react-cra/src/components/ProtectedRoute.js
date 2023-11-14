import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children, redirectTo }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? (
    children
  ) : (
    <Navigate to={`/login?redirectTo=${redirectTo}`} />
  );
};

export default ProtectedRoute;
