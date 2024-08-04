import './App.css';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Landing from './pages/Landing';
import About from './pages/About/About';
import Navbar from './Components/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Services from './pages/Services/Services';


function App() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/About' element={<About />} />
        <Route path='/Services' element={<Services />} />
      </Routes>
    </>
  );
}

export default App;