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
            <Grid container spacing={15} sx={{mt:'20%'}}>
                <Grid item xs={1} md={1}>
                    {/* <PageIcons Icolor={'#351A5F'} size1={'medium'} size2={'medium'} size3={'medium'} size4={'medium'} size5={'medium'} size6={'extralarge'} size7={'medium'} /> */}
                </Grid>
                <Grid item xs={11} md={11}>
                    <Typography
                        // data-aos="fade-up"
                        variant='h2' align='center' color={isDarkMode ? "#5EC3EB" : "#351A5F"} marginTop={"-15%"}>
                        Testimonials
                    </Typography>
                    <Box sx={{ marginTop: '9%' }}>
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
                </Grid>
            </Grid>
            {/* <PageNumber isDarkMode={isDarkMode} current={'04'} total={'06'} marginT={'-0.3%'} /> */}
        </Container>
    );
}

export default Testimonials;