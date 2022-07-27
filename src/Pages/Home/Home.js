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
            <div className="header-logo--icon">
              <Link to="/">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="header-logo--btn"
                >
                  <font className="header-logo--text">PY</font>
                </motion.button>
              </Link>
            </div>
          </section>

          <section className="header-icons">
            <section className="header-icons--github">
              <a
                href="https://github.com/PeterSYoo"
                target="_blank"
                rel="noreferrer"
              >
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  src="https://i.imgur.com/MSzHASX.png"
                  alt="github"
                  onMouseOver={(e) =>
                    (e.currentTarget.src = 'https://i.imgur.com/c3qdUcC.png')
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.src = 'https://i.imgur.com/MSzHASX.png')
                  }
                />
              </a>
            </section>
            <section className="header-icons--linkedin">
              <a
                href="https://www.linkedin.com/in/petersyoo/"
                target="_blank"
                rel="noreferrer"
              >
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  src="https://i.imgur.com/6qF85FA.png"
                  alt="linkedin"
                  onMouseOver={(e) =>
                    (e.currentTarget.src = 'https://i.imgur.com/Jc11Ehk.png')
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.src = 'https://i.imgur.com/6qF85FA.png')
                  }
                />
              </a>
            </section>
          </section>
        </div>
        <div className="home-intro">
          {/* <div className="home--avatar-bg">
            <img src="https://i.imgur.com/vnh4K8V.png" alt="avatarbg" />
          </div> */}
          <div className="home--avatar">
            <Link to="/about">
              <motion.img
                src="https://i.imgur.com/WEtpP6J.png"
                alt="avatar"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              />
            </Link>
          </div>
          <section className="home--intro-text">
            <img src="https://i.imgur.com/ItFsv3o.png" alt="name" />
            <div className="home--intro-title">
              <font>&nbsp;|&nbsp;&nbsp;&nbsp;software engineer</font>
            </div>
          </section>
        </div>
      </div>
      <div className="home-hr"></div>
      <div className="home-nav">
        <Link to="/about">
          <motion.section
            className="home-links--about"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            ABOUT
          </motion.section>
        </Link>
        <Link to="/projects">
          <motion.section
            className="home-links--projects"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            PROJECTS
          </motion.section>
        </Link>
        <Link to="/contact">
          <motion.section
            className="home-links--contact"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            CONTACT
          </motion.section>
        </Link>
        <motion.section
          className="home-links--resume"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          RESUME
        </motion.section>
      </div>
    </motion.div>
  );
};

export default Home;
