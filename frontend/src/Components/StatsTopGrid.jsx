import { Box, Grid, Stack, Typography } from '@mui/material'
import React from 'react'

const StatsTopGrid = ({Stats_image}) => {
    return (
        <Grid container spacing={5}>
            <Grid item sx={12} md={6} lg={6}>
                <Box>
                    <Typography data-aos="fade-right" variant='h3' color={"#351A5F"}>
                        Meet the Professionals
                    </Typography>
                    <Typography data-aos="fade-right" variant='body1' color={"#351A5F"} marginTop={'3%'}>
                        We create e-commerce solutions and slick, eye-pleasing and user-friendly online stores, that let you focus on your business.
                    </Typography>
                    <Stack direction={'row'} spacing={'56%'} marginTop={'5%'}>
                        <Typography data-aos="fade-right" variant='subtitle1' color={"#351A5F"} fontWeight={'bold'}>
                            PROSPERITY
                        </Typography>
                        <Typography data-aos="fade-right" variant='subtitle1' color={"#351A5F"} fontWeight={'bold'}>
                            80%
                        </Typography>
                    </Stack>
                    <div data-aos="fade-right" class="progress-container">
                        <div class="progress-bar1" id="progress-bar"></div>
                    </div>
                    <Stack direction={'row'} spacing={'64.5%'} marginTop={'5%'}>
                        <Typography data-aos="fade-right" variant='subtitle1' color={"#351A5F"} fontWeight={'bold'}>
                            Quality
                        </Typography>
                        <Typography data-aos="fade-right" variant='subtitle1' color={"#351A5F"} fontWeight={'bold'}>
                            90%
                        </Typography>
                    </Stack>
                    <div data-aos="fade-right" class="progress-container">
                        <div class="progress-bar2" id="progress-bar"></div>
                    </div>
                    <Stack direction={'row'} spacing={'58%'} marginTop={'5%'}>
                        <Typography data-aos="fade-right" variant='subtitle1' color={"#351A5F"} fontWeight={'bold'}>
                            GUARANTY
                        </Typography>
                        <Typography data-aos="fade-right" variant='subtitle1' color={"#351A5F"} fontWeight={'bold'}>
                            65%
                        </Typography>
                    </Stack>
                    <div data-aos="fade-right" class="progress-container">
                        <div class="progress-bar3" id="progress-bar"></div>
                    </div>
                </Box>
            </Grid>
            <Grid item sx={12} md={6} lg={6}>
                <img data-aos="fade-left" src={Stats_image} alt='Image' width={'100%'} />
            </Grid>
        </Grid>
    )
}

export default StatsTopGrid
