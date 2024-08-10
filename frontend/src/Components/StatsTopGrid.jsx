import { Box, Grid, Stack, Typography } from '@mui/material'
import React from 'react'

const StatsTopGrid = ({ HomeStatsSection1 }) => {
    return (
        <>
            {HomeStatsSection1 !== undefined &&
                HomeStatsSection1.map((data, key) => (
                    <Grid container spacing={5}>
                        <Grid item sx={12} md={6} lg={6}>
                            <Box>
                                <Typography
                                    // data-aos="fade-right"
                                    variant='h3' color={"#351A5F"}>
                                    {data.title}
                                </Typography>
                                <Typography
                                    // data-aos="fade-up"
                                    variant='body1' color={"#351A5F"} marginTop={'3%'}>
                                    {data.dis}
                                </Typography>
                                <>
                                    {
                                        data.home3.map((index, key) => (
                                            <>

                                                <Stack direction={'row'} spacing={'56%'} marginTop={'5%'}>
                                                    <Typography
                                                        // data-aos="fade-right"
                                                        variant='subtitle1' color={"#351A5F"} fontWeight={'bold'}>
                                                        {index.statsName}
                                                    </Typography>
                                                    <Typography
                                                        // data-aos="fade-right"
                                                        variant='subtitle1' color={"#351A5F"} fontWeight={'bold'}>
                                                        {index.statsValue}
                                                    </Typography>
                                                </Stack>
                                                <div
                                                    // data-aos="fade-right"
                                                    class="progress-container">
                                                    <div class={index.statsValue === '80%' ? "progress-bar1" : ''} id="progress-bar"></div>
                                                    <div class={index.statsValue === '90%' ? "progress-bar2" : ''} id="progress-bar"></div>
                                                    <div class={index.statsValue === '65%' ? "progress-bar3" : ''} id="progress-bar"></div>
                                                </div>
                                            </>
                                        ))
                                    }
                                </>
                            </Box>
                        </Grid>
                        <Grid item sx={12} md={6} lg={6}>
                            <img
                                // data-aos="fade-left"
                                src={data.img} alt='Image' width={'100%'} />
                        </Grid>
                    </Grid>
                ))
            }
        </>
    )
}

export default StatsTopGrid
