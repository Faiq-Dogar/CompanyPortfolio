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

//lines 63
const LandingPage = ({ isDarkMode, mobile_mockup4, SERVICES_DATA, hoveredAvatar, handleMouseEnter, handleMouseLeave, Team_person_1, Team_person_2, Team_person_3, Team_person_4}) => {
  // path check krna he 
  // path check krna he 
  // path check krna he 
  // path check krna he 
  // path check krna he 

  const newList = Data.filter((v) => v.page === '/')
  console.log('page data: ', newList);
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
            HomeTeamSection,
            HomeTeamMembers,
            HomeTestimoials
          }) => (
            <>

              <div className="App">
                <BackgroundSVG class_name={"upper"} />
                <HeroSection key="hero" HomeHeroSection={HomeHeroSection} mobile_mockup4={mobile_mockup4} isDarkMode={isDarkMode} />,
                <Stats key="stats" HomeStatsSection1={HomeStatsSection1}/>,
                <Services key="services" HomeServicesCircles={HomeServicesCircles} HomeServicesdis={HomeServicesdis} hoveredAvatar={hoveredAvatar} handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave} />,
                <Projects key="projects" />,
                <Team key="team" HomeTeamMembers={HomeTeamMembers} Team_person_1={Team_person_1} Team_person_2={Team_person_2} Team_person_3={Team_person_3} Team_person_4={Team_person_4} />,
                <Testimonials key="testimonials" />,
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
