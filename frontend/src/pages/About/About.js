import React from 'react'
import { Box, Container, Typography } from '@mui/material';
import about_img from './../../Images/about-title-img.jpg';
import BreadCrum from '../../Components/BreadCrum';
import CenterDis from '../../Components/CenterDis';
import Stats_image from 'C:/Users/SURFACE/Desktop/Web/CompanyPortfolio/frontend/src/Images/section_01.jpg'
import StatsTopGrid from '../../Components/StatsTopGrid';

const About = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${about_img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          padding: '5%'
        }}
      >
        <Container maxWidth={"xl"} >
          <BreadCrum previous={"Home"} now={"About"} />
          <Typography data-aos="fade-up" variant='h1' align='center' color={"white"} fontWeight={"bolder"} marginTop={'5%'}>
            About Me
          </Typography>
          <CenterDis text={'Lorem ipsum proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat sagittis sem nibh id elit.'} />
        </Container>
      </div>
      <Container maxWidth={"lg"} >
        <Box
          marginTop='10%'
        >

          <StatsTopGrid Stats_image={Stats_image} />
        </Box>
      </Container>
    </>
  )
}

export default About
