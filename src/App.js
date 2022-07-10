import './App.scss';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Projects from './Pages/Projects/Projects';
import ProjectsScroll from './Pages/Projects/ProjectsScroll';

const App = () => {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname === '/projects' || '/projects-scroll' ? null : <Header />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} exact/>
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects-scroll" element={<ProjectsScroll />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      {location.pathname === '/projects' || '/projects-scroll' ? null : <Navbar />}
    </div>
  );
}

export default App;
