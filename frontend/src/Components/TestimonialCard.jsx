import { Box, Grid, Stack, Typography } from '@mui/material'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import React from 'react'

const TestimonialCard = () => {
    return (
        <div className='testimonial-card-container'>
            <Grid container spacing={3} mt={'5%'}>
                <Grid item xs={1} md={3}>
                    <Box
                        sx={{
                            width: '100px',
                            height: '100px',
                            borderRadius: '50%',
                            boxShadow: 'inset 0px 10px 12px -5px rgba(0, 0, 0, 0.2)',
                            marginLeft: '-20%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            overflow: 'hidden'
                        }}
                    >
                        <FormatQuoteIcon sx={{ color: '#54E0C4', fontSize: '5em' }} />
                    </Box>
                </Grid>
                <Grid item xs={1} md={9}>
                    <Stack direction={'column'} spacing={2} textAlign={'left'}>
                        <Typography variant='subtitle1' color={'#54E0C4'}>
                            Augest 1, 2024
                        </Typography>
                        <Typography variant='body1' color={'primary'}>
                            We were looking for a reliable partner to develop a custom web application for our e-commerce business.DevBerrt exceeded our expectations in every way.
                        </Typography>
                        <Stack direction={'row'} spacing={2} textAlign={'left'}>
                            <Typography variant='h6' color={'primary'} sx={{ flex: 1 }}>
                                Harry Potter
                            </Typography>
                            <Box
                                sx={{
                                    width: '100px',
                                    height: '100px',
                                    borderRadius: '50%',
                                    boxShadow: 'inset 0px 10px 12px -5px rgba(0, 0, 0, 0.2)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    overflow: 'hidden',
                                }}
                            >
                                <FormatQuoteIcon sx={{ color: '#54E0C4', fontSize: '5em' }} />
                            </Box>
                        </Stack>
                    </Stack>
                </Grid>

            </Grid>
        </div>
    )
}

export default TestimonialCard
