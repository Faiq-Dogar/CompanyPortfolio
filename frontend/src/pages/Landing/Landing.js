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

const Landing = ({ mobile_mockup4, SERVICES_DATA, hoveredAvatar, handleMouseEnter, handleMouseLeave, Team_person_1, Team_person_2, Team_person_3, Team_person_4, Stats_image }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const components = [
        <HeroSection key="hero" mobile_mockup4={mobile_mockup4}/>,
        <Stats key="stats" Stats_image={Stats_image} />,
        <Services key="services" SERVICES_DATA={SERVICES_DATA} hoveredAvatar={hoveredAvatar} handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave} />,
        <Projects key="projects" />,
        <Team key="team" Team_person_1={Team_person_1} Team_person_2={Team_person_2} Team_person_3={Team_person_3} Team_person_4={Team_person_4} />,
        <Testimonials key="testimonials" />,
        <ContactFooter key="contactfooter" />
    ];

    const debounce = (func, delay) => {
        let timer;
        return function (...args) {
            if (timer) clearTimeout(timer);
            timer = setTimeout(() => {
                func.apply(this, args);
            }, delay);
        };
    };

    const handleWheel = (event) => {
        if ((event.deltaY > 0) || (event.deltaX > 0)) {
            // Scrolling down
            setCurrentIndex(prevIndex => Math.min(prevIndex + 1, components.length - 1));
        } else {
            // Scrolling up
            setCurrentIndex(prevIndex => Math.max(prevIndex - 1, 0));
        }
    };

    const debouncedHandleWheel = useCallback(debounce(handleWheel, 100), []);

    useEffect(() => {
        AOS.init();
        window.addEventListener('wheel', debouncedHandleWheel);

        return () => {
            window.removeEventListener('wheel', debouncedHandleWheel);
        };
    }, [debouncedHandleWheel]);

    return (
        <div className="App">
            <BackgroundSVG class_name={"upper"} />
            {components[currentIndex]}
            {/* <BackgroundSVG class_name={"lower"}/> */}
        </div>
    )
}

export default Landing
