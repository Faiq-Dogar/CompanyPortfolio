import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const Servicesdisc = () => {
    return (
        <Box data-aos="fade-up">
            <Typography variant='h6' className='section-title' align='left' color={"#351A5F"} fontWeight={"light"}>
                Services
            </Typography>
            <Stack direction="column" spacing={2}>
                <Typography variant='h2' align='left' color={"#351A5F"} fontWeight={"medium"}>
                    Comprehensive Digital Solutions
                </Typography>
                <Typography variant='subtitle1' align='left' color={"#351A5F"} fontWeight={"light"}>
                    Our comprehensive digital solutions are designed to address all aspects of your online presence. From website development to digital marketing, we offer a full suite of services tailored to meet your business needs. Leverage our expertise to enhance your brand and drive growth. Let us handle the complexity so you can focus on your core business.
                </Typography>
            </Stack>
        </Box>
    )
}

export default Servicesdisc
