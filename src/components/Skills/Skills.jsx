import "./Skills.css";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Programming",
    skills: ["Python", "Java", "JavaScript", "SQL"],
  },

  {
    title: "Frontend",
    skills: [
      "HTML",
      "CSS",
      "React.js",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },

  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "REST API",
    ],
  },

  {
    title: "AI / Machine Learning",
    skills: [
      "Machine Learning",
      "TensorFlow",
      "Scikit-Learn",
      "Pandas",
      "NumPy",
      "Matplotlib",
    ],
  },

  {
    title: "Database",
    skills: [
      "MongoDB",
      "Firebase",
      "MySQL",
    ],
  },

  {
    title: "Tools",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Jupyter Notebook",
      "Postman",
    ],
  },
];

function Skills() {
  return (
    <section className="skills-section" id="skills">

      <motion.h2
        className="skills-title"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Skills
      </motion.h2>

      <div className="skills-container">

        {skillCategories.map((category, index) => (
          <motion.div
            className="skill-card"
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
          >

            <h3>{category.title}</h3>

            <div className="skills-list">

              {category.skills.map((skill, i) => (
                <span key={i}>{skill}</span>
              ))}

            </div>

          </motion.div>
        ))}

      </div>
    </section>
  );
}

export default Skills;