import React from 'react'
import Projects from '../../Components/Projects';
import Team from '../../Components/Team';
import Testimonials from '../../Components/Testimonials';
import Stats from '../../Components/Stats';
import ContactFooter from '../../Components/ContactFooter';
import HeroSection from '../../Components/HeroSection';
import Services from '../../Components/ServicesSection';
import BackgroundSVG from '../../Components/backgroundSVG';

import { useState, useEffect, useCallback } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLocation } from 'react-router-dom';
import { Data } from '../../db/data';
import VideoHeroSection from '../../Components/VideoHeroSection';
import Hexagolsection from '../../Components/HexagonalSection';
import PicLanding from './PicLanding';
import MArqueee from '../../Components/MArqueee';
import OurDeatailedServices from '../../Components/OurDeatailedServices';

//lines 63
const LandingPage = ({ isDarkMode, mobile_mockup4, hoveredAvatar, handleMouseEnter, handleMouseLeave }) => {
  const [isLandingVisible, setIsLandingVisible] = useState(true);

  // path check krna he 
  const newList = Data.filter((v) => v.page === '/')
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLandingVisible(false);
    }, 5500);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {
        newList.map(
          ({
            HomeHeroSection,
            HomeMarquee,
            HomeStatsSection1,
            HomeServicesCircles,
            HomeServicesdis,
            HomeProjects,
            HomeTeamSection,
            HomeTeamMembers,
            HomeTestimoials
          }) => (
            <>

              <div className="App">
                <BackgroundSVG class_name={"upper"} />
                <PicLanding key="hero" HomeHeroSection={HomeHeroSection} mobile_mockup4={mobile_mockup4} isDarkMode={isDarkMode} />
                <MArqueee isDarkMode={isDarkMode} HomeMarquee={HomeMarquee} />
                <Stats key="stats" isDarkMode={isDarkMode} HomeStatsSection1={HomeStatsSection1} />
                <Services key="services" HomeServicesCircles={HomeServicesCircles} HomeServicesdis={HomeServicesdis} hoveredAvatar={hoveredAvatar} handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave} isDarkMode={isDarkMode} />
                <Hexagolsection isDarkMode={isDarkMode} />
                <OurDeatailedServices isDarkMode={isDarkMode}/>
                <Testimonials key="testimonials" HomeTestimoials={HomeTestimoials} isDarkMode={isDarkMode} />
                {/* <ContactFooter key="contactfooter" /> */}
              </div>
            </>
          )
        )
      }
    </>
  )
}

export default LandingPage
