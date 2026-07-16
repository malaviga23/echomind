import React from "react";
import "./landing-page.css";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

import {
  FaBrain,
  FaSearch,
  FaProjectDiagram,
  FaCalendarAlt,
  FaBell,
  FaRobot,
  FaBriefcase,
  FaRocket,
  FaFilePdf,
  FaCheckCircle,
  FaCircle,
} from "react-icons/fa";

function LandingPage() {
  return (
    <>
      <Navbar />

      {/* ================= HERO ================= */}

      <section className="hero">
        <div className="hero-bg">
          <div className="blob blob1"></div>
          <div className="blob blob2"></div>
          <div className="grid-bg"></div>
        </div>

        {/* Left Section */}

        <div className="left">
          <div className="badge">
            <FaBrain />
            <span>AI Powered Digital Memory Engine</span>
          </div>

          <h1>
            Your <span>Second Brain</span>
            <br />
            Powered by AI
          </h1>

          <p>
            EchoMind intelligently remembers your notes, documents,
            conversations, voice recordings, images and experiences.
            Retrieve anything instantly with AI-powered memory search,
            smart organization and contextual understanding.
          </p>

          <div className="buttons">
            <button className="primary">
              Get Started
            </button>

            <button className="secondary">
              Learn More
            </button>
          </div>

          <div className="stats">

            <div className="stat">
              <h3>10K+</h3>
              <span>Memories Stored</span>
            </div>

            <div className="stat">
              <h3>99%</h3>
              <span>Search Accuracy</span>
            </div>

            <div className="stat">
              <h3>24/7</h3>
              <span>AI Assistant</span>
            </div>

          </div>

        </div>

        {/* Right Section */}

        <div className="right">

          <div className="card">

            <div className="card-top">

              <div className="card-title">

                <div className="brain">
                  <FaBrain />
                </div>

                <h2>Memory Preview</h2>

              </div>

              <div className="status">
                <FaCircle className="online" />
                Synced
              </div>

            </div>

            {/* Internship */}

            <div className="memory">

              <div className="memory-icon">
                <FaBriefcase />
              </div>

              <div>

                <h3>Internship</h3>

                <p>
                  Met Ravi and discussed API documentation.
                </p>

              </div>

            </div>

            {/* Project */}

            <div className="memory">

              <div className="memory-icon">
                <FaRocket />
              </div>

              <div>

                <h3>Project</h3>

                <p>
                  EchoMind connects related memories intelligently.
                </p>

              </div>

            </div>

            {/* Reminder */}

            <div className="memory">

              <div className="memory-icon">
                <FaBell />
              </div>

              <div>

                <h3>Reminder</h3>

                <p>
                  Interview preparation starts tomorrow.
                </p>

              </div>

            </div>

            {/* Document */}

            <div className="memory">

              <div className="memory-icon">
                <FaFilePdf />
              </div>

              <div>

                <h3>Document</h3>

                <p>
                  Resume_Final_V4.pdf uploaded successfully.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>
            {/* ================= FEATURES ================= */}

      <section className="features" id="features">

        <div className="section-title">

          <span>FEATURES</span>

          <h2>
            Everything Your Brain Wishes It Could Do
          </h2>

          <p>
            Organize, remember and retrieve your digital life with
            intelligent AI capabilities.
          </p>

        </div>

        <div className="grid">

          <div className="box">

            <div className="feature-icon">
              <FaBrain />
            </div>

            <h3>Smart Memory</h3>

            <p>
              Store notes, PDFs, images, videos,
              voice recordings and every important
              memory securely.
            </p>

          </div>

          <div className="box">

            <div className="feature-icon">
              <FaSearch />
            </div>

            <h3>AI Search</h3>

            <p>
              Ask natural questions like
              "Where did I save my internship notes?"
              and receive instant answers.
            </p>

          </div>

          <div className="box">

            <div className="feature-icon">
              <FaProjectDiagram />
            </div>

            <h3>Knowledge Graph</h3>

            <p>
              AI automatically links related files,
              conversations and ideas together.
            </p>

          </div>

          <div className="box">

            <div className="feature-icon">
              <FaCalendarAlt />
            </div>

            <h3>Timeline</h3>

            <p>
              Travel through your memories in
              chronological order.
            </p>

          </div>

          <div className="box">

            <div className="feature-icon">
              <FaBell />
            </div>

            <h3>Smart Reminders</h3>

            <p>
              Never forget meetings,
              assignments and important
              events again.
            </p>

          </div>

          <div className="box">

            <div className="feature-icon">
              <FaRobot />
            </div>

            <h3>Decision Assistant</h3>

            <p>
              AI analyzes your stored memories
              to recommend smarter decisions.
            </p>

          </div>

        </div>

      </section>

      {/* ================= ABOUT ================= */}

      <section className="about" id="about">

        <div className="about-content">

          <div className="about-left">

            <span className="mini-title">
              WHY ECHOMIND
            </span>

            <h2>
              One Place For Everything
              You Want To Remember.
            </h2>

            <p>
              Human memory fades over time,
              but EchoMind doesn't.
              It securely stores your notes,
              PDFs, conversations,
              screenshots and ideas,
              allowing AI to organize
              and connect them intelligently.
            </p>

            <div className="about-list">

              <div>
                <FaCheckCircle className="check-icon" />
                <span>AI remembers context.</span>
              </div>

              <div>
                <FaCheckCircle className="check-icon" />
                <span>Find files instantly.</span>
              </div>

              <div>
                <FaCheckCircle className="check-icon" />
                <span>Secure cloud storage.</span>
              </div>

              <div>
                <FaCheckCircle className="check-icon" />
                <span>Intelligent memory connections.</span>
              </div>

            </div>

          </div>

          <div className="about-right">

            <div className="glass-card">

              <h3>Your Digital Memory</h3>

              <div className="progress-item">

                <span>Knowledge Indexed</span>

                <div className="progress">
                  <div
                    className="progress-fill"
                    style={{ width: "94%" }}
                  ></div>
                </div>

              </div>

              <div className="progress-item">

                <span>AI Connections</span>

                <div className="progress">
                  <div
                    className="progress-fill"
                    style={{ width: "87%" }}
                  ></div>
                </div>

              </div>

              <div className="progress-item">

                <span>Memory Recall</span>

                <div className="progress">
                  <div
                    className="progress-fill"
                    style={{ width: "99%" }}
                  ></div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= CTA ================= */}

      <section className="cta">

        <div className="cta-card">

          <h2>
            Ready To Build Your
            Second Brain?
          </h2>

          <p>
            Join EchoMind today and let AI remember
            everything while you focus on learning,
            creating and building your future.
          </p>

          <button className="primary">
            Get Started
          </button>

        </div>

      </section>

      <Footer />

    </>
  );
}

export default LandingPage;