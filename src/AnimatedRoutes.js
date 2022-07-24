import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Projects from './Pages/Projects/Projects';
import ProjectsScroll from './Pages/Projects/ProjectsScroll';

import { AnimatePresence } from 'framer-motion';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects-scroll" element={<ProjectsScroll />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
