import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import PageIcons from './PageIcons';
import TestimonialCard from './TestimonialCard';
import { Data } from './../db/data';
import { useLocation } from 'react-router-dom';

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
                    <PageIcons Icolor={'#351A5F'} size1={'medium'} size2={'medium'} size3={'medium'} size4={'medium'} size5={'medium'} size6={'extralarge'} size7={'medium'} />
                </Grid>
                <Grid item xs={11} md={11}>
                    <Typography data-aos="fade-up" variant='h2' align='center' color={"#351A5F"} marginTop={"-15%"}>
                        Testimonials
                    </Typography>
                    <Box sx={{ marginTop: '15%' }}>
                        {newList ? (
                            newList.HomeTestimoials.map((item) => (
                                <TestimonialCard
                                    key={item.id}
                                    name={item.name}
                                    date={item.date}
                                    text={item.text}
                                    img={item.img}
                                />
                            ))
                        ) : (
                            <Typography variant='body1' color={"#351A5F"} align='center'>
                                No testimonials available
                            </Typography>
                        )}
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Testimonials;
