import React from 'react'
import { Typography, Box, Container } from '@mui/material'
import Marquee from "react-fast-marquee";
import SectionHeading from './SectionHeading';

const MArqueee = ({ isDarkMode, HomeMarquee }) => {
    return (
        <Box
            marginTop='5%'
        >
                <Marquee pauseOnHover={true} className='marquee'>
                    {HomeMarquee.map((data, key) => (
                        <Typography
                            variant='h5'
                            key={key}
                            color={isDarkMode ? "#5EC3EB" : "#351A5F"}
                            sx={{
                                marginX: '50px', 
                                fontSize:'2em'
                            }}
                        >
                            {data.text}
                        </Typography>
                    ))}
                </Marquee>
        </Box>
    )
}

export default MArqueee
