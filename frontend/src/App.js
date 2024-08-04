import './App.css';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Landing from './pages/Landing';
import About from './pages/About/About';
import Navbar from './Components/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import Services from './pages/Services/Services';


function App() {

  useEffect(() => {
    AOS.init();
  }, []);

  const SERVICES_DATA = {
    'Android App Development': "Portrait mode solutions for mobile and web applications.",
    'Web App Development': "Advanced computer solutions and hardware integration.",
    'Ui/Ux': "Shortcut app development for improved user efficiency.",
    'Desktop App Development': "Desktop and Mac applications tailored to your needs.",
    'Search Engine Optimization': "Grid view designs and layouts for optimized user experience."
  };

  const [hoveredAvatar, setHoveredAvatar] = useState('');

  const handleMouseEnter = (avatarKey) => {
    setHoveredAvatar(avatarKey);
  };

  const handleMouseLeave = () => {
    setHoveredAvatar('');
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Landing SERVICES_DATA={SERVICES_DATA} hoveredAvatar={hoveredAvatar} handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave}/>} />
        <Route path='/About' element={<About />} />
        <Route path='/Services' element={<Services SERVICES_DATA={SERVICES_DATA} hoveredAvatar={hoveredAvatar} handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave}/>} />
      </Routes>
    </>
  );
}

export default App;