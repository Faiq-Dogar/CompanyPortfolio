import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import { Slide } from "react-awesome-reveal";
import { useMediaQuery } from '@mui/material';

const IncreasingNumbers = ({ increaseClient, increaseProjects, increaseTeam, increasePartners, isDarkMode }) => {
    const isMobileOrTablet = useMediaQuery('(max-width: 1024px)');
    return (
        <Slide direction='up'>
            <Grid container width={'75%'} marginLeft={'auto'} marginRight={'auto'}>
                <Grid item xs={12} md={3} >
                    <Box sx={{ textAlign: 'center', borderRight: "1px solid #351A5F", mt:'5%' }}>
                        <Typography
                            // data-aos="fade-up"
                            variant={ isMobileOrTablet ? 'h3' : 'h2'} color={isDarkMode ? "#5EC3EB" : "#351A5F"} fontWeight={"bolder"}>
                            {increaseClient} +
                        </Typography>
                        <Typography
                            // data-aos="fade-up"
                            variant='body1' color={isDarkMode ? "#5EC3EB" : "#351A5F"}>
                            Happy Client
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={3} >
                    <Box sx={{ textAlign: 'center', borderRight: "1px solid #351A5F", mt:'5%' }}>
                        <Typography
                            // data-aos="fade-up"
                            variant={ isMobileOrTablet ? 'h3' : 'h2'} color={isDarkMode ? "#5EC3EB" : "#351A5F"} fontWeight={"bolder"} >
                            {increaseProjects} +
                        </Typography>
                        <Typography
                            // data-aos="fade-up"
                            variant='body1' color={isDarkMode ? "#5EC3EB" : "#351A5F"} fontSize={'1em'}>
                            Projects
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Box sx={{ textAlign: 'center' , borderRight: "1px solid #351A5F", mt:'5%'}}>
                        <Typography
                            // data-aos="fade-up"
                            variant={ isMobileOrTablet ? 'h3' : 'h2'} color={isDarkMode ? "#5EC3EB" : "#351A5F"} fontWeight={"bolder"} >
                            {increaseTeam} +
                        </Typography>
                        <Typography
                            // data-aos="fade-up"
                            variant='body1' color={isDarkMode ? "#5EC3EB" : "#351A5F"}>
                            Team Members
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={3} >
                    <Box sx={{ textAlign: 'center' , mt:'5%'}}>
                        <Typography
                            // data-aos="fade-up"
                            variant={ isMobileOrTablet ? 'h3' : 'h2'} color={isDarkMode ? "#5EC3EB" : "#351A5F"} fontWeight={"bolder"}>
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
        </Slide>
    )
}

export default IncreasingNumbers
