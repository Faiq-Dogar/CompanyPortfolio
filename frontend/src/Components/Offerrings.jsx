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
import ApiIcon from '@mui/icons-material/Api';
import WebhookIcon from '@mui/icons-material/Webhook';
import TerminalIcon from '@mui/icons-material/Terminal';
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

            item1Svg={<Ecommerce width={'74.7256267'} height={'53.67618505'}/>}
            item2Svg={<WebDevelopemnt/>}
            item3Svg={<MobileDevelopemnt  width={'71.767004'} height={'59.63292'}/>}

            circleIcon={<ApiIcon fontSize='large'/>}
            nextLink1={''}
            nextLink2={''}
            nextLink3={'MobileAppDevelopment'}
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

            circleIcon={<WebhookIcon fontSize='large'/>}
            nextLink1={''}
            nextLink2={''}
            nextLink3={''}
            />
    </Grid>
    <Grid item xs={12} md={4} lg={4}>
        <ServiceCard
            heading={'Software Product Development'}
            text={'We help businesses elevate their value through custom software development, product design, QA and consultancy.'}
            item1={'Mobile Apps Development'}
            item2={'Software-As-A-Service'}
            item3={'Desktop Applications'}

            item1Svg={<Flutter width={'65.52'} height={'55.6544768'}/>}
            item2Svg={<SEO/>}
            item3Svg={<SoftwareDeveleopment/>}

            circleIcon={<TerminalIcon fontSize='large'/>}
            nextLink1={'MobileAppDevelopment'}
            nextLink2={''}
            nextLink3={''}
        />
    </Grid>
</Grid>
  )
}

export default Offerrings
