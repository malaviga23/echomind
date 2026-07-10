import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      email,
      password,
    });
  };

  return (
    
  <div className="login-container">

    <div className="auth-header">
      <Link to="/" className="brand-link">
        <img src="/logo.png" alt="EchoMind Logo" />

        <h2>
          <span className="echo">Echo</span>
          <span className="mind">Mind</span>
        </h2>
      </Link>
    </div>

    <div className="login-box">

        <h2>Login</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="email"
            placeholder="Email"
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

          <button>Login</button>

        </form>

        <p>
          Don't have an account?
          <Link to="/register"> Register</Link>
        </p>

      </div>

    </div>
  );
}

export default Login;