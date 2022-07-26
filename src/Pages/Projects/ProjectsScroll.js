import { useState } from 'react';
import Modal from './Modal';
import { motion } from 'framer-motion';

const ProjectsScroll = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [target, setTarget] = useState(null);
  const openBodyModal = () => {
    setTarget('modal-component-wrapper');
    setIsOpen(true);
  };
  const openCardModal = () => {
    setTarget('card');
    setIsOpen(true);
  };

  return (
    <div className="projects-scroll-wrapper">
      <div className="projects-scroll">
        <Modal isOpen={isOpen} handleClose={() => setIsOpen(false)}>
          I am the modal!!!!
        </Modal>
        <div className="button-container">
          <button onClick={() => setIsOpen(true)}>Open body modal</button>
          <button onClick={() => console.log('Open Card Modal')}>
            Open card modal
          </button>
        </div>
        <div className="projects-scroll--br"></div>
        <div className="project-1--left">
          <img src="https://i.imgur.com/rQbdowK.png" alt="" />
        </div>
        <div className="project-1--right">
          <font className="project-1--name">Random Lit</font>
          <font className="project-1--number">1</font>
        </div>
        <div className="project-2--left">
          <font className="project-2--number">2</font>
          <font className="project-2--name">Tteok Bowl</font>
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
