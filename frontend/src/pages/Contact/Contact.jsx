import React from 'react'
import BreadCrum from './../../Components/BreadCrum'
import CenterDis from './../../Components/CenterDis'
import { Container, Typography } from '@mui/material'

const Contact = ({ ContactHero }) => {
    return (
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
                    <Typography data-aos="fade-up" variant='h1' align='center' color={"white"} fontWeight={"bolder"} marginTop={'3%'}>
                        Contact Us
                    </Typography>
                    <CenterDis textColor={'white'} text={'Lorem ipsum proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat sagittis sem nibh id elit.'} />
                </Container>
            </div>
        </>
    )
}

export default Contact
