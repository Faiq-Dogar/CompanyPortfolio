import { Container, Typography } from '@mui/material';
import service_img from './../../Images/page_title_bg.png';
import React from 'react'
import BreadCrum from '../../Components/BreadCrum';
import CenterDis from '../../Components/CenterDis';

const Services = () => {
    return (
        <>
            <div
                style={{
                    backgroundImage: `url(${service_img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    padding: '5%'
                }}
            >
                <Container maxWidth={"xl"} >
                    <BreadCrum previous={"Home"} now={"Services"} />
                    <Typography data-aos="fade-up" variant='h1' align='center' color={"white"} fontWeight={"bolder"} marginTop={'5%'}>
                        Services
                    </Typography>
                    <CenterDis text={'Lorem ipsum proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat sagittis sem nibh id elit.'} />
                </Container>
            </div>
        </>
    )
}

export default Services
