import React, { useEffect, useState } from 'react'
import { Box, Container, Typography } from '@mui/material';
import about_img from './../../Images/about-title-img.jpg';
import BreadCrum from '../../Components/BreadCrum';
import CenterDis from '../../Components/CenterDis';
import Stats_image from 'C:/Users/SURFACE/Desktop/Web/CompanyPortfolio/frontend/src/Images/section_01.jpg'
import StatsTopGrid from '../../Components/StatsTopGrid';
import IncreasingNumbers from '../../Components/IncreasingNumbers';

const About = () => {
  const [increaseClient, setIncreaseClient] = useState(0);
  const [increaseProjects, setIncreaseProjects] = useState(0);
  const [increaseTeam, setIncreaseTeam] = useState(0);
  const [increasePartners, setIncreasePartners] = useState(0);

  function functionClient() {
      const targetNumber = 28;
      const increment = 1;
      let currentNumber = 0;

      const intervalId = setInterval(() => {
          currentNumber += Math.round(increment);
          setIncreaseClient(currentNumber);
          if (currentNumber >= targetNumber) {
              clearInterval(intervalId);
              setIncreaseClient(targetNumber);
          }
      }, 100);
  }
  function functionProjects() {
      const targetNumber = 32;
      const increment = 1;
      let currentNumber = 0;

      const intervalId = setInterval(() => {
          currentNumber += Math.round(increment);
          setIncreaseProjects(currentNumber);
          if (currentNumber >= targetNumber) {
              clearInterval(intervalId);
              setIncreaseProjects(targetNumber);
          }
      }, 100);
  }
  function functionTeam() {
      const targetNumber = 8;
      const increment = 1;
      let currentNumber = 0;

      const intervalId = setInterval(() => {
          currentNumber += Math.round(increment);
          setIncreaseTeam(currentNumber);
          if (currentNumber >= targetNumber) {
              clearInterval(intervalId);
              setIncreaseTeam(targetNumber);
          }
      }, 400);
  }
  function functionPartners() {
      const targetNumber = 4;
      const increment = 1;
      let currentNumber = 0;

      const intervalId = setInterval(() => {
          currentNumber += Math.round(increment);
          setIncreasePartners(currentNumber);
          if (currentNumber >= targetNumber) {
              clearInterval(intervalId);
              setIncreasePartners(targetNumber);
          }
      }, 400);
  }

  useEffect(() => {
      functionClient();
      functionProjects();
      functionTeam();
      functionPartners();

  }, [])
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
            About Us
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
        <Box
          marginTop='10%'
        >
          <IncreasingNumbers increaseClient={increaseClient} increaseProjects={increaseProjects} increaseTeam={increaseTeam} increasePartners={increasePartners} />
        </Box>
      </Container>
    </>
  )
}

export default About
