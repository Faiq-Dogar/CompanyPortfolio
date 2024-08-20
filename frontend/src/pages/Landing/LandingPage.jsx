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

//lines 63
const LandingPage = ({ isDarkMode, mobile_mockup4, hoveredAvatar, handleMouseEnter, handleMouseLeave }) => {
  // path check krna he 
  // path check krna he 
  // path check krna he 
  // path check krna he 
  // path check krna he 

  const newList = Data.filter((v) => v.page === '/')
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      {
        newList.map(
          ({
            HomeHeroSection,
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
                <VideoHeroSection key="hero" HomeHeroSection={HomeHeroSection} mobile_mockup4={mobile_mockup4} isDarkMode={isDarkMode} />,
                <Stats key="stats" isDarkMode={isDarkMode} HomeStatsSection1={HomeStatsSection1} />,
                <Services key="services" HomeServicesCircles={HomeServicesCircles} HomeServicesdis={HomeServicesdis} hoveredAvatar={hoveredAvatar} handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave} isDarkMode={isDarkMode} />,
                <Hexagolsection/>
                {/* <Projects key="projects" isDarkMode={isDarkMode} HomeProjects={HomeProjects}/>, */}
                <Team key="team" HomeTeamMembers={HomeTeamMembers} isDarkMode={isDarkMode} />,
                <Testimonials key="testimonials" HomeTestimoials={HomeTestimoials} isDarkMode={isDarkMode} />,
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
