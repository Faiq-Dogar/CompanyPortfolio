import React from 'react'
import { Button, Container, Grid, Stack, Typography } from '@mui/material';
import PageNumber from './PageNumber';
import PageIcons from './PageIcons';


const HeroSection = ({mobile_mockup4}) => {
  return (

    <div data-aos="fade-up">
      <Container maxWidth='xl'>
        <Grid container spacing={15} marginTop={"12%"}>
            <Grid item xs={12} md={1}>
              {/* <PageIcons Icolor={'#351A5F'} size1={'extralarge'} size2={'medium'} size3={'medium'} size4={'medium'} size5={'medium'} size6={'medium'} size7={'medium'}/> */}
            </Grid>
          <Grid item xs={12} md={5}>
            <img src={mobile_mockup4} style={{ width: '100%', marginLeft: '-18%', marginTop: '-30%' }} alt='Mobile Mockup' />
          </Grid>
          <Grid item xs={12} md={5} >
            <Typography variant='h6' className='section-title'  align='left' color={"#351A5F"} fontWeight={"light"}>
              Gensol Tech
            </Typography>
            <Stack direction="column"  spacing={2}>
              <Typography variant='h2' align='left' color={"#351A5F"} fontWeight={"medium"}>
                New Solutions for New Generation
              </Typography>
              <Typography variant='subtitle1' align='left' color={"#351A5F"} fontWeight={"light"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
              </Typography>
              <Button variant="contained" sx={{ width: "30%", cursor: "url('{cursor}')" }}>Explore More</Button>
            </Stack>
          </Grid>
        </Grid>
        <PageNumber current={'01'} total={'06'} marginT={'3%'} />
      </Container>
    </div>
  )
}

export default HeroSection
