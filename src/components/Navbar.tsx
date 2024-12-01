const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-container">
      <a href="#home" className="navbar-brand">
        <img src="./assets/SyafuIcon.png" alt="Logo" className="navbar-icon" />
      </a>
      <div className="navbar-links">
        <a href="#about" className="navbar-link">
          About Me
        </a>
        <a href="#timeline" className="navbar-link">
          Timeline
        </a>
        <a href="#projects" className="navbar-link">
          Projects
        </a>
        <a href="#skills" className="navbar-link">
          Skills
        </a>
        <a href="#contact" className="navbar-link">
          Contact
        </a>
      </div>
    </div>
  </nav>
);

export default Navbar;
