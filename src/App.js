import './App.css';
import Navbar from './components/Navbar';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import TipCalculator from './components/TipCalculator/TipCalculator';
import WhoPaysTonight from './components/WhoPaysTonight/WhoPaysTonight';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/tax" element={<TipCalculator/>} />
        <Route path="/whopays" element={<WhoPaysTonight />} />
      </Routes>
    </Router>
  );
}

export default App;
