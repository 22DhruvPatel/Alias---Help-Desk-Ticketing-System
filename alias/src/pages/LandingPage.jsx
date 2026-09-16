

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

    </div>
      

  )
}

export default LandingPage;