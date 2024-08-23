import React, { useEffect, useState } from 'react'
import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material';
import { Slide } from "react-awesome-reveal";
// import bg_img from './../../assets/Images/Untitled design (2).png'
import bg_img from './../../assets/Images/herobg.png'
import './../../Load/load.css'

const PicLanding = ({ HomeHeroSection, mobile_mockup4, isDarkMode }) => {
    return (
        <>
            {
                HomeHeroSection !== undefined &&
                HomeHeroSection.map((data, key) => (
                    <div
                        // data-aos="fade-up"
                        key={key} className='video-bg'>
                        <img src={bg_img} alt='DevBerry' id='background-video' />
                        <Container maxWidth='xl'>
                            <Slide direction="up">
                                <Box
                                    // sx={
                                    //     {
                                    //         display: 'flex',
                                    //         justifyContent: 'center',
                                    //     }}
                                >
                                    <Box sx={
                                        {
                                            width: '60%',
                                        }
                                    }>
                                        <Typography variant='h4' className='section-title' align='left' color={isDarkMode ? "#5EC3EB" : "#ffffff"} fontWeight={"light"} style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                            {data.preTitle}
                                        </Typography>
                                        <Stack direction="column" spacing={2} marginTop={4}>
                                            <Typography variant='h1' align='left' color={isDarkMode ? "#5EC3EB" : "#ffffff"} fontWeight={"medium"} style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                                {data.title}
                                            </Typography>
                                            <Typography variant='subtitle1' align='left' color={isDarkMode ? "#5EC3EB" : "#ffffff"} fontWeight={"light"} style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                                {data.subTitle}
                                            </Typography>
                                            <Button variant="contained" sx={{ width: "30%", py: 1 }}>Explore More</Button>
                                        </Stack>
                                        <div className='hero-btn'>
                                        </div>
                                    </Box>
                                </Box>
                            </Slide>
                        </Container>
                    </div >
                ))
            }
        </>

    )
}

export default PicLanding