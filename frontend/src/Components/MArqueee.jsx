import React from 'react'
import { Typography, Box, Container } from '@mui/material'
import Marquee from "react-fast-marquee";
import SectionHeading from './SectionHeading';

const MArqueee = ({ isDarkMode, HomeMarquee }) => {
    return (
        <Box
            marginTop='5%'
            paddingY={'2%'}
            bgcolor={isDarkMode ? "#351A5F" : "#F4F4F6"}
        >
            <Container maxWidth={'xl'}>
                <Marquee pauseOnHover={true} className='marquee'>
                    {HomeMarquee.map((data, key) => (
                        <Typography
                            variant='h5'
                            key={key}
                            color={isDarkMode ? "#5EC3EB" : "#351A5F"}
                            sx={{
                                marginX: '50px', 
                            }}
                        >
                            {data.text}
                        </Typography>
                    ))}
                </Marquee>
            </Container>
        </Box>
    )
}

export default MArqueee
