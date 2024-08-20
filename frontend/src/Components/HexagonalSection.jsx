import { Box, Container, Grid } from '@mui/material'
import mobile_img from '../assets/Images/animated-iphone-14-pro-free-mockup-removebg-preview.webp'
import hexagon_bg from '../assets/Images/pexels-artempodrez-7233187.jpg'
import React from 'react'
import PercentageCircle from './PercentageCircle'
import HomePercentageCircles from './HomePercentageCircles'

const Hexagolsection = ({isDarkMode}) => {
    return (
        <div>
            <Container maxWidth={'lg'}>
                <Grid container spacing={4} mt={'10%'} sx={{ display: 'flex',alignItems:'center'}}>
                    <Grid item xs={'12'} md={'6'}>
                        <HomePercentageCircles isDarkMode={isDarkMode} percent={100} title={'Security'} disc={'Years of cooperation with both corporations and startups'} inversePercent={0} />
                        <HomePercentageCircles isDarkMode={isDarkMode} percent={75} title={'Prosperity'} disc={'Years of cooperation with both corporations and startups'} inversePercent={25} />
                        <HomePercentageCircles isDarkMode={isDarkMode} percent={90} title={'Guarantee'} disc={'Years of cooperation with both corporations and startups'} inversePercent={10} />
                        <HomePercentageCircles isDarkMode={isDarkMode} percent={60} title={'Quality'} disc={'Years of cooperation with both corporations and startups'} inversePercent={40} />
                    </Grid>
                    <Grid item xs={'12'} md={'6'}>
                        <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
                            <svg width="400.846" height="418.144">
                                <path id="hexagon" d="M 210,50
                                       L 330,120
                                       A 30,30 0 0 1 345,150
                                       L 345,290
                                       A 30,30 0 0 1 330,315
                                       L 210,380
                                       A 30,30 0 0 1 180,380
                                       L 60,315
                                       A 30,30 0 0 1 45,290
                                       L 45,150
                                       A 30,30 0 0 1 60,120
                                       L 170,50
                                       A 30,30 0 0 1 210,50" />

                                <mask id="hexagon-mask">
                                    <use href="#hexagon" fill="white" />
                                </mask>
                                <image href={hexagon_bg} x="-50" y="-150" width="680" height="680"
                                    mask="url(#hexagon-mask)" />
                            </svg>
                            <img src={mobile_img} className='hexagon-mobile' alt='DevBerry' width={'180%'} />
                        </Box>
                    </Grid>
                </Grid>
            </Container>

        </div>
    )
}

export default Hexagolsection
