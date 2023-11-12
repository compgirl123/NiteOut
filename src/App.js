import './App.css';
import Navbar from './components/Navbar';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './components/WhoPaysTonight/WhoPaysTonight';
//import TaxCalculatorWidget from './components/TaxCalculatorWidget';
import WhoPaysTonight from './components/WhoPaysTonight/WhoPaysTonight';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/whopays" element={<WhoPaysTonight />} />
      </Routes>
    </Router>
  );
}

export default App;
