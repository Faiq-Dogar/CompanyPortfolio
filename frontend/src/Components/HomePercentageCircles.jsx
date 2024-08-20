import { Container, Grid, Typography } from '@mui/material'
import React from 'react'

const HomePercentageCircles = ({isDarkMode, percent, title, disc, inversePercent }) => {
    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={6} md={6} lg={6}>
                    <div className="circle-containerHome" style={{ background: `conic-gradient(#1976D2 0% ${percent}%, transparent ${percent - 100}% 100%)` }} >
                        <div className='circle-contentHome'>
                            <Typography variant='h4' color={'#351A5F'} fontWeight={'bold'}>
                                {percent}%
                            </Typography>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={6} md={6} lg={6}>
                    <Typography variant='h5' color={isDarkMode ? "#5EC3EB" : "#351A5F"} marginTop={'12%'}>
                        {title}
                    </Typography>
                </Grid>
            </Grid>
        </>
    )
}

export default HomePercentageCircles
