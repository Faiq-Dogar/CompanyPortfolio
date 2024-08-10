import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const Servicesdisc = ({ HomeServicesdis }) => {
    return (
        <>
            {HomeServicesdis !== undefined &&
                HomeServicesdis.map((data, key) => (

                    <Box
                    // data-aos="fade-up"
                    >
                        <Typography variant='h6' className='section-title' align='left' color={"#351A5F"} fontWeight={"light"}>
                            {data.preTitle}
                        </Typography>
                        <Stack direction="column" spacing={2}>
                            <Typography variant='h2' align='left' color={"#351A5F"} fontWeight={"medium"}>
                                {data.title}
                            </Typography>
                            <Typography variant='subtitle1' align='left' color={"#351A5F"} fontWeight={"light"}>
                                {data.dis}
                            </Typography>
                        </Stack>
                    </Box>
                ))
            }
        </>
    )
}

export default Servicesdisc
