import React from 'react'
import BreadCrum from './../../Components/BreadCrum'
import CenterDis from './../../Components/CenterDis'
import { Data } from './../../db/data'
import { Box, Container, Divider, Grid, Stack, Typography } from '@mui/material'
import ContactForm from '../../Components/ContactForm'
import Calender from '../../Components/Calender'

const Contact = ({ isDarkMode, ContactHero }) => {
    const newList = Data.filter((v) => v.page == '/Contact')
    console.log('contact List: ', newList)
    return (
        <>
            {newList.map(
                ({
                    ContactHeroSection,
                    FirstSectionData,
                    FirstSectionData2
                }) => (
                    <>
                        <div
                            style={{
                                backgroundImage: `url(${ContactHero})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                paddingBottom: '6%',
                                paddingTop: '2%'
                            }}
                        >
                            <Container maxWidth={"xl"} >
                                <BreadCrum textColor={'white'} previous={"Home"} now={"Contact Us"} />
                                {ContactHeroSection.map((data, key) => (
                                    <div key={key}>
                                        <Typography data-aos="fade-up" variant='h1' align='center' color={'white'} fontWeight={"bolder"} marginTop={'3%'}>
                                            {data.title}
                                        </Typography>
                                        <CenterDis textColor={'white'} text={data.para} />
                                    </div>
                                ))}
                            </Container>
                        </div>
                        <Container maxWidth={'lg'}>
                            <Box
                                marginTop='10%'
                            >
                                <Grid container spacing={10}>
                                    <Grid item xs={12} md={12} lg={6}>
                                        <Calender isDarkMode={isDarkMode}/>
                                    </Grid>
                                    <Grid item xs={12} md={12} lg={6}  data-aos="fade-left" >
                                        {FirstSectionData.map((data, key) => (
                                            <>
                                                <Typography variant='h6' className='section-title' align='left' color={isDarkMode ? "#5EC3EB" : "#351A5F"} fontWeight={"light"}>
                                                    {data.sectionName}
                                                </Typography>
                                                <Typography variant='h3' align='left' color={isDarkMode ? "#5EC3EB" : "#351A5F"}  marginY={'3%'}>
                                                    {data.title}
                                                </Typography>
                                                <Typography variant='body1' align='left' color={isDarkMode ? "#5EC3EB" : "#351A5F"} marginY={'5%'}>
                                                    {data.para}
                                                </Typography>
                                            </>
                                        ))}
                                        <Box
                                            sx={
                                                { marginY: '7%' }
                                            }>
                                            {FirstSectionData2.map((data, key) => (
                                                <>
                                                    <Stack direction={'row'} spacing={5} key={key} marginTop='5%'>
                                                        <Box
                                                            sx={
                                                                {
                                                                    width: '60px',
                                                                    height: '60px',
                                                                    backgroundColor: 'white',
                                                                    display: 'flex',
                                                                    justifyContent: 'center',
                                                                    alignItems: 'center',
                                                                    borderRadius: '10%',
                                                                    color: '#6A4BC4',
                                                                    boxShadow: '0px 6px 24px 0px rgba(0, 0, 0, 0.1)'
                                                                }
                                                            }
                                                        >
                                                            {data.icon}
                                                        </Box>
                                                        <Box>
                                                            <Typography variant='subtitle1' fontWeight={'bold'}>
                                                                {data.title}
                                                            </Typography>
                                                            <Typography variant='body1' fontWeight={'light'}>
                                                                {data.para}
                                                            </Typography>
                                                        </Box>
                                                    </Stack>
                                                </>
                                            ))}
                                        </Box>
                                        <Divider/>
                                        <ContactForm isDarkMode={isDarkMode}/>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Container>

                    </>
                )
            )}
        </>
    )
}

export default Contact
