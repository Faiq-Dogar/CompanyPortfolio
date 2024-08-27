import './App.css';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import mobile_mockup4 from './assets/Images/dc5e88cb-46a8-4831-a621-1bc345e7d101-cover-removebg-preview.webp'
import Mission_image from './assets/Images/image-box1.webp'
import Vision_image from './assets/Images/image-box2.webp'
import Perspective_image from './assets/Images/image-box3.webp'
import Strategy_image from './assets/Images/image-box4.webp'
import Team_person_1 from './assets/Images/Faiq-Dogar.webp'
import Team_person_2 from './assets/Images/Ch-Abdullah.webp'
import Team_person_3 from './assets/Images/Zohaib-Yasin.webp'
import Team_person_4 from './assets/Images/Unknown-users.webp'
import contact_img from './assets/Images/get-in-touch-title-img.webp'
import Service_CTA from './assets/Images/bg-cta-home2.webp'
import SingleServiceHero from './assets/Images/s_img_layer_1-1.webp';
import Stats_image from './assets/Images/section_01.webp'
import service_img from './assets/Images/page_title_bg.webp';
import about_img from './assets/Images/about-title-img.webp';
import Portfolio_img from './assets/Images/portfolio-list-1-title-img.webp'

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
import Landing from './pages/Landing/Landing';
import Loader from './Load/Loader';
import Footer from './Components/Footer';

//lines 138
function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const [hoveredAvatar, setHoveredAvatar] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(
    document.body.classList.contains("dark")
  );


  const handleMouseEnter = (avatarKey) => {
    setHoveredAvatar(avatarKey);
  };

  const handleMouseLeave = () => {
    setHoveredAvatar('');
  };

  // if (isLoading) {
  //   return <Loader />;
  // }
  return (
    <>
      <ScrollToTop />
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Routes>
        <Route path='/' element={<LandingPage
          isDarkMode={isDarkMode}
          mobile_mockup4={mobile_mockup4}
          hoveredAvatar={hoveredAvatar}
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
        />}
        />
        <Route path='/About' element={<About
          isDarkMode={isDarkMode}
          Stats_image={Stats_image}
          Mission_image={Mission_image}
          Vision_image={Vision_image}
          Perspective_image={Perspective_image}
          Strategy_image={Strategy_image}
          about_img={about_img}
        />}
        />
        <Route path='/Services' element={<Services
          isDarkMode={isDarkMode}
          hoveredAvatar={hoveredAvatar}
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
          Service_CTA={Service_CTA}
          service_img={service_img}

        />}
        />
        <Route path='/Services/:service' element={<SingleService
          SingleServiceHero={SingleServiceHero}
        />}
        />
        <Route path='/Contact' element={<Contact
          isDarkMode={isDarkMode}
          ContactHero={contact_img}
        />}
        />
        <Route path='/Portfolio' element={<Portfolio
          PortfolioHero={Portfolio_img}
          isDarkMode={isDarkMode}
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
      <Footer/>
    </>
  );
}

export default App;