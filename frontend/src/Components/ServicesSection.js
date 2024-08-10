import { Container, Grid } from '@mui/material'
import PageNumber from './PageNumber';
import PageIcons from './PageIcons'
import React, { useState } from 'react'
import ServicesCircle from './ServicesCircle';
import Servicesdisc from './Servicesdisc';

const Services = ({ HomeServicesCircles, HomeServicesdis, hoveredAvatar, handleMouseEnter, handleMouseLeave }) => {


    return (
        <Container maxWidth='xl'>
            <Grid container spacing={15} marginTop={"12%"}>
                <Grid item xs={1} md={1}>
                    {/* <PageIcons Icolor={'#351A5F'} size1={'medium'} size2={'medium'} size3={'extralarge'} size4={'medium'} size5={'medium'} size6={'medium'} size7={'medium'} /> */}
                </Grid>
                <Grid item xs={11} md={5}>
                    <ServicesCircle HomeServicesCircles={HomeServicesCircles} hoveredAvatar={hoveredAvatar} handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave} />
                </Grid>
                <Grid item xs={11} md={6}>
                    <Servicesdisc HomeServicesdis={HomeServicesdis}/>
                </Grid>
            </Grid>
            <PageNumber current={'03'} total={'06'} marginT={'10%'} />
        </Container>
    )
}

export default Services
