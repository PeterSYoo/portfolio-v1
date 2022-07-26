import { Link } from 'react-router-dom';
import './Projects.scss';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <motion.div
      className="projects-wrapper"
      initial={{ width: 0 }}
      animate={{ width: '100vw' }}
      exit={{
        x: window.innerWidth,
        transition: { duration: 0.25 },
      }}
    >
      <section className="projects-logo">
        <div className="projects-logo--icon">
          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="projects-logo--btn"
            >
              <font className="projects-logo--text">PY</font>
            </motion.button>
          </Link>
        </div>
      </section>

      <div className="iframe-wrapper">
        <iframe
          title="projectsFrame"
          className="projects-scroll--iframe"
          src="/projects-scroll"
          width="703"
          height="100%"
          frameBorder="0"
        ></iframe>
      </div>

      <section className="projects-right-column">
        <div className="projects-right-column--nav"></div>
        <div className="projects-right-column--name">
          <div className="nav-projects">
            <Link to="/about">
              <motion.section
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="projects-links--about"
              >
                ABOUT
              </motion.section>
            </Link>
            <Link to="/projects">
              <motion.section
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="projects-links--projects"
              >
                PROJECTS
              </motion.section>
            </Link>
            <Link to="/contact">
              <motion.section
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="projects-links--contact"
              >
                CONTACT
              </motion.section>
            </Link>
            <section className="projects-links--resume">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="projects-resume"
              >
                RESUME
              </motion.div>
            </section>
          </div>
        </div>
        <div className="projects-right-column--icons">
          <div className="projects-right-column--icons-github">
            <a
              href="https://github.com/PeterSYoo"
              target="_blank"
              rel="noreferrer"
            >
              <img src="https://i.imgur.com/XfBtJMl.png" alt="github" />
            </a>
          </div>
          <div className="projects-right-column--icons-linkedin">
            <a
              href="https://www.linkedin.com/in/petersyoo/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="https://i.imgur.com/KKykbBT.png" alt="linkedin" />
            </a>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Projects;
