import "./landing-page.css";
// import logo from "../../assets/images/logo.png"; // Change the path if needed

function LandingPage() {
  return (
    <>
      <header>
        <div className="logo">
          {/* <img src={logo} alt="Logo" /> */}
          <h2>
            <span className="echo">Echo</span>
            <span className="mind">Mind</span>
          </h2>
        </div>

        <nav>
          <a href="#">Home</a>
          <a href="#">Features</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <div className="left">
          <h1>
            Your <span>Second Brain</span>
            <br />
            Powered by AI
          </h1>

          <p>
            EchoMind is an intelligent digital memory system that remembers
            your notes, ideas, conversations, documents, and experiences—then
            helps you find, connect, and understand them whenever you need.
          </p>

          <div className="buttons">
            <a href="#" className="btn primary">
              Get Started
            </a>

            <a href="#" className="btn secondary">
              Learn More
            </a>
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
              <p>EchoMind uses AI to connect memories intelligently.</p>
            </div>

            <div className="memory">
              <h3>Reminder</h3>
              <p>Interview preparation starts tomorrow.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <h2>Core Features</h2>

        <div className="grid">
          <div className="box">
            <h3>🧠 Smart Memory</h3>
            <p>Store notes, ideas, documents, voice recordings, and images.</p>
          </div>

          <div className="box">
            <h3>🔍 AI Search</h3>
            <p>Ask questions naturally instead of searching keywords.</p>
          </div>

          <div className="box">
            <h3>🔗 Knowledge Graph</h3>
            <p>Automatically connects related memories and events.</p>
          </div>

          <div className="box">
            <h3>📅 Timeline</h3>
            <p>View your memories in a beautiful chronological timeline.</p>
          </div>

          <div className="box">
            <h3>⏰ Smart Reminders</h3>
            <p>Never forget important tasks and upcoming events.</p>
          </div>

          <div className="box">
            <h3>🤖 Decision Assistant</h3>
            <p>Receive recommendations based on your stored memories.</p>
          </div>
        </div>
      </section>

      <section className="about">
        <h2>Why EchoMind?</h2>

        <p>
          People save information across WhatsApp, Notes, PDFs, emails, and
          documents—but remembering where everything is becomes difficult.
          EchoMind works like your personal AI-powered second brain,
          understanding your information, connecting related memories, and
          helping you recall them instantly whenever you need.
        </p>
      </section>

      <footer>
        © 2026 EchoMind | AI Digital Memory & Decision Engine
      </footer>
    </>
  );
}

export default LandingPage;