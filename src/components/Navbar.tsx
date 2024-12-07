import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-container container">
      <Link to="/syafu-website" className="navbar-brand">
        <img src="assets/SyafuIcon.png" alt="Logo" className="navbar-icon" />
      </Link>
      <div className="navbar-links">
        {/* <Link to="/about" className="navbar-link">
          About Me
        </Link> */}
        {/* <Link to="/projects" className="navbar-link">
          Projects
        </Link> */}
        <Link to="/project-example" className="navbar-link">
          Project Example
        </Link>
        <Link to="/contact" className="navbar-link">
          Contact
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
