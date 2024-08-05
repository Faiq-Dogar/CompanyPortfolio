import React, { useEffect, useState } from 'react'
import { Box, Container, Typography } from '@mui/material';
import BreadCrum from '../../Components/BreadCrum';
import CenterDis from '../../Components/CenterDis';
import StatsTopGrid from '../../Components/StatsTopGrid';
import IncreasingNumbers from '../../Components/IncreasingNumbers';
import AOS from 'aos';
import 'aos/dist/aos.css';
import MissionVisionSection from '../../Components/MissionVisionSection';
import AccordianSections from '../../Components/AccordianSections';

const About = ({Stats_image, Mission_image, Vision_image, Perspective_image, Strategy_image, about_img}) => {
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
    AOS.init();
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
          <BreadCrum textColor={'#351A5F'} previous={"Home"} now={"About"} />
          <Typography data-aos="fade-up" variant='h1' align='center' color={"white"} fontWeight={"bolder"} marginTop={'5%'}>
            About Us
          </Typography>
          <CenterDis textColor={'white'}text={'Lorem ipsum proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat sagittis sem nibh id elit.'} />
        </Container>
      </div>
      <Container maxWidth={"lg"} >
        <Box
          marginTop='10%'
        >
          <MissionVisionSection Mission_image={Mission_image} Vision_image={Vision_image} Perspective_image={Perspective_image} Strategy_image={Strategy_image} />

        </Box>
      </Container>
      <Box
        marginY={'10%'}
        paddingY={'10%'}
        bgcolor={'#F4F4F6'}
      >
        <Container maxWidth={"lg"} >
          <IncreasingNumbers increaseClient={increaseClient} increaseProjects={increaseProjects} increaseTeam={increaseTeam} increasePartners={increasePartners} />
        </Container>
      </Box>
      <Container maxWidth={"lg"} >
        <Box
          marginY={'10%'}
        >
          <StatsTopGrid Stats_image={Stats_image} />
        </Box>
      </Container>
      <Box
        marginY={'10%'}
        paddingY={'5%'}
        bgcolor={'#F4F4F6'}
      >
        <Container maxWidth={"lg"} >
          <AccordianSections />
        </Container>
      </Box>
    </>
  )
}

export default About
