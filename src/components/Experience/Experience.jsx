import "./Experience.css";
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

function Experience() {
  return (
    <section className="experience" id="experience">

      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Experience
      </motion.h2>

      <div className="timeline">

        <motion.div
          className="timeline-item"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >

          <div className="timeline-icon">
            <FaBriefcase />
          </div>

          <div className="timeline-content">

            <span className="timeline-date">
              Present
            </span>

            <h3>
              Fullstack web development Intern
            </h3>

            <h4>
              White and Box Tech Products and Services
            </h4>

            <ul>

              <li>Developing AI-powered web applications.</li>

              <li>Building responsive interfaces using React.js.</li>

              <li>Developing backend APIs with Node.js and Express.js.</li>

              <li>Working with Machine Learning concepts and model integration.</li>

              <li>Collaborating in real-world software development projects.</li>

            </ul>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default Experience;