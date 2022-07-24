import './App.scss';
import { useLocation } from 'react-router-dom';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import AnimatedRoutes from './AnimatedRoutes';

const App = () => {
  let location = useLocation().pathname;

  return (
    <div className="App">
      <header>
        {location === '/projects' || location === '/' ? null : <Header />}
      </header>
      <main>
        <AnimatedRoutes />
      </main>
      <footer>
        {location === '/projects' || location === '/' ? null : <Navbar />}
      </footer>
    </div>
  );
};

export default App;
