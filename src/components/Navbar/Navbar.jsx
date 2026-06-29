import { useState } from "react";
import "./Navbar.css";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import portfolioData from "../../data/portfolioData";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="logo">
        {portfolioData.name}
      </div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#certifications">Certificates</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="icons">

        <a
          href={portfolioData.github}
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href={portfolioData.linkedin}
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>

        <a
          href={portfolioData.resume}
          download
          className="resume-btn"
        >
          Resume
        </a>

      </div>

      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </motion.nav>
  );
}

export default Navbar;