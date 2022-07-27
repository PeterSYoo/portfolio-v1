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
          <font className="project-1--name">Random Lit /</font>
          <div className="project-1--tech">
            <font className="project-1--chevron">></font>
            <font className="project-1--tech-list">
              JavaScript, jQuery, ajax, Google Books API
            </font>
          </div>
          <div className="project-1--btns">
            <div className="live-demo">Live Demo</div>
            <div className="github">Github</div>
          </div>
        </div>
        <div className="project-2--left">
          <font className="project-2--name">Tteok Bowl /</font>
          <div className="project-2--tech">
            <font className="project-2--chevron">></font>
            <font className="project-2--tech-list">
              JavaScript, jQuery, ajax, Google Books API
            </font>
          </div>
          <div className="project-2--btns">
            <div className="github">Github</div>
            <div className="live-demo">Live Demo</div>
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
          <font className="project-3--number">3</font>
        </div>
        <div className="project-4--left">
          <font className="project-4--number">4</font>
          <font className="project-4--name">Greetr Library</font>
        </div>
        <div className="project-4--right">
          <img src="https://i.imgur.com/XoBYMyS.png" alt="" />
        </div>
        <div className="project-5--left">
          <img src="https://i.imgur.com/wthaydW.png" alt="" />
        </div>
        <div className="project-5--right">
          <font className="project-5--name">Task Tracker</font>
          <font className="project-5--number">5</font>
        </div>

        <div className="Modal"></div>

        <div className="projects-scroll--br-2"></div>
      </div>
    </div>
  );
};

export default ProjectsScroll;
