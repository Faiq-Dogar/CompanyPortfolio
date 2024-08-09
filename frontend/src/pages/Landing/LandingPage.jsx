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


const LandingPage = ({ isDarkMode, mobile_mockup4, SERVICES_DATA, hoveredAvatar, handleMouseEnter, handleMouseLeave, Team_person_1, Team_person_2, Team_person_3, Team_person_4, Stats_image }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="App">
      <BackgroundSVG class_name={"upper"} />
      <HeroSection key="hero" mobile_mockup4={mobile_mockup4} isDarkMode={isDarkMode}/>,
      <Stats key="stats" Stats_image={Stats_image} />,
      <Services key="services" SERVICES_DATA={SERVICES_DATA} hoveredAvatar={hoveredAvatar} handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave} />,
      <Projects key="projects" />,
      <Team key="team" Team_person_1={Team_person_1} Team_person_2={Team_person_2} Team_person_3={Team_person_3} Team_person_4={Team_person_4} />,
      <Testimonials key="testimonials" />,
      {/* <ContactFooter key="contactfooter" /> */}
    </div>
  )
}

export default LandingPage
