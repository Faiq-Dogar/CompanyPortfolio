import React from 'react'
import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material'
import SectionHeading from './SectionHeading'


const MemberMinorDetails = ({Member, InstagramIcon, FacebookIcon, GoogleIcon}) => {
    return (
        <div>
            {Member.map((data, key) => (
                <>
                    <Grid container spacing={5} my={'5%'}>
                        <Grid item xs={12} md={12} lg={3} sx={{ display: 'flex', alignItems: 'center' }}>
                            <Box>
                                <Typography gutterBottom variant="h3" component="div" textAlign={"left"} fontWeight={'bold'}>
                                    {data.Pname}
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary" textAlign={"left"}>
                                    {data.Pdesi}
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={12} lg={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Box
                                sx={{
                                    width: '410px',
                                    height: '410px',
                                    borderRadius: '50%',
                                    boxShadow: 'inset 0px 10px 12px -5px rgba(0, 0, 0, 0.2)',
                                    position: 'relative',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                <Box sx={{ width: '350px', height: '350px', border: '1px solid white', borderRadius: '50%', position: 'relative' }} >
                                    <img
                                        src={data.Pimage} alt='user Image'
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            borderRadius: '50%'
                                        }}
                                    />
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={12} lg={3} sx={{ display: 'flex', alignItems: 'center' }}>
                            <Stack direction={'column'} spacing={3} >
                                <SectionHeading text={'Experience:10 Years'} variant={'body1'} width={'100%'} alignText={'left'} textColor={"#351A5F"} fontWeight={''} />
                                <SectionHeading text={'Email:christina.van@mail.com'} variant={'body1'} width={'100%'} alignText={'left'} textColor={"#351A5F"} fontWeight={''} />
                                <SectionHeading text={'Phone:+8 (456) 478 596 123'} variant={'body1'} width={'100%'} alignText={'left'} textColor={"#351A5F"} fontWeight={''} />
                                <SectionHeading text={'Fax:+8 (456) 478 596 124'} variant={'body1'} width={'100%'} alignText={'left'} textColor={"#351A5F"} fontWeight={''} />
                                <Stack direction={'row'} spacing={3} >
                                    <Button
                                        className='team-member-social-icons'
                                        color='primary'
                                        size='small'
                                        variant='contained'
                                        sx={{
                                            width: '40px',
                                            height: '40px',
                                            borderRadius: '50%',
                                            minWidth: 'unset',
                                            padding: '0',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}
                                    >
                                        <FacebookIcon fontSize='small' />
                                    </Button>

                                    <Button
                                        className='team-member-social-icons'
                                        color='primary'
                                        size='small'
                                        variant='contained'
                                        sx={{
                                            width: '40px',
                                            height: '40px',
                                            borderRadius: '50%',
                                            minWidth: 'unset',
                                            padding: '0',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            marginLeft: '16px'
                                        }}
                                    >
                                        <GoogleIcon fontSize='small' />
                                    </Button>

                                    <Button
                                        className='team-member-social-icons'
                                        color='primary'
                                        size='small'
                                        variant='contained'
                                        sx={{
                                            width: '40px',
                                            height: '40px',
                                            borderRadius: '50%',
                                            minWidth: 'unset',
                                            padding: '0',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}
                                    >
                                        <InstagramIcon fontSize='small' />
                                    </Button>
                                </Stack>
                            </Stack>
                        </Grid>
                    </Grid>
                </>
            ))}
        </div>
    )
}

export default MemberMinorDetails
