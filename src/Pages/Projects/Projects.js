import Navbar from '../../Components/Navbar';
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
            {/* <img src="https://i.imgur.com/2NOaXQD.png" alt="logo" /> */}
            <font className="header-logo--type">PY</font>
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
          frameborder="0"
        ></iframe>
      </div>

      <section className="projects-right-column">
        <div className="projects-right-column--nav"></div>
        <div className="projects-right-column--name">
          <div className="nav-projects">
            <Link to="/about">
              <section className="nav-links--about">ABOUT</section>
            </Link>
            <Link to="/projects">
              <section className="nav-links--projects">PROJECTS</section>
            </Link>
            <Link to="/contact">
              <section className="nav-links--contact">CONTACT</section>
            </Link>
            <section className="nav-links--resume">RESUME</section>
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
