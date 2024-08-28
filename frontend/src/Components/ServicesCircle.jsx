import React, { useState } from 'react';
// import { Slide } from "react-awesome-reveal";
import { Avatar, Box, Typography } from '@mui/material';

const ServicesCircle = ({ ServicesCircles, isDarkMode }) => {
  const [hoveredService, setHoveredService] = useState('');

  const handleMouseEnter = (service) => {
    setHoveredService(service);
  };

  const handleMouseLeave = () => {
    // setHoveredService(null);
  };

  return (
    // <Slide direction='left'>
      <Box
        sx={{
          
          mx: '12%',
          width: '450px',
          height: '450px',
          border: '1px solid grey',
          borderRadius: '50%',
          position: 'relative'
        }}
      >
        {ServicesCircles.map((service, index) => (
          <Avatar
            key={service.id}
            onMouseEnter={() => handleMouseEnter(service)}
            onMouseLeave={handleMouseLeave}
            sx={{
              padding: '10%',
              position: 'absolute',
              top: `${service.top}%`,
              right: `${service.right}%`,
              left: `${service.left}%`,
              bgcolor: hoveredService?.name === service.name ? 'white' : '#6A4BC4',
              color: hoveredService?.name === service.name ? '#6A4BC4' : 'white',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
              transition: 'background-color 0.3s, color 0.3s',
              '&:hover': {
                backgroundColor: 'white',
                color: '#6A4BC4'
              }
            }}
          >
            {service.icon}
          </Avatar>
        ))}
        <Box sx={{ marginY: '40%' }}>
          <Typography variant='h5' align='center' color={isDarkMode ? "#5EC3EB" : "#351A5F"} fontWeight={'bolder'} mb={'3%'}>
            {hoveredService ? hoveredService.name : 'DevBerry'}
          </Typography>
          <Typography
            variant='subtitle1' align='center' color={"primary"}>
            {hoveredService ? hoveredService.dis : 'Hover over the circles'}
          </Typography>
        </Box>
      </Box>
    // </Slide>
  );
};

export default ServicesCircle;
