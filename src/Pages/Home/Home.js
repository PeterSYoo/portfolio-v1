import './Home.scss';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      className="home-wrapper"
      initial={{ width: 0 }}
      animate={{ width: '100vw' }}
      exit={{ x: window.innerWidth, transition: { duration: 0.01 } }}
    >
      <section className="home-intro">
        <h1>
          Hi! I am <font className="home-intro--name">Peter Yoo</font>
          <br />a Software Engineer
        </h1>
      </section>
    </motion.div>
  );
};

export default Home;
