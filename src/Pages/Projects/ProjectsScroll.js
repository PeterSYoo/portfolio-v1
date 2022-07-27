import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import './ProjectsScroll.scss';

const ProjectsScroll = () => {
  // const [isOpen, setIsOpen] = useState(false);
  // const [project, setProject] = useState('');

  // const ref = useRef();

  // const components = {
  //   project1: Project1,
  //   project2: Project2,
  // };

  // const openModal = (newProject) => {
  //   setProject(newProject);
  //   setIsOpen(true);
  // };

  // // Hook
  // const useOnClickOutside = (ref, handler) => {
  //   useEffect(() => {
  //     const listener = (event) => {
  //       // Do nothing if clicking ref's element or descendent elements
  //       if (!ref.current || ref.current.contains(event.target)) {
  //         return;
  //       }
  //       handler(event);
  //     };
  //     window.parent.document.addEventListener('mousedown', listener);
  //     window.parent.document.addEventListener('touchstart', listener);
  //     return () => {
  //       window.parent.document.removeEventListener('mousedown', listener);
  //       window.parent.document.removeEventListener('touchstart', listener);
  //     };
  //   }, [ref, handler]);
  // };

  // useOnClickOutside(ref, () => setIsOpen(false));

  return (
    <div className="projects-scroll-wrapper">
      <div className="projects-scroll">
        {/* <div ref={ref}>
          <Modal isOpen={isOpen} handleClose={() => setIsOpen(false)}>
            {project}
          </Modal>
        </div> */}
        <div className="projects-scroll--br"></div>
        <div className="project-1--left">
          <img
            src="https://i.imgur.com/rQbdowK.png"
            alt=""
            // onClick={() => openModal(components.project1)}
            // style={{ cursor: 'pointer' }}
          />
        </div>
        <div className="project-1--right">
          <font className="project-1--name">Random Lit</font>
          <div className="project-1--tech">
            <font className="project-1--tech-list">
              JavaScript, jQuery, ajax, Google Books API
            </font>
          </div>
          <div className="project-1--btns">
            <a
              href="https://randomlit.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <motion.div
                className="live-demo"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Live Demo
              </motion.div>
            </a>
            <a
              href="https://github.com/PeterSYoo/randomBookGenreGenerator"
              target="_blank"
              rel="noreferrer"
            >
              <motion.div
                className="github"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Github
              </motion.div>
            </a>
          </div>
        </div>
        <div className="project-2--left">
          <font className="project-2--name">Tteok Bowl</font>
          <div className="project-2--tech">
            <font className="project-2--tech-list">
              JavaScript, jQuery, Node.js, Mongoose, MongoDB, EJS
            </font>
          </div>
          <div className="project-2--btns">
            <a
              href="https://warm-brook-32210.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <motion.div
                className="live-demo"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Live Demo
              </motion.div>
            </a>
            <a
              href="https://github.com/PeterSYoo/tteokBowl"
              target="_blank"
              rel="noreferrer"
            >
              <motion.div
                className="github"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Github
              </motion.div>
            </a>
          </div>
        </div>
        <div className="project-2--right">
          <img src="https://i.imgur.com/Slr8Z3h.png" alt="" />
        </div>
        <div className="project-3--left">
          <img src="https://i.imgur.com/8HttLw2.png" alt="" />
        </div>
        <div className="project-3--right">
          <font className="project-3--name">Skate React</font>
          <div className="project-3--tech">
            <font className="project-3--tech-list">
              JavaScript, MongoDB, EJS, React, Node.js
            </font>
          </div>
          <div className="project-3--btns">
            <a
              href="https://skate-react.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <motion.div
                className="live-demo"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Live Demo
              </motion.div>
            </a>
            <a
              href="https://github.com/abacqu/skate-shop-frontend"
              target="_blank"
              rel="noreferrer"
            >
              <motion.div
                className="github"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Github
              </motion.div>
            </a>
          </div>
        </div>
        <div className="project-4--left">
          <font className="project-4--name">Greetr Library</font>
          <div className="project-4--tech">
            <font className="project-4--tech-list">JavaScript, jQuery</font>
          </div>
          <div className="project-4--btns">
            {/* <a href="" target="_blank" rel="noreferrer">
            <motion.div
              className="live-demo"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Live Demo
            </motion.div>
            </a> */}
            <a
              href="https://github.com/PeterSYoo/greetr-framework"
              target="_blank"
              rel="noreferrer"
            >
              <motion.div
                className="github"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Github
              </motion.div>
            </a>
          </div>
        </div>
        <div className="project-4--right">
          <img src="https://i.imgur.com/XoBYMyS.png" alt="" />
        </div>
        <div className="project-5--left">
          <img src="https://i.imgur.com/dq5M6Eg.png" alt="" />
        </div>
        <div className="project-5--right">
          <font className="project-5--name">Finch Collector</font>
          <div className="project-5--tech">
            <font className="project-5--tech-list">
              Python, JavaScript, Django, PostgreSQL, AWS, Materialize
            </font>
          </div>
          <div className="project-5--btns">
            <a
              href="https://finch-collector-py.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <motion.div
                className="live-demo"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Live Demo
              </motion.div>
            </a>
            <a
              href="https://github.com/PeterSYoo/finch_collector"
              target="_blank"
              rel="noreferrer"
            >
              <motion.div
                className="github"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Github
              </motion.div>
            </a>
          </div>
        </div>
        <div className="project-6--left">
          <font className="project-6--name">Task Tracker</font>
          <div className="project-6--tech">
            <font className="project-6--tech-list">
              Python, JavaScript, Django, PostgreSQL, AWS, Materialize
            </font>
          </div>
          <div className="project-6--btns">
            <a
              href="https://task-tracker-peter.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <motion.div
                className="live-demo"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Live Demo
              </motion.div>
            </a>
            <a
              href="https://github.com/PeterSYoo/task_tracker"
              target="_blank"
              rel="noreferrer"
            >
              <motion.div
                className="github"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Github
              </motion.div>
            </a>
          </div>
        </div>
        <div className="project-6--right">
          <img src="https://i.imgur.com/wthaydW.png" alt="" />
        </div>
        <div className="project-7--left">
          <img src="https://i.imgur.com/omdbcKt.png" alt="" />
        </div>
        <div className="project-7--right">
          <font className="project-7--name">Code Journal</font>
          <div className="project-7--tech">
            <font className="project-7--tech-list">
              React, TypeScript, Redux, ESBuild, Axios, localForage, Monaco
              Editor, React MD Editor, Immer, Lerna
            </font>
          </div>
          <div className="project-7--btns">
            {/* <a href="" target="_blank" rel="noreferrer">
            <motion.div
              className="live-demo"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Live Demo
            </motion.div>
            </a> */}
            <a
              href="https://github.com/PeterSYoo/code-journal"
              target="_blank"
              rel="noreferrer"
            >
              <motion.div
                className="github"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Github
              </motion.div>
            </a>
          </div>
        </div>

        <div className="Modal"></div>

        <div className="projects-scroll--br-2"></div>
      </div>
    </div>
  );
};

export default ProjectsScroll;
