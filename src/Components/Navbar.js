import { Link } from 'react-router-dom';

const Navbar = () => {
  if (window.location.pathname === '/projects-scroll') return null;

  return (
    <div className="nav">
      <Link to="/about">
        <section className="nav-links--about">ABOUT</section>
      </Link>
      <Link to="/projects">
        <section className="nav-links--projects">PROJECTS</section>
      </Link>
      <Link to="/contact">
        <section className="nav-links--contact">CONTACT</section>
      </Link>
      <section className="nav-links--resume">RESUME</section>
    </div>
  );
};

export default Navbar;
