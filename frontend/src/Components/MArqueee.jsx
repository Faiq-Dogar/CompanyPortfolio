import React from 'react'
import { Typography, Box, Container } from '@mui/material'

const MArqueee = ({ isDarkMode, HomeMarquee }) => {
    return (
        <Box
            marginTop='5%'
            paddingY={'2%'}
            bgcolor={isDarkMode ? "#351A5F" : "#F4F4F6"}
        >
            <Container maxWidth={'xl'}>

                <div className='text-wrapper'>
                    {HomeMarquee.map((data, key) => (
                        <Typography variant='h5' key={key} color={isDarkMode ? "#5EC3EB" : "#351A5F"} className='typoh4'>
                            {data.text}
                        </Typography>
                    ))}
                    {/* <Typography variant='h4' color={isDarkMode ? "#5EC3EB" : "#351A5F"} className='typoh4'>
                        MONGO
                    </Typography>
                    <Typography variant='h4' color={isDarkMode ? "#5EC3EB" : "#351A5F"} className='typoh4'>
                        EXPRESS
                    </Typography>
                    <Typography variant='h4' color={isDarkMode ? "#5EC3EB" : "#351A5F"} className='typoh4'>
                        REACT
                    </Typography>
                    <Typography variant='h4' color={isDarkMode ? "#5EC3EB" : "#351A5F"} className='typoh4'>
                        NODE
                    </Typography>
                    <Typography variant='h4' color={isDarkMode ? "#5EC3EB" : "#351A5F"} className='typoh4'>
                        NEXT
                    </Typography> */}
                </div>
            </Container>
        </Box>
    )
}

export default MArqueee
