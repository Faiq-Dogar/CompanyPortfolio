import { Box, Stack, Typography } from '@mui/material'
import { Slide } from "react-awesome-reveal";
import { useMediaQuery } from '@mui/material';
import React from 'react'

const Servicesdisc = ({ Servicesdis, isDarkMode, textColor }) => {
    const isMobileOrTablet = useMediaQuery('(max-width: 1024px)');
    return (
        <>
            {Servicesdis !== undefined &&
                Servicesdis.map((data, key) => (
                    <Slide direction='right'>
                        <Box
                        >
                            {/* <Typography variant='h6' className='section-title' align='left' color={isDarkMode ? "#5EC3EB" : "#351A5F"} fontWeight={"light"}> */}
                            <Typography variant='h6' className='section-title' align='left' color={isDarkMode ? "#5EC3EB" : textColor} fontWeight={"light"}>
                                {data.preTitle}
                            </Typography>
                            <Stack direction="column" spacing={2}>
                                {/* <Typography variant={isMobileOrTablet ? 'h3' : 'h2'} align='left' color={isDarkMode ? "#5EC3EB" : "#351A5F"} fontWeight={"medium"}> */}
                                <Typography variant={isMobileOrTablet ? 'h3' : 'h2'} align='left' color="#351A5F" fontWeight={"bold"}>
                                    {data.title}
                                </Typography>
                                {/* <Typography variant='subtitle1' align='left' color={isDarkMode ? "#5EC3EB" : "#351A5F"} fontWeight={"light"}> */}
                                <Typography variant='subtitle1' align='left' color={isDarkMode ? "#ffffff" : textColor} fontWeight={"light"}>
                                    {data.dis}
                                </Typography>
                            </Stack>
                        </Box>
                    </Slide>
                ))
            }
        </>
    )
}

export default Servicesdisc
// color={isDarkMode ? "#5EC3EB" : "#351A5F"}