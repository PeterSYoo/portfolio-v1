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
            <motion.section
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="projects-links--about"
            >
              <Link to="/about">ABOUT</Link>
            </motion.section>
            <motion.section
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="projects-links--projects"
            >
              <Link to="/projects">PROJECTS</Link>
            </motion.section>
            <section>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="projects-links--contact"
              >
                <Link to="/contact">
                  <font>CONTACT</font>
                </Link>
              </motion.div>
            </section>
            <section className="projects-links--resume">
              <motion.div
                className="projects-resume"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
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
              <motion.img
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                src="https://i.imgur.com/XfBtJMl.png"
                alt="github"
                onMouseOver={(e) =>
                  (e.currentTarget.src = 'https://i.imgur.com/DtSygSN.png')
                }
                onMouseOut={(e) =>
                  (e.currentTarget.src = 'https://i.imgur.com/XfBtJMl.png')
                }
              />
            </a>
          </div>
          <div className="projects-right-column--icons-linkedin">
            <a
              href="https://www.linkedin.com/in/petersyoo/"
              target="_blank"
              rel="noreferrer"
            >
              <motion.img
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                src="https://i.imgur.com/KKykbBT.png"
                alt="linkedin"
                onMouseOver={(e) =>
                  (e.currentTarget.src = 'https://i.imgur.com/40C9Fit.png')
                }
                onMouseOut={(e) =>
                  (e.currentTarget.src = 'https://i.imgur.com/KKykbBT.png')
                }
              />
            </a>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Projects;
