import React, { useEffect, useState } from 'react'
import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material';
import PageNumber from './PageNumber';
import { Slide } from "react-awesome-reveal";
import bg_video from './../assets/Images/3129957-uhd_3840_2160_25fps.mp4'
// import bg_video from './../assets/Images/3141210-uhd_3840_2160_25fps.mp4'
import PageIcons from './PageIcons';
import './../Load/load.css'
const VideoHeroSection = ({ HomeHeroSection, mobile_mockup4, isDarkMode }) => {

    return (
        <>
            {
                HomeHeroSection !== undefined &&
                HomeHeroSection.map((data, key) => (
                    <div
                        // data-aos="fade-up"
                        key={key} className='video-bg'>
                        <video autoPlay muted loop id="background-video">
                            <source src={bg_video} type="video/mp4"></source>
                            Your browser does not support the video tag.
                        </video>
                        <Container maxWidth='xl'>
                            <Slide direction="up">
                                <Box sx={
                                    {
                                        display: 'flex',
                                        justifyContent: 'center',
                                    }
                                }>
                                    <Box sx={
                                        {
                                            width: '50%',
                                        }
                                    }>
                                        <Typography variant='h6' className='section-title' align='center' color={isDarkMode ? "#5EC3EB" : "#ffffff"} fontWeight={"light"} style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                            {data.preTitle}
                                        </Typography>
                                        <Stack direction="column" spacing={2}>
                                            <Typography variant='h2' align='center' color={isDarkMode ? "#5EC3EB" : "#ffffff"} fontWeight={"medium"} style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                                {data.title}
                                            </Typography>
                                            <Typography variant='subtitle1' align='center' color={isDarkMode ? "#5EC3EB" : "#ffffff"} fontWeight={"light"} style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                                {data.subTitle}
                                            </Typography>
                                        </Stack>
                                        <div className='hero-btn'>
                                            <Button variant="contained" sx={{ width: "30%" }}>Explore More</Button>
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

export default VideoHeroSection