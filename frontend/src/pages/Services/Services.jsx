import { Box, Container, Grid, Typography } from '@mui/material';
import service_img from './../../Images/page_title_bg.png';
import React from 'react'
import BreadCrum from '../../Components/BreadCrum';
import CenterDis from '../../Components/CenterDis';
import ServicesCircle from '../../Components/ServicesCircle';
import Servicesdisc from '../../Components/Servicesdisc';
import SectionHeading from '../../Components/SectionHeading';
import Offerrings from '../../Components/Offerrings';
import TeamCard from '../../Components/TeamCard';


const Services = ({ SERVICES_DATA, hoveredAvatar, handleMouseEnter, handleMouseLeave, Team_person_1, Team_person_2, Team_person_3, Team_person_4 }) => {
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
            </Container>
            <Box
                marginTop='10%'
                paddingY={'2%'}
                bgcolor={'#F4F4F6'}
            >
                <Container maxWidth={"lg"} >
                    <Box sx={{ display: 'flex', justifyContent: 'center', my: '5%' }}>

                        <SectionHeading text={'We Offer a Wide Variety of IT Services'} variant={'h3'} width={'44%'} alignText={'center'} />
                    </Box>
                    <Offerrings />
                </Container>
            </Box>
            <Container maxWidth={"lg"} >
                <Box
                    marginTop='10%'
                >
                    <Box sx={{ display: 'flex', justifyContent: 'center', my: '5%' }}>
                        <SectionHeading text={'Meet our Team'} variant={'h3'} width={'44%'} alignText={'center'} />
                    </Box>
                    <Grid container spacing={9} marginTop={"7%"}>
                        <Grid item xs={12} md={3}>
                            <TeamCard person_image={Team_person_1} name={"Faiq Dogar"} designation={"Web developer"} />
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <TeamCard person_image={Team_person_2} name={"Chaudhary Abdullah"} designation={"Java developer"} />
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <TeamCard person_image={Team_person_3} name={"Zohaib Yasin"} designation={"Android developer"} />
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <TeamCard person_image={Team_person_4} name={"Shabana"} designation={"UI/US designer"} />
                        </Grid>
                    </Grid>
                </Box>
            </Container >
        </>
    )
}

export default Services
