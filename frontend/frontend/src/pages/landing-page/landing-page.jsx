import React from "react";
import "./landing-page.css";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

function LandingPage() {
  return (
    <>
      <Navbar />

      <section className="hero">

        <div className="left">

          <h1>
            Your <span>Second Brain</span>
            <br />
            Powered by AI
          </h1>

          <p>
            EchoMind is an intelligent digital memory system that remembers
            your notes, ideas, conversations, documents and experiences,
            helping you recall everything instantly.
          </p>

          <div className="buttons">
            <button className="primary">Get Started</button>

            <button className="secondary">Learn More</button>
          </div>

        </div>

        <div className="right">

          <div className="card">

            <h2>Memory Preview</h2>

            <div className="memory">
              <h3>Internship</h3>
              <p>Met Ravi and discussed API documentation.</p>
            </div>

            <div className="memory">
              <h3>Project</h3>
              <p>EchoMind connects related memories intelligently.</p>
            </div>

            <div className="memory">
              <h3>Reminder</h3>
              <p>Interview preparation starts tomorrow.</p>
            </div>

          </div>

        </div>

      </section>

      <section className="features" id="features">

        <h2>Core Features</h2>

        <div className="grid">

          <div className="box">
            <h3>🧠 Smart Memory</h3>
            <p>Store notes, documents, images and voice recordings.</p>
          </div>

          <div className="box">
            <h3>🔍 AI Search</h3>
            <p>Search naturally using simple questions.</p>
          </div>

          <div className="box">
            <h3>🔗 Knowledge Graph</h3>
            <p>Automatically connects related memories.</p>
          </div>

          <div className="box">
            <h3>📅 Timeline</h3>
            <p>View memories chronologically.</p>
          </div>

          <div className="box">
            <h3>⏰ Smart Reminders</h3>
            <p>Never forget important events.</p>
          </div>

          <div className="box">
            <h3>🤖 Decision Assistant</h3>
            <p>AI suggests better decisions using your memories.</p>
          </div>

        </div>

      </section>

      <section className="about" id="about">

        <h2>Why EchoMind?</h2>

        <p>
          EchoMind acts like your second brain. It stores your notes,
          conversations, PDFs and ideas while connecting everything
          intelligently using AI.
        </p>

      </section>

      <Footer />
    </>
  );
}

export default LandingPage;