import './App.css';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import mobile_mockup4 from './assets/Images/dc5e88cb-46a8-4831-a621-1bc345e7d101-cover-removebg-preview.png'
import Team_person_1 from './assets/Images/Faiq-Dogar.png'
import Mission_image from './assets/Images/image-box1.jpg'
import Vision_image from './assets/Images/image-box2.jpg'
import Perspective_image from './assets/Images/image-box3.jpg'
import Strategy_image from './assets/Images/image-box4.jpg'
import Team_person_2 from './assets/Images/Ch-Abdullah.png'
import Team_person_3 from './assets/Images/Zohaib-Yasin.png'
import Team_person_4 from './assets/Images/Unknown-users.png'
import Service_CTA from './assets/Images/bg-cta-home2.jpg'
import SingleServiceHero from './assets/Images/s_img_layer_1-1.png';
import Stats_image from './assets/Images/section_01.jpg'
import service_img from './assets/Images/page_title_bg.png';
import about_img from './assets/Images/about-title-img.jpg';
import contact_img from './assets/Images/get-in-touch-title-img.jpg'
import Portfolio_img from './assets/Images/portfolio-list-1-title-img.jpg'

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';

import LandingPage from './pages/Landing/LandingPage';
import About from './pages/About/About';
import Navbar from './Components/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import Services from './pages/Services/Services';
import SingleService from './pages/Services/SingleService';
import Contact from './pages/Contact/Contact';
import ScrollToTop from './Components/ScrollToTop';
import Portfolio from './pages/Portfolio/Portfolio';
import Team from './Components/Team';
import SingleTeam from './pages/Team/SingleTeam';


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
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path='/' element={<LandingPage
          mobile_mockup4={mobile_mockup4}
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
          Mission_image={Mission_image}
          Vision_image={Vision_image}
          Perspective_image={Perspective_image}
          Strategy_image={Strategy_image}
          about_img={about_img}
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
          service_img={service_img}

        />}
        />
        <Route path='/Services/:service' element={<SingleService
          SingleServiceHero={SingleServiceHero}
        />}
        />
        <Route path='/Contact' element={<Contact
          ContactHero={contact_img}
        />}
        />
        <Route path='/Portfolio' element={<Portfolio
          PortfolioHero={Portfolio_img}
        />}
        />
        <Route path='/Team/:team' element={<SingleTeam
          serviceHero={service_img}

          InstagramIcon={InstagramIcon}
          FacebookIcon={FacebookIcon}
          GoogleIcon={GoogleIcon}
        />}
        />
      </Routes>
    </>
  );
}

export default App;