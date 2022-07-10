import './App.scss';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Home from './Pages/Home/Home';

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
      </main>
      <Navbar />
    </div>
  );
}

export default App;
