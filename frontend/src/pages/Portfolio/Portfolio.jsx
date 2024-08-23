import React from 'react'
import { Data } from './../../db/data'
import { Box, Container, Typography } from '@mui/material'
import BreadCrum from '../../Components/BreadCrum'
import CenterDis from '../../Components/CenterDis'
import ServicesTable from '../../Components/ServicesTable'
import SectionHeading from '../../Components/SectionHeading'

const Portfolio = ({ PortfolioHero, isDarkMode }) => {
    const newList = Data.filter((v) => v.page == '/Portfolio')
    return (
        <>
            {newList.map(
                ({
                    PortfolioHeroSection,
                    PrtfolioProjects
                }) => (
                    <>
                        <div
                            style={{
                                backgroundImage: `url(${PortfolioHero})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                paddingBottom: '6%',
                                paddingTop: '2%'
                            }}
                        >
                            <Container maxWidth={"xl"} >
                                <BreadCrum textColor={'white'} previous={"Home"} now={"Contact Us"} />
                                {PortfolioHeroSection.map((data, key) => (
                                    <div key={key}>
                                        <Typography variant='h1' align='center' color={"white"} fontWeight={"bolder"} marginTop={'3%'}>
                                            {data.title}
                                        </Typography>
                                        <CenterDis textColor={'white'} text={data.para} />
                                    </div>
                                ))}
                            </Container>
                        </div>
                        <Container maxWidth={'lg'}>
                            <Box sx={
                                { marginY: '7%' }
                            }>
                                <SectionHeading text={'Introduce Our Incredible Projects'} variant={'h4'} width={'100%'} alignText={'left'} textcolor={isDarkMode ? "#5EC3EB" : "#351A5F"} fontWeight={'bold'} />
                                <Box sx={
                                    { marginY: '2%', width:'55%' }
                                }>
                                    <SectionHeading text={'Web application providing access to the decentralised peer to peer network through anonymously created accounts with optional biometric security.'} variant={'body1'} width={'100%'} alignText={'left'} textcolor={isDarkMode ? "#5EC3EB" : "#351A5F"} fontWeight={'light'} />
                                </Box>
                                <ServicesTable PrtfolioProjects={PrtfolioProjects}/>
                            </Box>

                        </Container>
                    </>
                )
            )}
        </>
    )
}

export default Portfolio
