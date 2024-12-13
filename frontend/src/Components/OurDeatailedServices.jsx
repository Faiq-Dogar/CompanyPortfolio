import { Box, Container, Grid, Typography, Card, CardContent, CardMedia } from '@mui/material';
import React from 'react';
import SectionHeading from './SectionHeading';

const OurDetailedServices = ({ isDarkMode }) => {
    return (
        <Box
            sx={{
                bgcolor: isDarkMode ? '#1F1F1F' : '#F5F7FA',
                py: 18,
            }}
        >
            <Container maxWidth="lg">
                {/* Section Title */}
                <Typography
                    variant='h4' align='center' color='#351A5F'>
                    What We Do
                </Typography>
                <Typography
                    variant='h2' align='center' color="#6668D2" marginTop={'2%'} marginBottom={'2%'} fontWeight={'bold'}>
                    Explore our Awesome services
                </Typography>
                <SectionHeading text={'Explore and learn more about everyhting from Web developemnt to UI/UX'} variant={'h6'} width={'100%'} alignText={'center'} fontWeight={'light'} textColor={'#351A5F'}/>

                {/* Services Grid */}
                <Grid container spacing={4}>
                    {/* Mobile App Development */}
                    <Grid item xs={12} md={6} lg={4}>
                        <Card
                            sx={{
                                transition: 'transform 0.3s',
                                '&:hover': {
                                    transform: 'scale(1.05)',
                                },
                                height:'400px'
                            }}
                        >
                            <CardMedia
                                component="img"
                                height="200"
                                image="https://source.unsplash.com/featured/?mobile,app,technology"
                                alt="Mobile App Development"
                            />
                            <CardContent>
                                <Typography
                                    variant="h5"
                                    color={isDarkMode ? '#66FCF1' : '#1F2833'}
                                    sx={{ fontWeight: 'bold', mb: 1 }}
                                >
                                    Mobile App Development
                                </Typography>
                                <Typography variant="body2" color={isDarkMode ? '#C5C6C7' : '#4F4F4F'}>
                                    Offering Android, iOS, Flutter, and Native mobile app development services.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* UI/UX Design */}
                    <Grid item xs={12} md={6} lg={4}>
                        <Card
                            sx={{
                                transition: 'transform 0.3s',
                                '&:hover': {
                                    transform: 'scale(1.05)',
                                },
                            }}
                        >
                            <CardMedia
                                component="img"
                                height="200"
                                image="https://source.unsplash.com/featured/?design,ui,ux"
                                alt="UI/UX Design"
                            />
                            <CardContent>
                                <Typography
                                    variant="h5"
                                    color={isDarkMode ? '#66FCF1' : '#1F2833'}
                                    sx={{ fontWeight: 'bold', mb: 1 }}
                                >
                                    UI/UX Design
                                </Typography>
                                <Typography variant="body2" color={isDarkMode ? '#C5C6C7' : '#4F4F4F'}>
                                    Creating intuitive and visually appealing designs for mobile and web apps.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* Website Development */}
                    <Grid item xs={12} md={6} lg={4}>
                        <Card
                            sx={{
                                transition: 'transform 0.3s',
                                '&:hover': {
                                    transform: 'scale(1.05)',
                                },
                                height:'400px'
                            }}
                        >
                            <CardMedia
                                component="img"
                                height="200"
                                image="https://source.unsplash.com/featured/?website,development,technology"
                                alt="Website Development"
                            />
                            <CardContent>
                                <Typography
                                    variant="h5"
                                    color={isDarkMode ? '#66FCF1' : '#1F2833'}
                                    sx={{ fontWeight: 'bold', mb: 1 }}
                                >
                                    Website Development
                                </Typography>
                                <Typography variant="body2" color={isDarkMode ? '#C5C6C7' : '#4F4F4F'}>
                                    Specializing in MERN stack, Next.js, and e-commerce store development.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* Software Development */}
                    <Grid item xs={12} md={6} lg={4}>
                        <Card
                            sx={{
                                transition: 'transform 0.3s',
                                '&:hover': {
                                    transform: 'scale(1.05)',
                                },
                                height:'400px'
                            }}
                        >
                            <CardMedia
                                component="img"
                                height="200"
                                image="https://source.unsplash.com/featured/?software,development"
                                alt="Software Development"
                            />
                            <CardContent>
                                <Typography
                                    variant="h5"
                                    color={isDarkMode ? '#66FCF1' : '#1F2833'}
                                    sx={{ fontWeight: 'bold', mb: 1 }}
                                >
                                    Software Development
                                </Typography>
                                <Typography variant="body2" color={isDarkMode ? '#C5C6C7' : '#4F4F4F'}>
                                    Crafting efficient software solutions with robust architectures.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* Additional Service Example */}
                    <Grid item xs={12} md={6} lg={4}>
                        <Card
                            sx={{
                                transition: 'transform 0.3s',
                                '&:hover': {
                                    transform: 'scale(1.05)',
                                },
                                height:'400px'
                            }}
                        >
                            <CardMedia
                                component="img"
                                height="200"
                                image="https://source.unsplash.com/featured/?consulting,technology"
                                alt="Consulting Services"
                            />
                            <CardContent>
                                <Typography
                                    variant="h5"
                                    color={isDarkMode ? '#66FCF1' : '#1F2833'}
                                    sx={{ fontWeight: 'bold', mb: 1 }}
                                >
                                    Consulting Services
                                </Typography>
                                <Typography variant="body2" color={isDarkMode ? '#C5C6C7' : '#4F4F4F'}>
                                    Providing expert guidance to bring your projects to life.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default OurDetailedServices;
