import React from 'react'
import { Box, Grid, Typography } from '@mui/material'

const IncreasingNumbers = ({ increaseClient, increaseProjects, increaseTeam, increasePartners, isDarkMode }) => {
    return (
        <Grid container width={'75%'} marginLeft={'auto'} marginRight={'auto'}>
            <Grid item xs={5} md={3} >
                <Box sx={{ textAlign: 'center' }}>
                    <Typography
                        // data-aos="fade-up"
                        variant='h4' color={isDarkMode ? "#5EC3EB" : "#351A5F"} fontWeight={"bolder"}>
                        {increaseClient} +
                    </Typography>
                    <Typography
                        // data-aos="fade-up"
                        variant='body1' color={isDarkMode ? "#5EC3EB" : "#351A5F"}>
                        Happy Client
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={5} md={3} >
                <Box sx={{ textAlign: 'center' }}>
                    <Typography
                        // data-aos="fade-up"
                        variant='h4' color={isDarkMode ? "#5EC3EB" : "#351A5F"} fontWeight={"bolder"} >
                        {increaseProjects} +
                    </Typography>
                    <Typography
                        // data-aos="fade-up"
                        variant='body1' color={isDarkMode ? "#5EC3EB" : "#351A5F"}>
                        Projects
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={5} md={3}>
                <Box sx={{ textAlign: 'center' }}>
                    <Typography
                        // data-aos="fade-up"
                        variant='h4' color={isDarkMode ? "#5EC3EB" : "#351A5F"} fontWeight={"bolder"} >
                        {increaseTeam} +
                    </Typography>
                    <Typography
                        // data-aos="fade-up"
                        variant='body1' color={isDarkMode ? "#5EC3EB" : "#351A5F"}>
                        Team Members
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={5} md={3} >
                <Box sx={{ textAlign: 'center' }}>
                    <Typography
                        // data-aos="fade-up"
                        variant='h4' color={isDarkMode ? "#5EC3EB" : "#351A5F"} fontWeight={"bolder"}>
                        {increasePartners} +
                    </Typography>
                    <Typography
                        // data-aos="fade-up" 
                        variant='body1' color={isDarkMode ? "#5EC3EB" : "#351A5F"}>
                        Partners
                    </Typography>
                </Box>
            </Grid>
        </Grid>

    )
}

export default IncreasingNumbers
