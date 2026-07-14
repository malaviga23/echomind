import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
function Navbar() {
  return (
    <header className="navbar">

      <div className="brand">

           <img src="/logo.png" alt="EchoMind Logo" />

        <h2>
          <span className="echo">Echo</span>
          <span className="mind">Mind</span>
        </h2>

      </div>

      <nav>

        <Link to="/">Home</Link>

        <Link to="/#features">Features</Link>

        <Link to="/#about">About</Link>

        <Link to="/login" className="login-btn">
          Login
        </Link>

      </nav>

    </header>
  );
}

export default Navbar;