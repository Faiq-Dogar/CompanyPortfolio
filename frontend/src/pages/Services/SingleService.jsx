import { Box, Button, Container, Grid } from '@mui/material'
import React from 'react'
import SectionHeading from '../../Components/SectionHeading'
import MobileDevelopemnt from '../../SVGs/MobileDevelopemnt'
import Marquee from '../../Components/Marquee'
import { SingleServiceData } from './../../db/data'
import SingleServiceDataDisplay from '../../Components/SingleServiceDataDisplay'

const SingleService = ({ SingleServiceHero }) => {
    const newList = SingleServiceData.filter((v) => v.service === 'Mobile App Developemnt');
    // const newList = SingleServiceData.filter((v) => v.service === service);

    return (
        <>
            {newList.map(
                ({
                    HeroSectionData,
                    MarqueeData,
                    SingleServicelist
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
                            <SingleServiceDataDisplay SingleServicelist={SingleServicelist}/>
                        </Box>
                    </>
                )
            )}
        </>
    )
}

export default SingleService