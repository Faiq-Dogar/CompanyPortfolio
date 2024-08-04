import { Box, Button, Container, Grid } from '@mui/material'
import React from 'react'
import SectionHeading from '../../Components/SectionHeading'
import MobileDevelopemnt from '../../SVGs/MobileDevelopemnt'
import Marquee from '../../Components/Marquee'


const SingleService = ({ SingleServiceHero }) => {
    return (
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
                                <SectionHeading text={'Mobile App Development'} variant={'h3'} width={'100%'} alignText={'left'} fontWeight={'medium'} />
                                <SectionHeading text={'At ArchTech, we pride ourselves on being one of the best leading mobile app development companies in Pakistan, delivering top-notch application development services that cater to businesses of all sizes.'} variant={'body1'} width={'100%'} alignText={'left'} fontWeight={''} />
                                <Button variant='contained' color='primary' sx={{ marginTop: '5%' }}>Get Consultancy</Button>
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
                    <Marquee text={'ArchTech Industries'} />
                </Container>
            </Box>

        </>
    )
}

export default SingleService