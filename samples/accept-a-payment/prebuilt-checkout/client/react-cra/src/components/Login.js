import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();
  const queryParams = new URLSearchParams(window.location.search);
  const redirectTo = queryParams.get("redirectTo") ?? "/";

  useEffect(() => {
    if (isAuthenticated) {
      navigate(redirectTo);
    }
  }, [isAuthenticated, navigate, redirectTo]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: username, password }),
      });

      if (response.status === 200) {
        const data = await response.json();
        login(
          data.token,
          data.customerName,
          data.dojoCustomerId,
          data.customerId
        );
        navigate(redirectTo);
      } else {
        setError("Invalid credentials");
      }
    } catch (err) {
      setError("Error logging in. Please try again.");
    }
  };

  return (
    <div className="centered-container">
      <h2>Login</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
