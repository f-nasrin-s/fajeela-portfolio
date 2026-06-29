import "./Hero.css";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import portfolioData from "../../data/portfolioData";

function Hero() {
  return (
    <section className="hero" id="hero">

      <div className="hero-content">

        {/* LEFT SIDE */}

        <motion.div
          className="hero-text"
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <p className="hello">👋 Hello, I'm</p>

          <h1>{portfolioData.name}</h1>

          <h2>{portfolioData.title}</h2>

          <h3>{portfolioData.subtitle}</h3>

          <p className="description">
            {portfolioData.about}
          </p>

          <div className="hero-buttons">
            <a
              href={portfolioData.resume}
              download
              className="btn primary"
            >
              Download Resume
            </a>

            <a href="#projects" className="btn secondary">
              View Projects
            </a>
          </div>

          <div className="social-icons">

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

            <a href={`mailto:${portfolioData.email}`}>
              <FaEnvelope />
            </a>

          </div>

        </motion.div>

        {/* RIGHT SIDE */}

        <motion.div
          className="hero-right"
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >

          <div className="hero-card">

            <h3>Currently Interning</h3>

            <h2>{portfolioData.internship}</h2>

            <div className="tech-list">

              {portfolioData.technologies.map((tech, index) => (
                <span key={index}>{tech}</span>
              ))}

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default Hero;