import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import BreadCrum from '../../Components/BreadCrum'
import { useLocation } from 'react-router-dom'
import SectionHeading from '../../Components/SectionHeading'
import MemberMinorDetails from '../../Components/MemberMinorDetails'

const SingleTeam = ({ serviceHero, InstagramIcon, FacebookIcon, GoogleIcon }) => {
    const location = useLocation();
    const { Member } = location.state;

    return (
        <>
            <div
                style={{
                    backgroundImage: `url(${serviceHero})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    paddingBottom: '11%',
                    paddingTop: '2%'
                }}
            >
                <Container maxWidth={"xl"} >
                    {Member.map((data, key) => (
                        <>
                            <BreadCrum textColor={'#351A5F'} previous={"Home"} now={`Team / ${data.Pname}`} />
                            <Typography variant='h1' align='center' color={"#351A5F"} fontWeight={"bolder"} marginTop={'3%'}>
                                Team Member
                            </Typography>
                        </>
                    ))}
                </Container>
            </div>
            <Container maxWidth={'lg'}>
                <MemberMinorDetails Member={Member} InstagramIcon={InstagramIcon} FacebookIcon={FacebookIcon} GoogleIcon={GoogleIcon} />
            </Container>
        </>
    )
}

export default SingleTeam




