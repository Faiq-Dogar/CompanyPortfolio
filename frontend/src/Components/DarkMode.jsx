import React, { useEffect, useState } from 'react';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

const Darkmode = ({isDarkMode, setIsDarkMode}) => {

    const switchTheme = () => {
        document.body.classList.toggle("dark");
        document.body.classList.toggle("light");
        setIsDarkMode(!isDarkMode);
    };

    useEffect(() => {
        document.body.classList.add(isDarkMode ? "dark" : "light");
        document.body.classList.remove(isDarkMode ? "light" : "dark");
    }, [isDarkMode]);

    return (
        <button id="darkmode" onClick={switchTheme}>
            <LightModeIcon sx={{ color: "#351A5F" }}  className="light-icon" style={{ display: isDarkMode ? 'none' : 'block' }} />
            <DarkModeIcon sx={{ color: "#5EC3EB" }}  className="dark-icon" style={{ display: isDarkMode ? 'block' : 'none' }} />
        </button>
    );
};

export default Darkmode;
