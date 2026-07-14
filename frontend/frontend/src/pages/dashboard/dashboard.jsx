import React from "react";
import "./dashboard.css";
import {
  FaFolderOpen,
  FaRobot,
  FaPlus,
  FaSearch,
  FaClock,
  FaUserCircle
} from "react-icons/fa";



function Dashboard() {

  // const username = "username"; 
  const user = JSON.parse(localStorage.getItem("user"));

  const username = user?.name || "User";

  return (
    
    <div className="dashboard">

      {/* Navbar */}

      <nav className="navbar">

    <div className="logo">
  <img src="/logo.png" alt="EchoMind Logo" className="logo-img" />

  <h1>
    <span className="echo">Echo</span>
    <span className="mind">Mind</span>
  </h1>
</div>

        <div className="profile">

          <FaUserCircle className="profileIcon"/>

          <span>{username}</span>

        </div>

      </nav>


      {/* Welcome */}

      <section className="hero">

        <div>

          <h2>
            Hello,
            <span> {username} 👋</span>
          </h2>

          <p>
            Welcome back! Your AI Memory Assistant is ready to help you remember everything.
          </p>

        </div>

        <button className="addBtn">

          <FaPlus />

          Add Memory

        </button>

      </section>


      {/* Search */}

      <div className="searchBox">

        <FaSearch />

        <input
          type="text"
          placeholder="Search memories, projects, PDFs, videos..."
        />

      </div>


      {/* Cards */}

      <div className="cards">

        <div className="card">
  <img src="/logo.png" alt="EchoMind Logo" className="cardLogo" />

  <h3>Memories</h3>

  <h1>25</h1>

  <p>Stored Memories</p>
</div>

        <div className="card">

          <FaFolderOpen className="cardIcon"/>

          <h3>Projects</h3>

          <h1>8</h1>

          <p>Active Projects</p>

        </div>

        <div className="card">

          <FaRobot className="cardIcon"/>

          <h3>AI Assistant</h3>

          <h1>24/7</h1>

          <p>Ready to Help</p>

        </div>

      </div>


      {/* Recent */}

      <div className="recent">

        <h2>Recent Memories</h2>

        <div className="memory">

          <FaClock />

          <span>React Dashboard Design</span>

        </div>

        <div className="memory">

          <FaClock />

          <span>Backend API Notes</span>

        </div>

        <div className="memory">

          <FaClock />

          <span>College Project PPT</span>

        </div>

        <div className="memory">

          <FaClock />

          <span>Where I kept Passport.pdf</span>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;