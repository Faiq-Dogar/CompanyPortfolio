import React from 'react';
import { Box, Container, Grid, Typography, Card, CardContent, CardMedia } from '@mui/material';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const services = [
    {
        title: 'Mobile App Development',
        description: 'Custom Android, iOS, and Flutter app solutions.',
        image: 'https://source.unsplash.com/500x500/?mobile,technology'
    },
    {
        title: 'UI/UX Design',
        description: 'Interactive and user-friendly designs for your projects.',
        image: 'https://source.unsplash.com/500x500/?design,creative'
    },
    {
        title: 'Web Development',
        description: 'Building responsive and scalable web applications.',
        image: 'https://source.unsplash.com/500x500/?web,development'
    },
    {
        title: 'Software Development',
        description: 'High-quality software tailored to your needs.',
        image: 'https://source.unsplash.com/500x500/?software,development'
    }
];

const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: '20px',
};

const OurDetailedServices = () => {
    return (
        <Box sx={{ bgcolor: '#f5f5f5', py: 8 }}>
            <Container maxWidth="lg">
                <Typography
                    variant="h4"
                    align="center"
                    color="primary"
                    fontWeight="bold"
                    gutterBottom
                >
                    What We Do
                </Typography>
                <Typography
                    variant="h6"
                    align="center"
                    color="textSecondary"
                    gutterBottom
                >
                    Explore our awesome services tailored for you.
                </Typography>

                <Grid container spacing={4} alignItems="center">
                    {/* Left Image Section */}
                    <Grid item xs={12} md={5}>
                        <img
                            src="https://source.unsplash.com/600x600/?team,work"
                            alt="Our Services"
                            style={{ width: '100%', borderRadius: '10px' }}
                        />
                    </Grid>

                    {/* Right Slider Section */}
                    <Grid item xs={12} md={7}>
                        <Slider {...sliderSettings}>
                            {services.map((service, index) => (
                                <Box key={index} sx={{ px: 2 }}>
                                    <Card sx={{ boxShadow: 3, borderRadius: '10px', height: '400px' }}>
                                        <CardMedia
                                            component="img"
                                            height="200"
                                            image={service.image}
                                            alt={service.title}
                                        />
                                        <CardContent>
                                            <Typography
                                                variant="h5"
                                                color="primary"
                                                fontWeight="bold"
                                                gutterBottom
                                            >
                                                {service.title}
                                            </Typography>
                                            <Typography
                                                variant="body1"
                                                color="textSecondary"
                                            >
                                                {service.description}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Box>
                            ))}
                        </Slider>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default OurDetailedServices;
