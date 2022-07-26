import './App.scss';
import { useLocation } from 'react-router-dom';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import AnimatedRoutes from './AnimatedRoutes';

const App = () => {
  let location = useLocation().pathname;

  return (
    <div className="App">
      <main>
        <AnimatedRoutes />
      </main>
    </div>
  );
};

export default App;
