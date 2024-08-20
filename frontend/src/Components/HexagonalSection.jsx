import { Grid } from '@mui/material'
import mobile_img from '../assets/Images/animated-iphone-14-pro-free-mockup-removebg-preview.webp'
import React from 'react'

const Hexagolsection = () => {
    return (
        <div>
            <Grid container spacing={4}>
                <Grid item xs={'12'} md={'6'}>
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

                        <image href="images/myself.png" x="-50" y="-20" width="480" height="470"
                            mask="url(#hexagon-mask)" />
                    </svg>
                    <img src={mobile_img} alt='DevBerry' width={'100%'}/>
                </Grid>
            </Grid>
        </div>
    )
}

export default Hexagolsection
