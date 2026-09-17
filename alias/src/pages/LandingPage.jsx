import { Link } from "react-router-dom";
import aliasLogo from "../assets/alias-logo.jpg";

/**
 * LandingPage component for the Alias help desk landing screen.
 *
 * This page is shown to users before they sign in or create an account.
 * It introduces the application, highlights core features, explains the
 * ticket workflow, and directs visitors to the authentication pages.
 *
 * @returns {JSX.Element} The full landing page layout for the Alias platform.
 */
function LandingPage() {
  return (
    <div className="landing-page">

      <nav className="landing-navbar">

        <Link to="/" className="brand">
          <img src={aliasLogo} alt="Alias Help Desk Ticketing System" />
        </Link>

        <div className="nav-links">
          <Link to="/" className="active">
            Home
          </Link>

          <Link to="/about">
            About
          </Link>

          <Link to="/login" className="nav-signin">
            Sign In
          </Link>

          <Link to="/register" className="nav-register">
            Create Account
          </Link>
        </div>

      </nav>


      <section className="hero-section">

        <div className="hero-content">

          <span className="hero-badge">
            IT Support Made Simple
          </span>

          <h1>
            Welcome to <span>Alias</span>
          </h1>

          <h2>
            Help Desk Ticketing System
          </h2>

          <p>
            A centralized platform for managing IT support requests,
            tracking issues, and connecting users with support teams.
          </p>

          <div className="hero-buttons">

            <Link to="/login" className="btn btn-primary">
              Sign In
            </Link>

            <Link to="/register" className="btn btn-secondary">
              Create Account
            </Link>

          </div>

        </div>


        <div className="hero-visual">

          <div className="dashboard-preview">

            <div className="preview-header">
              <span className="preview-dot"></span>
              <span className="preview-dot"></span>
              <span className="preview-dot"></span>
            </div>

            <div className="preview-content">

              <div className="preview-sidebar">
                <div className="preview-logo">
                  A
                </div>

                <div className="preview-line"></div>
                <div className="preview-line"></div>
                <div className="preview-line"></div>
                <div className="preview-line"></div>
              </div>

              <div className="preview-main">

                <h3>Support Dashboard</h3>

                <div className="preview-cards">

                  <div>
                    <strong>24</strong>
                    <span>Open Tickets</span>
                  </div>

                  <div>
                    <strong>12</strong>
                    <span>In Progress</span>
                  </div>

                  <div>
                    <strong>48</strong>
                    <span>Resolved</span>
                  </div>

                </div>

                <div className="preview-ticket">
                  <span></span>
                  <div></div>
                  <div></div>
                </div>

                <div className="preview-ticket">
                  <span></span>
                  <div></div>
                  <div></div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>



      <section className="features-section">

        <div className="section-heading">

          <span>WHY ALIAS?</span>

          <h2>
            Everything you need to manage IT support
          </h2>

          <p>
            Alias provides a structured environment for users,
            support agents, and administrators to manage support
            requests efficiently.
          </p>

        </div>


        <div className="feature-grid">

          <div className="feature-card">

            <div className="feature-icon">
              🎫
            </div>

            <h3>
              Ticket Management
            </h3>

            <p>
              Submit and manage IT support requests through
              a centralized ticketing system.
            </p>

          </div>


          <div className="feature-card">

            <div className="feature-icon">
              📊
            </div>

            <h3>
              Ticket Tracking
            </h3>

            <p>
              Track ticket status, updates, assignments,
              and resolution progress in one place.
            </p>

          </div>


          <div className="feature-card">

            <div className="feature-icon">
              📚
            </div>

            <h3>
              Knowledge Base
            </h3>

            <p>
              Find useful solutions and documentation for
              common IT problems and questions.
            </p>

          </div>


          <div className="feature-card">

            <div className="feature-icon">
              🤖
            </div>

            <h3>
              Intelligent Support
            </h3>

            <p>
              AI-assisted ticket classification can help
              identify categories, priorities, and relevant tags.
            </p>

          </div>

        </div>

      </section>


      <section className="how-section">

        <div className="section-heading">

          <span>HOW IT WORKS</span>

          <h2>
            Support made simple
          </h2>

        </div>


        <div className="steps">

          <div className="step">

            <div className="step-number">
              01
            </div>

            <h3>
              Submit
            </h3>

            <p>
              Describe your IT issue and create a support ticket.
            </p>

          </div>


          <div className="step-arrow">
            →
          </div>


          <div className="step">

            <div className="step-number">
              02
            </div>

            <h3>
              Manage
            </h3>

            <p>
              Support agents review, assign, and work on tickets.
            </p>

          </div>


          <div className="step-arrow">
            →
          </div>


          <div className="step">

            <div className="step-number">
              03
            </div>

            <h3>
              Resolve
            </h3>

            <p>
              Users receive updates while support teams resolve the issue.
            </p>

          </div>

        </div>

      </section>


  
      <section className="cta-section">

        <div>

          <span>
            GET STARTED WITH ALIAS
          </span>

          <h2>
            Your IT support, organized.
          </h2>

          <p>
            Create an account to submit and track your support requests.
          </p>

        </div>

        <Link to="/register" className="btn btn-white">
          Create Account
        </Link>

      </section>


      <footer className="landing-footer">

        <div className="footer-brand">

          <img
            src={aliasLogo}
            alt="Alias"
          />

          <p>
            Help Desk Ticketing System
          </p>

        </div>


        <div className="footer-links">

          <Link to="/">
            Home
          </Link>

          <Link to="/about">
            About
          </Link>

          <Link to="/login">
            Sign In
          </Link>

          <Link to="/register">
            Create Account
          </Link>

        </div>


        <p className="copyright">
          © 2026 Alias. All rights reserved.
        </p>

      </footer>

    </div>
  );
}

export default LandingPage;