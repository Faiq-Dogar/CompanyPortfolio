import { Avatar, Box, Container, Grid, Stack, Typography } from '@mui/material'
import StayCurrentPortraitOutlinedIcon from '@mui/icons-material/StayCurrentPortraitOutlined';
import ComputerOutlinedIcon from '@mui/icons-material/ComputerOutlined';
import AppShortcutOutlinedIcon from '@mui/icons-material/AppShortcutOutlined';
import DesktopMacOutlinedIcon from '@mui/icons-material/DesktopMacOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import PageNumber from './PageNumber';
import PageIcons from './PageIcons'
import React, { useState } from 'react'

const Services = () => {
    const SERVICES_DATA = {
        'Android App Development': "Portrait mode solutions for mobile and web applications.",
        'Web App Development': "Advanced computer solutions and hardware integration.",
        'Ui/Ux': "Shortcut app development for improved user efficiency.",
        'Desktop App Development': "Desktop and Mac applications tailored to your needs.",
        'Search Engine Optimization': "Grid view designs and layouts for optimized user experience."
    };

    const [hoveredAvatar, setHoveredAvatar] = useState('');

    const handleMouseEnter = (avatarKey) => {
        setHoveredAvatar(avatarKey);
    };

    const handleMouseLeave = () => {
        setHoveredAvatar('');
    };

    return (
        <Container maxWidth='xl'>
            <Grid container spacing={15} marginTop={"12%"}>
                <Grid item xs={1} md={1}>
                    <PageIcons Icolor={'#351A5F'} size1={'medium'} size2={'medium'} size3={'extralarge'} size4={'medium'} size5={'medium'} size6={'medium'} size7={'medium'}/>
                </Grid>
                <Grid item xs={11} md={5}>
                    <Box data-aos="fade-up" sx={{ mx: '12%', width: "400px", height: "400px", border: "1px solid grey", borderRadius: "50%", position: "relative" }}>
                        <Avatar
                            onMouseEnter={() => handleMouseEnter('Android App Development')}
                            sx={{
                                padding: "5%",
                                position: 'absolute',
                                top: '-9%',
                                right: '39%',
                                bgcolor: '#351A5F',
                                color: 'white',
                                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                                transition: 'background-color 0.3s, color 0.3s',
                                '&:hover': {
                                    backgroundColor: 'white',
                                    color: '#351A5F',
                                }
                            }}>
                            <StayCurrentPortraitOutlinedIcon fontSize='large' />
                        </Avatar>
                        <Avatar
                            onMouseEnter={() => handleMouseEnter('Web App Development')}
                            sx={{
                                padding: "5%",
                                position: 'absolute',
                                top: '30%',
                                right: '-8%',
                                bgcolor: '#351A5F',
                                color: 'white',
                                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                                transition: 'background-color 0.3s, color 0.3s',
                                '&:hover': {
                                    backgroundColor: 'white',
                                    color: '#351A5F',
                                }
                            }}>
                            <ComputerOutlinedIcon fontSize='large' />
                        </Avatar>
                        <Avatar
                            onMouseEnter={() => handleMouseEnter('Ui/Ux')}
                            sx={{
                                padding: "5%",
                                position: 'absolute',
                                top: '78%',
                                right: '7%',
                                bgcolor: '#351A5F',
                                color: 'white',
                                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                                transition: 'background-color 0.3s, color 0.3s',
                                '&:hover': {
                                    backgroundColor: 'white',
                                    color: '#351A5F',
                                }
                            }}>
                            <AppShortcutOutlinedIcon fontSize='large' />
                        </Avatar>
                        <Avatar
                        onMouseEnter={() => handleMouseEnter('Desktop App Development')}
                            sx={{
                                padding: "5%",
                                position: 'absolute',
                                top: '78%',
                                left: '7%',
                                bgcolor: '#351A5F',
                                color: 'white',
                                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                                transition: 'background-color 0.3s, color 0.3s',
                                '&:hover': {
                                    backgroundColor: 'white',
                                    color: '#351A5F',
                                }
                            }}>
                            <DesktopMacOutlinedIcon fontSize='large' />
                        </Avatar>
                        <Avatar
                        onMouseEnter={() => handleMouseEnter('Search Engine Optimization')}
                            sx={{
                                padding: "5%",
                                position: 'absolute',
                                top: '30%',
                                left: '-8%',
                                bgcolor: '#351A5F',
                                color: 'white',
                                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                                transition: 'background-color 0.3s, color 0.3s',
                                '&:hover': {
                                    backgroundColor: 'white',
                                    color: '#351A5F',
                                }
                            }}>
                            <GridViewOutlinedIcon fontSize='large' />
                        </Avatar>
                        <Box sx={{ marginY: '40%' }}>
                            <Typography variant='h5' align='center' color={"#351A5F"} fontWeight={"bolder"} mb={'3%'}>
                                {hoveredAvatar}
                            </Typography>
                            <Typography data-aos="fade-up" variant='subtitle1' align='center' color={"primary"} >
                                {hoveredAvatar ? SERVICES_DATA[hoveredAvatar] : 'Hover over the circles'}
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={11} md={6}>
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
                </Grid>
            </Grid>
            <PageNumber current={'03'} total={'06'} marginT={'10%'} />
        </Container>
    )
}

export default Services
