import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar1 from './components/navbar.jsx';
import Home from './components/home.jsx';
import Footer from './components/footer.jsx';
import Tnt from './components/tnt.jsx';
import Espn from './components/espn.jsx';

function App() {
  return (
    <>
    <Navbar1/>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tnt" element={<Tnt/>}/>
        <Route path="/espn" element={<Espn/>}/>
      </Routes>
    </Router>
    <Footer/>
    </>
  )
}

export default App
