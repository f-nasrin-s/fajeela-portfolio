import "./About.css";
import { motion } from "framer-motion";
import {
  FaUserGraduate,
  FaLaptopCode,
  FaMapMarkerAlt,
  FaBriefcase,
} from "react-icons/fa";

function About() {
  return (
    <section id="about" className="about">

      <motion.div
        className="about-container"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >

        <h2 className="section-title">About Me</h2>

        <p className="about-description">

          I'm <span>Fajeela Nasrin S</span>, a passionate Artificial Intelligence
          and Machine Learning undergraduate with a strong interest in
          Full Stack Development. I enjoy creating intelligent,
          user-friendly applications using React, Node.js, Express.js,
          Python, and Machine Learning.

          <br /><br />

          Currently, I'm working as an Fullstack web development Intern at
          <span> White and Box Tech Products and Services</span>,
          where I'm gaining practical experience in developing
          scalable applications and AI-based solutions.

        </p>

        <div className="about-cards">

          <div className="card">
            <FaUserGraduate />
            <h3>AIML Student</h3>
            <p>3rd Year Undergraduate</p>
          </div>

          <div className="card">
            <FaLaptopCode />
            <h3>Developer</h3>
            <p>AI/ML + Full Stack</p>
          </div>

          <div className="card">
            <FaMapMarkerAlt />
            <h3>Banglore</h3>
            <p>India</p>
          </div>

          <div className="card">
            <FaBriefcase />
            <h3>Internship</h3>
            <p>White and Box Tech Products and Services</p>
          </div>

        </div>

      </motion.div>

    </section>
  );
}

export default About;