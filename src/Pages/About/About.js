import './About.scss';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
      className="about"
      initial={{ width: 0 }}
      animate={{ width: '80vw' }}
      exit={{ x: window.innerWidth, transition: { duration: 0.01 } }}
    >
      <section className="about-content">
        <h1>About</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>
    </motion.div>
  );
};

export default About;
