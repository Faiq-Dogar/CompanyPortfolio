import { Avatar, Box, Typography } from '@mui/material'
import StayCurrentPortraitOutlinedIcon from '@mui/icons-material/StayCurrentPortraitOutlined';
import ComputerOutlinedIcon from '@mui/icons-material/ComputerOutlined';
import AppShortcutOutlinedIcon from '@mui/icons-material/AppShortcutOutlined';
import DesktopMacOutlinedIcon from '@mui/icons-material/DesktopMacOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';

import React from 'react'

const ServicesCircle = ({SERVICES_DATA, hoveredAvatar, handleMouseEnter, handleMouseLeave}) => {
  return (
    <Box data-aos="fade-up" sx={{ mx: '12%', width: "400px", height: "400px", border: "1px solid grey", borderRadius: "50%", position: "relative" }}>
    <Avatar
        onMouseEnter={() => handleMouseEnter('Android App Development')}
        sx={{
            padding: "5%",
            position: 'absolute',
            top: '-9%',
            right: '39%',
            bgcolor: '#6A4BC4',
            color: 'white',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
            transition: 'background-color 0.3s, color 0.3s',
            '&:hover': {
                backgroundColor: 'white',
                color: '#6A4BC4',
            }
        }}>
        <StayCurrentPortraitOutlinedIcon fontSize='large' />
    </Avatar>
    <Avatar
        onMouseEnter={() => handleMouseEnter('Web App Development')}
        sx={{
            padding: "5%",
            position: 'absolute',
            top: '30%',
            right: '-8%',
            bgcolor: '#6A4BC4',
            color: 'white',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
            transition: 'background-color 0.3s, color 0.3s',
            '&:hover': {
                backgroundColor: 'white',
                color: '#6A4BC4',
            }
        }}>
        <ComputerOutlinedIcon fontSize='large' />
    </Avatar>
    <Avatar
        onMouseEnter={() => handleMouseEnter('Ui/Ux')}
        sx={{
            padding: "5%",
            position: 'absolute',
            top: '78%',
            right: '7%',
            bgcolor: '#6A4BC4',
            color: 'white',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
            transition: 'background-color 0.3s, color 0.3s',
            '&:hover': {
                backgroundColor: 'white',
                color: '#6A4BC4',
            }
        }}>
        <AppShortcutOutlinedIcon fontSize='large' />
    </Avatar>
    <Avatar
    onMouseEnter={() => handleMouseEnter('Desktop App Development')}
        sx={{
            padding: "5%",
            position: 'absolute',
            top: '78%',
            left: '7%',
            bgcolor: '#6A4BC4',
            color: 'white',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
            transition: 'background-color 0.3s, color 0.3s',
            '&:hover': {
                backgroundColor: 'white',
                color: '#6A4BC4',
            }
        }}>
        <DesktopMacOutlinedIcon fontSize='large' />
    </Avatar>
    <Avatar
    onMouseEnter={() => handleMouseEnter('Search Engine Optimization')}
        sx={{
            padding: "5%",
            position: 'absolute',
            top: '30%',
            left: '-8%',
            bgcolor: '#6A4BC4',
            color: 'white',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
            transition: 'background-color 0.3s, color 0.3s',
            '&:hover': {
                backgroundColor: 'white',
                color: '#6A4BC4',
            }
        }}>
        <GridViewOutlinedIcon fontSize='large' />
    </Avatar>
    <Box sx={{ marginY: '40%' }}>
        <Typography variant='h5' align='center' color={"#351A5F"} fontWeight={"bolder"} mb={'3%'}>
            {hoveredAvatar}
        </Typography>
        <Typography data-aos="fade-up" variant='subtitle1' align='center' color={"primary"} >
            {hoveredAvatar ? SERVICES_DATA[hoveredAvatar] : 'Hover over the circles'}
        </Typography>
    </Box>
</Box>
  )
}

export default ServicesCircle
