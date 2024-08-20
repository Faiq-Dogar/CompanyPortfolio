import React from 'react'
import { Button, Container, Grid, Stack, Typography } from '@mui/material';
import PageNumber from './PageNumber';
import { Slide } from "react-awesome-reveal";
import PageIcons from './PageIcons';

const HeroSection = ({ HomeHeroSection, mobile_mockup4, isDarkMode }) => {
  return (
    <>
      {HomeHeroSection !== undefined &&
        HomeHeroSection.map((data, key) => (
          <div
            // data-aos="fade-up"
            key={key}>
            <Container maxWidth='xl'>
              <Grid container spacing={15} marginTop={"12%"}>
                <Grid item xs={12} md={1}>
                  {/* <PageIcons Icolor={'#351A5F'} size1={'extralarge'} size2={'medium'} size3={'medium'} size4={'medium'} size5={'medium'} size6={'medium'} size7={'medium'}/> */}
                </Grid>
                <Grid item xs={12} md={5}>
                  <Slide direction="left">
                    <img src={mobile_mockup4} style={{ width: '100%', marginLeft: '-18%', marginTop: '-30%' }} alt='Mobile Mockup' />
                  </Slide>
                </Grid>
                <Grid item xs={12} md={5} >
                  <Slide direction="right">
                    <Typography variant='h6' className='section-title' align='left' color={isDarkMode ? "#5EC3EB" : "#351A5F"} fontWeight={"light"} style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {data.preTitle}
                    </Typography>
                    <Stack direction="column" spacing={2}>
                      <Typography variant='h2' align='left' color={isDarkMode ? "#5EC3EB" : "#351A5F"} fontWeight={"medium"} style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        {data.title}
                      </Typography>
                      <Typography variant='subtitle1' align='left' color={isDarkMode ? "#5EC3EB" : "#351A5F"} fontWeight={"light"} style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        {data.subTitle}
                      </Typography>
                      <Button variant="contained" sx={{ width: "30%", cursor: "url('{cursor}')" }}>Explore More</Button>
                    </Stack>
                  </Slide>
                </Grid>
              </Grid>
              <PageNumber isDarkMode={isDarkMode} current={'01'} total={'06'} marginT={'3%'} />
            </Container>
          </div>
        ))
      }
    </>
  )
}

export default HeroSection