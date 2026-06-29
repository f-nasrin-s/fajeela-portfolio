import "./Contact.css";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">

      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .6 }}
      >
        Contact Me
      </motion.h2>

      <div className="contact-container">

        <motion.div
          className="contact-left"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .6 }}
        >

          <h3>Let's Connect!</h3>

          <p>
            I'm currently looking for internships,
            freelance opportunities and exciting AI/ML
            projects. Feel free to reach out.
          </p>

          <div className="contact-info">

            <p>
              <FaEnvelope />
              fajeelanasrins2@gmail.com
            </p>

            <p>
              <FaLinkedin />
              linkedin.com/in/fajeela-nasrin-s-318710322
            </p>

            <p>
              <FaGithub />
              github.com/f-nasrin-s
            </p>

          </div>

        </motion.div>

        <motion.form
          className="contact-form"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .6 }}
        >

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

          <input
            type="text"
            placeholder="Subject"
          />

          <textarea
            rows="6"
            placeholder="Your Message"
          ></textarea>

          <button>
            Send Message
          </button>

        </motion.form>

      </div>

    </section>
  );
}

export default Contact;