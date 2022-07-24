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
      exit={{ x: window.innerWidth, transition: { duration: 0.01 } }}
    >
      <section className="projects-logo">
        <div className="projects-logo--icon">
          <Link to="/">
            <img src="https://i.imgur.com/2NOaXQD.png" alt="logo" />
          </Link>
        </div>
      </section>
      <iframe
        title="projectsFrame"
        className="projects-scroll--iframe"
        src="/projects-scroll"
        width="703"
        height="100%"
        frameborder="0"
      ></iframe>
      <section className="projects-right-column">
        <div className="projects-right-column--icons">
          <div className="projects-right-column--icons-github">
            <a
              href="https://github.com/PeterSYoo"
              target="_blank"
              rel="noreferrer"
            >
              <img src="https://i.imgur.com/wBDZDho.png" alt="github" />
            </a>
          </div>
          <div className="projects-right-column--icons-linkedin">
            <a
              href="https://www.linkedin.com/in/petersyoo/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="https://i.imgur.com/e2CyB9f.png" alt="linkedin" />
            </a>
          </div>
        </div>
        <div className="projects-right-column--name">
          <h1>Projects</h1>
        </div>
        <div className="projects-right-column--nav">
          <Navbar />
        </div>
      </section>
    </motion.div>
  );
};

export default Projects;
