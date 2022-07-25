import './Home.scss';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../../Components/Navbar';
import Particle from '../../Components/Particle';

const Home = () => {
  return (
    <motion.div
      className="home-wrapper"
      initial={{ width: 0 }}
      animate={{ width: '100vw' }}
      exit={{
        x: window.innerWidth,
        transition: { duration: 0.25 },
      }}
    >
      <div className="home-top--wrapper">
        <Particle />
        <div className="header">
          <section className="header-logo">
            <Link to="/">PY</Link>
          </section>
          <section className="header-icons">
            <section className="header-icons--github">
              <a
                href="https://github.com/PeterSYoo"
                target="_blank"
                rel="noreferrer"
              >
                <img src="https://i.imgur.com/MSzHASX.png" alt="github" />
              </a>
            </section>
            <section className="header-icons--linkedin">
              <a
                href="https://www.linkedin.com/in/petersyoo/"
                target="_blank"
                rel="noreferrer"
              >
                <img src="https://i.imgur.com/6qF85FA.png" alt="linkedin" />
              </a>
            </section>
          </section>
        </div>
        <div className="home-intro">
          <div className="home--avatar">
            <img src="https://i.imgur.com/WEtpP6J.png" alt="avatar" />
          </div>
          Hi! I am <font className="home--name">Peter Yoo</font>
        </div>
      </div>
      <section className="home-bottom--wrapper">
        <div className="home--title">a software engineer</div>
      </section>
      <Navbar />
    </motion.div>
  );
};

export default Home;
