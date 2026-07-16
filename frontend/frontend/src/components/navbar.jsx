import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <header className="navbar">

      <div className="brand">

    <div className="logo-container">

        <img
            src="/logo.png"
            alt="EchoMind Logo"
            className="logo"
        />

        <div className="logo-glow"></div>

    </div>

    <div className="brand-text">

        <h2>

            <span className="echo">
                ECHO
            </span>

            <span className="mind">
                MIND
            </span>

        </h2>

        <p>AI Memory Engine</p>

    </div>

</div>
      <nav className="nav-links">

        <Link to="/">Home</Link>

        <a href="#features">Features</a>

        <a href="#about">About</a>

        <Link to="/login" className="login-btn">
          Login
        </Link>

      </nav>

    </header>
  );
}

export default Navbar;