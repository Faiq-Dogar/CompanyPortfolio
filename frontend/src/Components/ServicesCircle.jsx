import React, { useState } from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import StayCurrentPortraitOutlinedIcon from '@mui/icons-material/StayCurrentPortraitOutlined';
import ComputerOutlinedIcon from '@mui/icons-material/ComputerOutlined';
import AppShortcutOutlinedIcon from '@mui/icons-material/AppShortcutOutlined';
import DesktopMacOutlinedIcon from '@mui/icons-material/DesktopMacOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';

const ServicesCircle = ({ SERVICES_DATA }) => {
  const [hoveredAvatar, setHoveredAvatar] = useState('Android App Development');

  const handleMouseEnter = (service) => {
    setHoveredAvatar(service);
  };

  const handleMouseLeave = () => {
  };

  return (
    <Box
      data-aos="fade-up"
      sx={{
        mx: '12%',
        width: '400px',
        height: '400px',
        border: '1px solid grey',
        borderRadius: '50%',
        position: 'relative'
      }}
    >
      <Avatar
        onMouseEnter={() => handleMouseEnter('Android App Development')}
        onMouseLeave={handleMouseLeave}
        sx={{
          padding: '5%',
          position: 'absolute',
          top: '-9%',
          right: '39%',
          bgcolor: hoveredAvatar === 'Android App Development' ? 'white' : '#6A4BC4',
          color: hoveredAvatar === 'Android App Development' ? '#6A4BC4' : 'white',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
          transition: 'background-color 0.3s, color 0.3s',
          '&:hover': {
            backgroundColor: 'white',
            color: '#6A4BC4'
          }
        }}
      >
        <StayCurrentPortraitOutlinedIcon fontSize='large' />
      </Avatar>
      <Avatar
        onMouseEnter={() => handleMouseEnter('Web App Development')}
        onMouseLeave={handleMouseLeave}
        sx={{
          padding: '5%',
          position: 'absolute',
          top: '30%',
          right: '-8%',
          bgcolor: hoveredAvatar === 'Web App Development' ? 'white' : '#6A4BC4',
          color: hoveredAvatar === 'Web App Development' ? '#6A4BC4' : 'white',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
          transition: 'background-color 0.3s, color 0.3s',
          '&:hover': {
            backgroundColor: 'white',
            color: '#6A4BC4'
          }
        }}
      >
        <ComputerOutlinedIcon fontSize='large' />
      </Avatar>
      <Avatar
        onMouseEnter={() => handleMouseEnter('Ui/Ux')}
        onMouseLeave={handleMouseLeave}
        sx={{
          padding: '5%',
          position: 'absolute',
          top: '78%',
          right: '7%',
          bgcolor: hoveredAvatar === 'Ui/Ux' ? 'white' : '#6A4BC4',
          color: hoveredAvatar === 'Ui/Ux' ? '#6A4BC4' : 'white',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
          transition: 'background-color 0.3s, color 0.3s',
          '&:hover': {
            backgroundColor: 'white',
            color: '#6A4BC4'
          }
        }}
      >
        <AppShortcutOutlinedIcon fontSize='large' />
      </Avatar>
      <Avatar
        onMouseEnter={() => handleMouseEnter('Desktop App Development')}
        onMouseLeave={handleMouseLeave}
        sx={{
          padding: '5%',
          position: 'absolute',
          top: '78%',
          left: '7%',
          bgcolor: hoveredAvatar === 'Desktop App Development' ? 'white' : '#6A4BC4',
          color: hoveredAvatar === 'Desktop App Development' ? '#6A4BC4' : 'white',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
          transition: 'background-color 0.3s, color 0.3s',
          '&:hover': {
            backgroundColor: 'white',
            color: '#6A4BC4'
          }
        }}
      >
        <DesktopMacOutlinedIcon fontSize='large' />
      </Avatar>
      <Avatar
        onMouseEnter={() => handleMouseEnter('Search Engine Optimization')}
        onMouseLeave={handleMouseLeave}
        sx={{
          padding: '5%',
          position: 'absolute',
          top: '30%',
          left: '-8%',
          bgcolor: hoveredAvatar === 'Search Engine Optimization' ? 'white' : '#6A4BC4',
          color: hoveredAvatar === 'Search Engine Optimization' ? '#6A4BC4' : 'white',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
          transition: 'background-color 0.3s, color 0.3s',
          '&:hover': {
            backgroundColor: 'white',
            color: '#6A4BC4'
          }
        }}
      >
        <GridViewOutlinedIcon fontSize='large' />
      </Avatar>
      <Box sx={{ marginY: '40%' }}>
        <Typography variant='h5' align='center' color={'#351A5F'} fontWeight={'bolder'} mb={'3%'}>
          {hoveredAvatar}
        </Typography>
        <Typography data-aos="fade-up" variant='subtitle1' align='center' color={"primary"}>
          {SERVICES_DATA[hoveredAvatar] || 'Hover over the circles'}
        </Typography>
      </Box>
    </Box>
  );
};

export default ServicesCircle;
