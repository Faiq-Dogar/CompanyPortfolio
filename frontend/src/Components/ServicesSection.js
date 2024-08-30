import { Box, Container, Grid } from '@mui/material'
import PageNumber from './PageNumber';
import PageIcons from './PageIcons'
import React, { useState } from 'react'
import ServicesCircle from './ServicesCircle';
import Servicesdisc from './Servicesdisc';

const Services = ({ HomeServicesCircles, HomeServicesdis, hoveredAvatar, handleMouseEnter, handleMouseLeave, isDarkMode }) => {

    return (
        <Box sx={{
            bgcolor: '#5B5CAC'
        }}
        >
            <Container maxWidth='xl'>
                <Grid container spacing={15} marginTop={"8%"}>
                    <Grid item xs={11} md={6}>
                        <Box sx={
                            {
                                display: 'flex',
                                justifyContent: 'center'
                            }
                        }>

                            <ServicesCircle ServicesCircles={HomeServicesCircles} hoveredAvatar={hoveredAvatar} handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave} isDarkMode={isDarkMode} circleColor={'#351A5F'} textColor={'white'}/>
                        </Box>
                    </Grid>
                    <Grid item xs={11} md={6}>
                        <Servicesdisc Servicesdis={HomeServicesdis} isDarkMode={isDarkMode} textColor={'#ffffff'}/>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Services
