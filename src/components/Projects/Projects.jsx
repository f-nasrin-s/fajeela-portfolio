import "./Projects.css";
import { motion } from "framer-motion";
import projectData from "../../data/projectData";

function Projects() {
  return (
    <section className="projects" id="projects">

      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h2>

      <div className="projects-container">

        {projectData.map((project, index) => (
          <motion.div
            className="project-card"
            key={project.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
            }}
            viewport={{ once: true }}
          >

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="tech-stack">
              {project.tech.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
            </div>

          </motion.div>
        ))}

      </div>

    </section>
  );
}

export default Projects;