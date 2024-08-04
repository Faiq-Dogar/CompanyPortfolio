import { Box, Container, Typography } from '@mui/material';
import service_img from './../../Images/page_title_bg.png';
import React from 'react'
import BreadCrum from '../../Components/BreadCrum';
import CenterDis from '../../Components/CenterDis';
import ServicesSection from '../../Components/ServicesSection'

const Services = () => {
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
                    <ServicesSection />
                </Box>
            </Container>
        </>
    )
}

export default Services
