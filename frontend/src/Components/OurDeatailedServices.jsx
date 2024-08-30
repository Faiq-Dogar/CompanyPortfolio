import { Box, Container, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import React from 'react'
import SectionHeading from './SectionHeading'
import mobile_img from './../assets/Images/Untitled design (1).png'

const OurDeatailedServices = ({ isDarkMode }) => {
    return (
        <Box sx={{
            bgcolor: '#D0E1EC',
            paddingTop:'5%',
            paddingBottom:'5%'
        }}
        >
            {/* color={isDarkMode ? "#5EC3EB" : "#351A5F"} */}
            <Container maxWidth={'lg'}>
                <Typography
                    variant='h4' align='center' color='#351A5F'>
                    What We Do
                </Typography>
                <Typography
                    variant='h2' align='center' color="#6668D2" marginTop={'2%'} marginBottom={'2%'} fontWeight={'bold'}>
                    Explore our Awesome services
                </Typography>
                <SectionHeading text={'Explore and learn more about everyhting from Web developemnt to UI/UX'} variant={'h6'} width={'100%'} alignText={'center'} fontWeight={'light'} textColor={'#351A5F'}/>
                <Grid container spacing={8} marginTop={'5%'}>
                    <Grid item xs={12} md={4} lg={4}>
                        <div className='service-list'>
                            {/* <SectionHeading text={'Mobile App Development'} variant={'h5'} width={'100%'} textColor={'#351A5F'} fontWeight={'bold'} /> */}
                            <SectionHeading text={'Mobile App Development'} variant={'h5'} width={'100%'} textColor={'#6668D2'} fontWeight={'bold'} />
                            <nav aria-label="main mailbox folders">
                                <List>
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                            <ListItemText primary="Android App Development Services" />
                                        </ListItemButton>
                                        <ListItemButton>
                                            <ListItemText primary="IOS App Development Services" />
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                            <ListItemText primary="IOS App Development Services" />
                                        </ListItemButton>
                                        <ListItemButton>
                                            <ListItemText primary="Flutter App Development Services" />
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                            <ListItemText primary="Custom Mobile App Development" />
                                        </ListItemButton>
                                        <ListItemButton>
                                            <ListItemText primary="Native Mobile App Development" />
                                        </ListItemButton>
                                    </ListItem>
                                </List>
                            </nav>
                        </div>
                        <div className='service-list'>
                            <SectionHeading text={'UI/UX Development'} variant={'h5'} width={'100%'} textColor={'#6668D2'} fontWeight={'bold'} />
                            <nav aria-label="main mailbox folders">
                                <List>
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                            <ListItemText primary="Moible App Design" />
                                        </ListItemButton>
                                        <ListItemButton>
                                            <ListItemText primary="Web App Design" />
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                            <ListItemText primary="Software Design" />
                                        </ListItemButton>
                                        <ListItemButton>
                                            <ListItemText primary="Logo Design" />
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                            <ListItemText primary="Moible App Prototyping" />
                                        </ListItemButton>
                                        <ListItemButton>
                                            <ListItemText primary="Web App Prototyping" />
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                            <ListItemText primary="Software App Prototyping" />
                                        </ListItemButton>
                                    </ListItem>
                                </List>
                            </nav>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4} lg={4} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <img src={mobile_img} alt='devberry' />
                    </Grid>
                    <Grid item xs={12} md={4} lg={4}>
                        <div className='service-list'>
                            <SectionHeading text={'Website Development'} variant={'h5'} width={'100%'} textColor={'#6668D2'} fontWeight={'bold'} />
                            <nav aria-label="main mailbox folders">
                                <List>
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                            <ListItemText primary="Mern App Development Services" />
                                        </ListItemButton>
                                        <ListItemButton>
                                            <ListItemText primary="Shopify App Development" />
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                            <ListItemText primary="Next.js App Development Services" />
                                        </ListItemButton>
                                        <ListItemButton>
                                            <ListItemText primary="Ecommerce Store Development" />
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                            <ListItemText primary="Wordpress App Development" />
                                        </ListItemButton>
                                        <ListItemButton>
                                            <ListItemText primary="Personal Portfolio Development" />
                                        </ListItemButton>
                                    </ListItem>
                                </List>
                            </nav>
                        </div>
                        <div className='service-list'>
                            <SectionHeading text={'Software Development'} variant={'h5'} width={'100%'} textColor={'#6668D2'} fontWeight={'bold'} />
                            <nav aria-label="main mailbox folders">
                                <List>
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                            <ListItemText primary=".Net (Java) App Development " />
                                        </ListItemButton>
                                        <ListItemButton>
                                            <ListItemText primary=".Net (C#) App Development " />
                                        </ListItemButton>
                                    </ListItem>
                                </List>
                            </nav>
                        </div>
                    </Grid>
                </Grid>
                <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
                    <svg width="288.507" height="301.304" className='hexagon-background-container1'>
                        <path id="hexagon" d="M 151,36 
                                           L 237,86 
                                           A 18,18 0 0 1 248,108 
                                           L 248,209 
                                           A 18,18 0 0 1 237,227 
                                           L 151,274 
                                           A 18,18 0 0 1 129,274 
                                           L 43,227 
                                           A 18,18 0 0 1 32,209 
                                           L 32,108 
                                           A 18,18 0 0 1 43,86 
                                           L 129,36 
                                           A 18,18 0 0 1 151,36"
                            fill='#FAECF7'
                        />
                    </svg>
                    <svg width="288.507" height="301.304" className='hexagon-background-container2'>
                        <path id="hexagon" d="M 151,36 
                                           L 237,86 
                                           A 18,18 0 0 1 248,108 
                                           L 248,209 
                                           A 18,18 0 0 1 237,227 
                                           L 151,274 
                                           A 18,18 0 0 1 129,274 
                                           L 43,227 
                                           A 18,18 0 0 1 32,209 
                                           L 32,108 
                                           A 18,18 0 0 1 43,86 
                                           L 129,36 
                                           A 18,18 0 0 1 151,36"
                            fill='#FAECF7'
                        />
                    </svg>
                    <svg width="288.507" height="301.304" className='hexagon-background-container3'>
                        <path id="hexagon" d="M 151,36 
                                           L 237,86 
                                           A 18,18 0 0 1 248,108 
                                           L 248,209 
                                           A 18,18 0 0 1 237,227 
                                           L 151,274 
                                           A 18,18 0 0 1 129,274 
                                           L 43,227 
                                           A 18,18 0 0 1 32,209 
                                           L 32,108 
                                           A 18,18 0 0 1 43,86 
                                           L 129,36 
                                           A 18,18 0 0 1 151,36"
                            fill='#FAECF7'
                        />
                    </svg>


                </Box>
            </Container >
        </Box>
    )
}

export default OurDeatailedServices