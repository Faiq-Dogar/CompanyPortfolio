import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React from 'react'
import BreadCrum from '../../Components/BreadCrum';
import CenterDis from '../../Components/CenterDis';
import ServicesCircle from '../../Components/ServicesCircle';
import Servicesdisc from '../../Components/Servicesdisc';
import SectionHeading from '../../Components/SectionHeading';
import Offerrings from '../../Components/Offerrings';
import TeamCard from '../../Components/TeamCard';
import Carousel from '../../Components/Carousel';
import { Data } from './../../db/data';
import { useMediaQuery } from '@mui/material';


const Services = ({ isDarkMode, SERVICES_DATA, hoveredAvatar, handleMouseEnter, handleMouseLeave, Service_CTA, service_img }) => {
    const newList = Data.filter((v) => v.page == '/Services')
    const isMobileOrTablet = useMediaQuery('(max-width: 1024px)');

    return (
        <>
            {
                newList.map(
                    ({
                        ServiceServicesCircles,
                        ServiceServicesdis,
                        ServiceOfferingsHead,
                        ServiceOfferingsList,
                        ServiceTeamMembers,
                        ServiceTestimoials
                    }) => (
                        <>

                            <div
                                style={{
                                    backgroundImage: `url(${service_img})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                    paddingBottom: '6%',
                                    paddingTop: '2%'
                                }}
                            >
                                <Container maxWidth={"xl"} >
                                    <BreadCrum textColor={'#351A5F'} previous={"Home"} now={"Services"} />
                                    <Typography variant='h1' align='center' color={"#351A5F"} fontWeight={"bolder"} marginTop={'3%'} fontSize={isMobileOrTablet ? '3.5rem' : '6rem'}>
                                        Services
                                    </Typography>
                                    <CenterDis textColor={'#351A5F'} text={'Lorem ipsum proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat sagittis sem nibh id elit.'} />
                                </Container>
                            </div>
                            <Container maxWidth={"lg"} >
                                <Box
                                    marginTop='10%'
                                >
                                    <Grid container spacing={15}>
                                        <Grid item xs={12} md={6} lg={6}>
                                            <ServicesCircle ServicesCircles={ServiceServicesCircles} hoveredAvatar={hoveredAvatar} handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave} isDarkMode={isDarkMode} circleColor={'#6A4BC4'} textColor={'#351A5F'} width={''}/>
                                        </Grid>
                                        <Grid item xs={12} md={6} lg={6}>
                                            <Servicesdisc Servicesdis={ServiceServicesdis} isDarkMode={isDarkMode} textColor={'#351A5F'}/>
                                        </Grid>
                                    </Grid>

                                </Box>
                            </Container>
                            <Box
                                marginTop='10%'
                                paddingY={'2%'}
                                bgcolor={'#F4F4F6'}
                            >
                                {ServiceOfferingsHead !== undefined &&
                                    <Container maxWidth={"lg"} >
                                        {ServiceOfferingsHead.map((data, key) => (
                                            <Box sx={{ display: 'flex', justifyContent: 'center', my: '5%' }}>
                                                <SectionHeading text={data.title} variant={'h3'} width={'44%'} alignText={'center'} fontWeight={'medium'} fontSize={isMobileOrTablet ? '2em' : '3rem'}/>
                                            </Box>
                                        ))}
                                        <Offerrings ServiceOfferingsList={ServiceOfferingsList} />
                                    </Container>
                                }
                            </Box>

                            {/* <ServicesTable/> */}
                            {/* {ServiceTeamMembers !== undefined &&
                                <Container maxWidth={"lg"} >
                                    <Box
                                        marginTop='10%'
                                    >
                                        <Box sx={{ display: 'flex', justifyContent: 'center', mt: '5%' }}>
                                            <SectionHeading text={'Meet our Team'} variant={'h3'} width={'44%'} alignText={'center'} textColor={isDarkMode ? "#5EC3EB" : "#351A5F"} fontWeight={'medium'} />
                                        </Box>
                                        <Grid container spacing={9} marginTop={"7%"}>
                                            {ServiceTeamMembers.map((data, key) => (
                                                <Grid item xs={12} md={3} lg={4} key={key}>
                                                    <TeamCard isDarkMode={isDarkMode} person_image={data.profile} name={data.name} designation={data.designation} facebookAccount={data.facebookAccount} gmailAccount={data.gmailAccount} instagramAccount={data.instagramAccount} />
                                                </Grid>
                                            ))}
                                        </Grid>
                                    </Box>
                                </Container >} */}
                            <Box
                                sx={{
                                    backgroundImage: `url(${Service_CTA})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                    padding: '5%',
                                    marginTop: '5%'
                                }}
                            >
                                <Container maxWidth={"lg"} >
                                    <Typography variant='h5' align='center' color={'white'} marginTop={'3%'}>
                                        Drop us a line! We are here to answer your questions 24/7
                                    </Typography>
                                    <SectionHeading text={'Need a Consultation?'} variant={'h1'} width={'100%'} alignText={'center'} textColor={'White'} fontWeight={'bolder'} fontSize={isMobileOrTablet ? '2.5em' : '3rem'}/>
                                    <Button variant='contained' color='primary' sx={{ paddingX: '4%', paddingY: '1.5%', mt: '3%', mx: isMobileOrTablet ? '33%' : '40%' }} >
                                        CONTACT US
                                    </Button>
                                </Container>
                            </Box>
                            <Container maxWidth={"xl"} >
                                <Box
                                    marginTop='10%'
                                    textAlign={'center'}
                                >
                                    <SectionHeading text={'Testimonials'} variant={'h2'} width={'100%'} alignText={'center'} textColor={"#351A5F"} fontWeight={'medium'} />
                                    {ServiceTestimoials !== undefined ? (
                                        <Carousel data={ServiceTestimoials} />
                                    ) : (
                                        <Typography variant='body1' color={"#351A5F"} align='center'>
                                            No testimonials available
                                        </Typography>
                                    )}
                                </Box>
                            </Container >
                        </>
                    )
                )
            }
        </>
    )
}

export default Services
