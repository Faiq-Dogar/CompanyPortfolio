import React from 'react'
import Marquee from '../../Components/Marquee'
import Carousel from '../../Components/Carousel'
import { SingleServiceData } from './../../db/data'
import SectionHeading from '../../Components/SectionHeading'
import MobileDevelopemnt from '../../SVGs/MobileDevelopemnt'
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import SingleServiceDataDisplay from '../../Components/SingleServiceDataDisplay'
import PercentageCircle from '../../Components/PercentageCircle'
import BreadCrum from '../../Components/BreadCrum'
import { useLocation } from 'react-router-dom'


const SingleService = ({ SingleServiceHero }) => {
    const location = useLocation(); 
    const { serviceName } = location.state;
    console.log("service: ", serviceName);

    const newList = SingleServiceData.filter((v) => v.service === serviceName);

    return (
        <>
            {newList.map(
                ({
                    HeroSectionData,
                    MarqueeData,
                    SingleServicelist,
                    ServiceTestimoials
                }) => (
                    <>

                        <Box
                            sx={{
                                backgroundImage: `url(${SingleServiceHero})`,
                                backgroundSize: '35%',
                                backgroundPositionX: '50px',
                                backgroundPositionY: '10px',
                                backgroundRepeat: 'no-repeat',
                                padding: '5%',
                            }}
                        >
                            <Container maxWidth={'lg'}>
                                <Grid container spacing={15}>
                                    <Grid item xs={12} md={6} lg={6}>
                                    <BreadCrum textColor={'#351A5F'} previous={"Home"} now={"Services / Mobile App Development"} />
                                        <div className='Hero-Heading'>
                                            {HeroSectionData.map((value, key) => (
                                                <>
                                                    <SectionHeading text={value.title} variant={'h3'} width={'100%'} alignText={'left'} fontWeight={'medium'} />
                                                    <SectionHeading text={value.para2} variant={'body1'} width={'100%'} alignText={'left'} fontWeight={''} />
                                                    <Button variant='contained' color='primary' sx={{ marginTop: '5%' }}>Get Consultancy</Button>
                                                </>
                                            ))}
                                        </div>
                                    </Grid>
                                    <Grid item xs={12} md={6} lg={6}>
                                        <MobileDevelopemnt width={'502.369028'} height={'417.43044'} />
                                    </Grid>
                                </Grid>
                            </Container>
                        </Box>
                        <Box
                            // marginTop='10%'
                            paddingY={'2%'}
                            bgcolor={'#F4F4F6'}
                        >
                            <Container maxWidth={'xl'}>
                                {/* <SectionHeading text={'Zai Systems is one of the best companyies in Movile App Development.'} variant={'body1'} width={'100%'} alignText={'center'} fontWeight={''} /> */}
                                <Marquee text={MarqueeData} />
                            </Container>
                        </Box>
                        <Box>
                            <SingleServiceDataDisplay SingleServicelist={SingleServicelist} />
                        </Box>
                        <Container maxWidth={"xl"} >
                            <Box
                                marginTop='10%'
                                textAlign={'center'}
                            >
                                <SectionHeading text={'Testimonials'} variant={'h2'} width={'100%'} alignText={'center'} textColor={"#351A5F"} fontWeight={'medium'} />
                                {newList ? (
                                    <Carousel data={ServiceTestimoials} />
                                ) : (
                                    <Typography variant='body1' color={"#351A5F"} align='center'>
                                        Testimonials will show up shortly. Why don't you explore our other features..
                                    </Typography>
                                )}
                            </Box>
                        </Container >
                        <Box
                            marginTop='10%'
                            textAlign={'center'}
                            sx={{
                                backgroundImage: `url(${SingleServiceHero})`,
                                backgroundSize: '30%',
                                backgroundPositionX: '5%',
                                backgroundPositionY: '0%',
                                backgroundRepeat: 'no-repeat',
                            }}
                        >
                            <Container maxWidth={"lg"} >
                                <Grid container spacing={10}>
                                    <Grid item xs={5} md={6} lg={3}>
                                        <PercentageCircle percent={100} title={'Security'} disc={'Years of cooperation with both corporations and startups'} inversePercent={0} />
                                    </Grid>
                                    <Grid item xs={6} md={6} lg={3}>
                                        <PercentageCircle percent={75} title={'Prosperity'} disc={'Years of cooperation with both corporations and startups'} inversePercent={25} />
                                    </Grid>
                                    <Grid item xs={6} md={6} lg={3}>
                                        <PercentageCircle percent={90} title={'Guarantee'} disc={'Years of cooperation with both corporations and startups'} inversePercent={10} />
                                    </Grid>
                                    <Grid item xs={6} md={6} lg={3}>
                                        <PercentageCircle percent={60} title={'Quality'} disc={'Years of cooperation with both corporations and startups'} inversePercent={40} />
                                    </Grid>
                                </Grid>
                            </Container >
                        </Box>
                    </>
                )
            )}
        </>
    )
}

export default SingleService