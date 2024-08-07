import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import PageIcons from './PageIcons';
import TestimonialCard from './TestimonialCard';
import { Data } from './../db/data';
import { useLocation } from 'react-router-dom';
import Carousel from './Carousel';
import Marquee from './Marquee';
import PageNumber from './PageNumber';


const Testimonials = () => {
    const location = useLocation();
    const page = location.pathname;
    console.log('path: ', page);

    // Filter Data based on the page path
    const newList = Data.find((v) => v.page == '/')
    console.log('newList: ', newList);

    return (
        <Container maxWidth='xl'>
            <Grid container spacing={15} marginTop={"12%"}>
                <Grid item xs={1} md={1}>
                    {/* <PageIcons Icolor={'#351A5F'} size1={'medium'} size2={'medium'} size3={'medium'} size4={'medium'} size5={'medium'} size6={'extralarge'} size7={'medium'} /> */}
                </Grid>
                <Grid item xs={11} md={11}>
                    <Typography
                    // data-aos="fade-up"
                    variant='h2' align='center' color={"#351A5F"} marginTop={"-15%"}>
                        Testimonials
                    </Typography>
                    <Box sx={{ marginTop: '9%' }}>
                        <Marquee text={'ArchTech Testimonials'} />
                    </Box>
                    <Box sx={{ marginTop: '6%' }}>

                        {newList ? (
                            // newList.HomeTestimoials.map((item) => (
                                // <TestimonialCard
                                //     key={item.id}
                                //     name={item.name}
                                //     date={item.date}
                                //     text={item.text}
                                //     img={item.img}
                                // />
                                <Carousel data={newList.HomeTestimoials}/>
                            // ))
                        ) : (
                            <Typography variant='body1' color={"#351A5F"} align='center'>
                                No testimonials available
                            </Typography>
                        )}
                    </Box>
                </Grid>
            </Grid>
            <PageNumber current={'04'} total={'06'} marginT={'-0.3%'} />
        </Container>
    );
}

export default Testimonials;

