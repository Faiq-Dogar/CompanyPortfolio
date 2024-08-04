import { Box, Container, Grid, Typography } from '@mui/material';
import service_img from './../../Images/page_title_bg.png';
import React from 'react'
import BreadCrum from '../../Components/BreadCrum';
import CenterDis from '../../Components/CenterDis';
import ServicesCircle from '../../Components/ServicesCircle';
import Servicesdisc from '../../Components/Servicesdisc';
import SectionHeading from '../../Components/SectionHeading';
import ServiceCard from '../../Components/ServiceCard';

const Services = ({ SERVICES_DATA, hoveredAvatar, handleMouseEnter, handleMouseLeave }) => {
    return (
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
                    <Typography data-aos="fade-up" variant='h1' align='center' color={"#351A5F"} fontWeight={"bolder"} marginTop={'3%'}>
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
                            <ServicesCircle SERVICES_DATA={SERVICES_DATA} hoveredAvatar={hoveredAvatar} handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave} />
                        </Grid>
                        <Grid item xs={12} md={6} lg={6}>
                            <Servicesdisc />
                        </Grid>
                    </Grid>

                </Box>
                <Box
                    marginTop='10%'
                >
                    <Box sx={{ display: 'flex', justifyContent: 'center', my:'5%' }}>

                        <SectionHeading variant={'h3'} width={'44%'} alignText={'center'} />
                    </Box>
                    <Grid container spacing={10}>
                        <Grid item xs={12} md={4} lg={4}>
                            <ServiceCard heading={'Custom Software Development'} text={'We help businesses elevate their value through custom software development, product design, QA and consultancy.'}/>
                        </Grid>
                        <Grid item xs={12} md={4} lg={4}>
                            <ServiceCard />
                        </Grid>
                        <Grid item xs={12} md={4} lg={4}>
                            <ServiceCard />
                        </Grid>
                    </Grid>

                </Box>
            </Container>
        </>
    )
}

export default Services
