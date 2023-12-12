import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "./Layout";
import { useAuth } from "../context/AuthContext";

import "./Login.css";

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

  function onGoBack() {
    window.location.href = "/";
  };

  return (
      <>
        <Layout>
            <h2>Login</h2>
            <br/>
            <div>
              <span className="tiny">
                This is a test login page. To login use the following credentials - username: best-customer@dojo.tech, password: save-my-card. <br/>
              </span>
            </div>
            <div className="item">
            <form onSubmit={handleLogin} className="loginForm">
              <div className="loginFieldUsername">
                <label htmlFor="username" className="loginLabel">Username</label>
                <input
                  id="username"
                  type="text"
                  value={username}
                  placeholder="Username"
                  onChange={(e) => setUsername(e.target.value)}
                  className="loginField" />
              </div>
              <div className="loginFieldPassword">
                <label htmlFor="password" className="loginLabel">Password</label>
                <input
                  id="password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="loginField"
                />
              </div>
              <div className="loginFieldButton">
                <button type="submit" className="checkout">Login</button>
              </div>
            </form>
          </div>
          <div id="errors" className="errors">
            {error && <p>{error}</p>}
          </div>
          <div>
            <button id="goBack" className="back" onClick={onGoBack}>
              Back
            </button>
          </div>
      </Layout>
    </>
  );
};

export default Login;