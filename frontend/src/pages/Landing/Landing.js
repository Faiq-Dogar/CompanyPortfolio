import React from 'react'
import Projects from '../../Components/Projects';
import Team from '../../Components/Team';
import Testimonials from '../../Components/Testimonials';
import Stats from '../../Components/Stats';
import ContactFooter from '../../Components/ContactFooter';
import HeroSection from '../../Components/HeroSection';
import Services from '../../Components/ServicesSection';
import BackgroundSVG from '../../Components/backgroundSVG';
import { Data } from '../../db/data';

import { useState, useEffect, useCallback } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Landing2 from './Landing2';

const Landing = ({ isDarkMode, mobile_mockup4, hoveredAvatar, handleMouseEnter, handleMouseLeave, Team_person_1, Team_person_2, Team_person_3, Team_person_4 }) => {
    const newList = Data.filter((v) => v.page === '/')
    const [currentIndex, setCurrentIndex] = useState(0);

    const components = [
        // <HeroSection key="hero" HomeHeroSection={HomeHeroSection} mobile_mockup4={mobile_mockup4} isDarkMode={isDarkMode} />,
        // <Stats key="stats" isDarkMode={isDarkMode} HomeStatsSection1={HomeStatsSection1} />,
        // <Services key="services" HomeServicesCircles={HomeServicesCircles} HomeServicesdis={HomeServicesdis} hoveredAvatar={hoveredAvatar} handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave} isDarkMode={isDarkMode}/>,
        // <Projects key="projects" isDarkMode={isDarkMode} HomeProjects={HomeProjects}/>,
        // <Team key="team" HomeTeamMembers={HomeTeamMembers} Team_person_1={Team_person_1} Team_person_2={Team_person_2} Team_person_3={Team_person_3} Team_person_4={Team_person_4} isDarkMode={isDarkMode}/>,
        // <Testimonials key="testimonials" HomeTestimoials={HomeTestimoials} isDarkMode={isDarkMode}/>,
        // <ContactFooter key="contactfooter" />
    ];

    // const debounce = (func, delay) => {
    //     let timer;
    //     return function (...args) {
    //         if (timer) clearTimeout(timer);
    //         timer = setTimeout(() => {
    //             func.apply(this, args);
    //         }, delay);
    //     };
    // };

    // const handleWheel = (event) => {
    //     if ((event.deltaY > 0) || (event.deltaX > 0)) {
    //         // Scrolling down
    //         setCurrentIndex(prevIndex => Math.min(prevIndex + 1, components.length - 1));
    //     } else {
    //         // Scrolling up
    //         setCurrentIndex(prevIndex => Math.max(prevIndex - 1, 0));
    //     }
    // };

    // const debouncedHandleWheel = useCallback(debounce(handleWheel, 100), []);

    // useEffect(() => {
    //     AOS.init();
    //     window.addEventListener('wheel', debouncedHandleWheel);

    //     return () => {
    //         window.removeEventListener('wheel', debouncedHandleWheel);
    //     };
    // }, [debouncedHandleWheel]);

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
                        <Landing2 hoveredAvatar={hoveredAvatar} handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave} Team_person_1={Team_person_1} Team_person_2={Team_person_2} Team_person_3={Team_person_3} Team_person_4={Team_person_4} isDarkMode={isDarkMode} HomeHeroSection={HomeHeroSection} mobile_mockup4={mobile_mockup4} HomeStatsSection1={HomeStatsSection1} HomeServicesCircles={HomeServicesCircles} HomeServicesdis={HomeServicesdis} HomeProjects={HomeProjects} HomeTeamSection={HomeTeamSection} HomeTeamMembers={HomeTeamMembers} HomeTestimoials={HomeTestimoials} />
                            {/* <div className="App">
                                <BackgroundSVG class_name={"upper"} />
                                {components[currentIndex]}
                                {/* <BackgroundSVG class_name={"lower"}/> */}
                            {/* </div> */}
                        </>
                    )
                )
            }
        </>
    )
}

export default Landing
