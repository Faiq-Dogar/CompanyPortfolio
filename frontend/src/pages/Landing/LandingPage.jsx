import React from 'react'
import Testimonials from '../../Components/Testimonials';
import Stats from '../../Components/Stats';
import Services from '../../Components/ServicesSection';
import BackgroundSVG from '../../Components/backgroundSVG';
import { Data } from '../../db/data';
import PicLanding from './PicLanding';
import MArqueee from '../../Components/MArqueee';
import OurDeatailedServices from '../../Components/OurDeatailedServices';

const LandingPage = ({ isDarkMode, mobile_mockup4, hoveredAvatar, handleMouseEnter, handleMouseLeave }) => {

  // path check krna he
  const newList = Data.filter((v) => v.page === '/')
  
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
                <OurDeatailedServices isDarkMode={isDarkMode}/>
                <Testimonials key="testimonials" HomeTestimoials={HomeTestimoials} isDarkMode={isDarkMode} />
              </div>
            </>
          )
        )
      }
    </>
  )
}

export default LandingPage
