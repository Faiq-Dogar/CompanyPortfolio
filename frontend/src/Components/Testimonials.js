import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import PageIcons from './PageIcons';
import TestimonialCard from './TestimonialCard';
import { Data } from './../db/data';
import { useLocation } from 'react-router-dom';
import Carousel from './Carousel';
import Marquee from './Marquee';
// import PageNumber from './PageNumber';


const Testimonials = ({ HomeTestimoials, isDarkMode }) => {
    return (
        <Container maxWidth='xl'>

                    <Typography
                        variant='h2' align='center' color={isDarkMode ? "#5EC3EB" : "#351A5F"} marginTop={"16%"}>
                        Testimonials
                    </Typography>
                    <Box sx={{ marginTop: '5%' }}>
                        <Marquee text={'ArchTech Testimonials'} isDarkMode={isDarkMode} />
                    </Box>
                    <Box sx={{ marginTop: '6%' }}>
                        {HomeTestimoials !== undefined ? (
                            <Carousel data={HomeTestimoials} />
                        ) : (
                            <Typography variant='body1' color={isDarkMode ? "#5EC3EB" : "#351A5F"} align='center'>
                                No testimonials available
                            </Typography>
                        )}
                    </Box>
        </Container>
    );
}

export default Testimonials;