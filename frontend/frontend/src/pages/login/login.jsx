import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import { loginUser } from "../../services/authservice";
import {
  FaBrain,
  FaSearch,
  FaCloud,
  FaBolt
} from "react-icons/fa";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await loginUser(email, password);

      alert(data.message);

      if (data.token) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));

        navigate("/dashboard");
      }
    } catch (error) {
      alert("Login Failed");
      console.log(error);
    }
  };

  return (
    <div className="login-page">

      {/* Background */}
      <div className="background-blur blur1"></div>
      <div className="background-blur blur2"></div>

      {/* Logo */}
      <div className="auth-header">
        <Link to="/" className="brand-link">
          <img src="/logo.png" alt="EchoMind Logo" />

          <h2>
            <span className="echo">Echo</span>
            <span className="mind">Mind</span>
          </h2>
        </Link>
      </div>

      <div className="login-wrapper">

        {/* Left Side */}
        <div className="login-left">

          <h1>
            Welcome Back to <span>EchoMind</span>
          </h1>

          <p>
            Your AI-powered second brain remembers documents,
            notes, videos, images and everything you never
            want to lose again.
          </p>

          <div className="feature-list">

  <div className="feature-card">
    <FaBrain className="feature-icon" />
    <div>
      <h4>AI Memory</h4>
      <p>Remember everything instantly.</p>
    </div>
  </div>

  <div className="feature-card">
    <FaSearch className="feature-icon" />
    <div>
      <h4>Smart Search</h4>
      <p>Find files using natural language.</p>
    </div>
  </div>

  <div className="feature-card">
    <FaCloud className="feature-icon" />
    <div>
      <h4>Cloud Storage</h4>
      <p>Securely store every memory.</p>
    </div>
  </div>

  <div className="feature-card">
    <FaBolt className="feature-icon" />
    <div>
      <h4>Fast Retrieval</h4>
      <p>Access memories in seconds.</p>
    </div>
  </div>

</div>

          

        </div>

        {/* Login Card */}

        <div className="login-box">

          <h2>Login</h2>

          <p className="subtitle">
            Continue to your digital memory.
          </p>

          <form onSubmit={handleSubmit}>

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button type="submit">
              Login
            </button>

          </form>

          <p className="register-text">
            Don't have an account?
            <Link to="/register"> Register</Link>
          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;