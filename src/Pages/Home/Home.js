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
            <Link to="/">
              {/* <img src="https://i.imgur.com/IMEfuBC.png" alt="logo" /> */}
              <font className="header-logo--type">PY</font>
            </Link>
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
            <div className="star-1">
              <svg>
                <g>
                  <path
                    class="stars"
                    fill="#FFF"
                    d="M112.456 363.093c-.056 7.866-6.478 14.197-14.344 14.142 7.866.056 14.198 6.48 14.142 14.345.056-7.866 6.48-14.198 14.345-14.142-7.868-.057-14.2-6.48-14.144-14.345zM432.436 274.908c-.056 7.866-6.478 14.198-14.344 14.142 7.866.057 14.197 6.48 14.142 14.345.056-7.866 6.48-14.197 14.345-14.142-7.868-.056-14.2-6.48-14.144-14.345zM159.75 58.352c-.12 16.537-13.62 29.848-30.157 29.73 16.537.118 29.848 13.62 29.73 30.156.118-16.537 13.62-29.848 30.156-29.73-16.54-.117-29.85-13.62-29.73-30.156z"
                  />
                </g>
              </svg>
            </div>
            <div className="star-2">
              <svg>
                <g>
                  <path
                    class="stars"
                    fill="#FFF"
                    d="M112.456 363.093c-.056 7.866-6.478 14.197-14.344 14.142 7.866.056 14.198 6.48 14.142 14.345.056-7.866 6.48-14.198 14.345-14.142-7.868-.057-14.2-6.48-14.144-14.345zM432.436 274.908c-.056 7.866-6.478 14.198-14.344 14.142 7.866.057 14.197 6.48 14.142 14.345.056-7.866 6.48-14.197 14.345-14.142-7.868-.056-14.2-6.48-14.144-14.345zM159.75 58.352c-.12 16.537-13.62 29.848-30.157 29.73 16.537.118 29.848 13.62 29.73 30.156.118-16.537 13.62-29.848 30.156-29.73-16.54-.117-29.85-13.62-29.73-30.156z"
                  />
                </g>
              </svg>
            </div>
            <img src="https://i.imgur.com/WEtpP6J.png" alt="avatar" />
            <div className="star-3">
              <svg>
                <g>
                  <path
                    class="stars"
                    fill="#FFF"
                    d="M112.456 363.093c-.056 7.866-6.478 14.197-14.344 14.142 7.866.056 14.198 6.48 14.142 14.345.056-7.866 6.48-14.198 14.345-14.142-7.868-.057-14.2-6.48-14.144-14.345zM432.436 274.908c-.056 7.866-6.478 14.198-14.344 14.142 7.866.057 14.197 6.48 14.142 14.345.056-7.866 6.48-14.197 14.345-14.142-7.868-.056-14.2-6.48-14.144-14.345zM159.75 58.352c-.12 16.537-13.62 29.848-30.157 29.73 16.537.118 29.848 13.62 29.73 30.156.118-16.537 13.62-29.848 30.156-29.73-16.54-.117-29.85-13.62-29.73-30.156z"
                  />
                </g>
              </svg>
            </div>
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
