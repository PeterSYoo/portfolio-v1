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
      <header>
        {location.pathname === '/projects' ? null : <Header />}
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} exact/>
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects-scroll" element={<ProjectsScroll />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <footer>
        {location.pathname === '/projects' ? null : <Navbar />}
      </footer>
    </div>
  );
}

export default App;
