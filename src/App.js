import './App.scss';
import { useLocation } from 'react-router-dom';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import AnimatedRoutes from './AnimatedRoutes';

const App = () => {
  const location = useLocation();

  return (
    <div className="App">
      <header>{location.pathname === '/projects' ? null : <Header />}</header>
      <main>
        <AnimatedRoutes />
      </main>
      <footer>{location.pathname === '/projects' ? null : <Navbar />}</footer>
    </div>
  );
};

export default App;
