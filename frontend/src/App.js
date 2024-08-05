import './App.css';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Team_person_1 from './assets/Images/Faiq-Dogar.png'
import Team_person_2 from './assets/Images/Ch-Abdullah.png'
import Team_person_3 from './assets/Images/Zohaib-Yasin.png'
import Team_person_4 from './assets/Images/Unknown-users.png'
import Service_CTA from './assets/Images/bg-cta-home2.jpg'
import SingleServiceHero from './assets/Images/s_img_layer_1-1.png';
import Stats_image from './assets/Images/section_01.jpg'
import Landing from './pages/Landing';
import About from './pages/About/About';
import Navbar from './Components/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import Services from './pages/Services/Services';
import SingleService from './pages/Services/SingleService';


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
        <Route path='/' element={<Landing
          SERVICES_DATA={SERVICES_DATA}
          hoveredAvatar={hoveredAvatar}
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
          Team_person_1={Team_person_1}
          Team_person_2={Team_person_2}
          Team_person_3={Team_person_3}
          Team_person_4={Team_person_4}
          Stats_image={Stats_image}
        />}
        />
        <Route path='/About' element={<About
          Stats_image={Stats_image}
        />}
        />
        <Route path='/Services' element={<Services
          SERVICES_DATA={SERVICES_DATA}
          hoveredAvatar={hoveredAvatar}
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}

          Team_person_1={Team_person_1}
          Team_person_2={Team_person_2}
          Team_person_3={Team_person_3}
          Team_person_4={Team_person_4}

          Service_CTA={Service_CTA}
        />}
        />
        <Route path='/Services:service' element={<SingleService
          SingleServiceHero={SingleServiceHero}
        />} />
      </Routes>
    </>
  );
}

export default App;