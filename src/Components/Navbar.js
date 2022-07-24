import { Link } from 'react-router-dom';

const Navbar = () => {
  if (window.location.pathname === '/projects-scroll') return null;

  return (
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
  );
};

export default Navbar;
