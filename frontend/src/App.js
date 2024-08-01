import './App.css';
import HeroSection from './Components/HeroSection';
import About from './Components/About';
import Services from './Components/Services';
import { useState, useEffect, useCallback } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './Components/Navbar';
import BackgroundSVG from './Components/backgroundSVG';
import Projects from './Components/Projects';
import Team from './Components/Team';
import Testimonials from './Components/Testimonials';
import Stats from './Components/Stats';
import ContactFooter from './Components/ContactFooter';


function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const components = [
    <HeroSection key="hero" />,
    <Stats key="stats" />,
    <Services key="services" />,
    <Projects key="projects" />,
    <Team key="team" />,
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
      <Navbar />
      <BackgroundSVG class_name={"upper"} />
      {components[currentIndex]}
      {/* <BackgroundSVG class_name={"lower"}/> */}
    </div>
  );
}

export default App;

// import Team from './Components/Team';
// import Testimonials from './Components/Testimonials';
