import {  Grid } from '@mui/material';
import ServiceCard from './ServiceCard';
import MobileDevelopemnt from '../SVGs/MobileDevelopemnt'
import WebDevelopemnt from '../SVGs/WebDevelopemnt'
import Ecommerce from '../SVGs/Ecommerce'
import UI from '../SVGs/UI';
import SEO from '../SVGs/SEO';
import UX from '../SVGs/UX';
import Flutter from '../SVGs/Flutter';
import SoftwareDeveleopment from '../SVGs/SoftwareDeveleopment';
import React from 'react'

const Offerrings = () => {
  return (
    <Grid container spacing={10}>
    <Grid item xs={12} md={4} lg={4}>
        <ServiceCard
            heading={'Custom Software Development'}
            text={'We help businesses elevate their value through custom software development, product design, QA and consultancy.'}
            item1={'Ecommerce Solutions'}
            item2={'Client Websites'}
            item3={'Client Mobile Apps'}

            item1Svg={<Ecommerce/>}
            item2Svg={<WebDevelopemnt/>}
            item3Svg={<MobileDevelopemnt/>}
        />
    </Grid>
    <Grid item xs={12} md={4} lg={4}>
        <ServiceCard
            heading={'Outsoursing Project Development'}
            text={'We help businesses elevate their value through custom software development, product design, QA and consultancy.'}
            item1={'User Interface'}
            item2={'Search Engine Optimization'}
            item3={'User Experience'}
            
            item1Svg={<UI/>}
            item2Svg={<SEO/>}
            item3Svg={<UX/>}
        />
    </Grid>
    <Grid item xs={12} md={4} lg={4}>
        <ServiceCard
            heading={'Software Product Development'}
            text={'We help businesses elevate their value through custom software development, product design, QA and consultancy.'}
            item1={'Mobile Apps Development'}
            item2={'Software-As-A-Service'}
            item3={'Desktop Applications'}

            item1Svg={<Flutter/>}
            item2Svg={<SEO/>}
            item3Svg={<SoftwareDeveleopment/>}
        />
    </Grid>
</Grid>
  )
}

export default Offerrings
