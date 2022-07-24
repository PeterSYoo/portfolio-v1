import './Home.scss';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      className="home-wrapper"
      initial={{ width: 0 }}
      animate={{ width: '100vw' }}
      exit={{ x: window.innerWidth, transition: { duration: 0.01 } }}
    >
      <div className="header">
        <section className="header-logo">
          <Link to="/">
            <img src="https://i.imgur.com/IMEfuBC.png" alt="logo" />
          </Link>
        </section>
        <section className="header-icons">
          <section className="header-icons--github">
            <a
              href="https://github.com/PeterSYoo"
              target="_blank"
              rel="noreferrer"
            >
              <img src="https://i.imgur.com/ROsWHrE.png" alt="github" />
            </a>
          </section>
          <section className="header-icons--linkedin">
            <a
              href="https://www.linkedin.com/in/petersyoo/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="https://i.imgur.com/h5dmhHV.png" alt="linkedin" />
            </a>
          </section>
        </section>
      </div>
      <section className="home">
        <div className="home-intro">
          <div className="home--avatar">
            <img src="https://i.imgur.com/Zjs4HUP.png" alt="avatar" />
          </div>
          <font className="home--name">Hi! I am Peter Yoo</font>
        </div>
        <div className="home--title">a Software Engineer</div>
      </section>
      <div className="nav">
        <Link to="/about">
          <section className="nav-links--about">about</section>
        </Link>
        <Link to="/projects">
          <section className="nav-links--projects">projects</section>
        </Link>
        <Link to="/contact">
          <section className="nav-links--contact">contact</section>
        </Link>
        <section className="nav-links--resume">resume</section>
      </div>
    </motion.div>
  );
};

export default Home;
