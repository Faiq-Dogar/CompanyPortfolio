import { Grid } from '@mui/material';
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

const Offerrings = ({ ServiceOfferingsList }) => {
    return (
        <>
            {
                ServiceOfferingsList !== undefined &&

                <Grid container spacing={10}>
                    {ServiceOfferingsList.map((data, key) => (
                        <>
                            <Grid item xs={12} md={4} lg={4} key={key}>
                                <ServiceCard
                                    prehead={data.preTitle}
                                    heading={data.title}
                                    text={data.dis}
                                    itemList={data.serviceList}

                                    item1Svg={<Ecommerce width={'74.7256267'} height={'53.67618505'} />}
                                    item2Svg={<WebDevelopemnt />}
                                    item3Svg={<MobileDevelopemnt width={'71.767004'} height={'59.63292'} />}

                                    circleIcon={data.icon}
                                    nextLink1={''}
                                    nextLink2={''}
                                    nextLink3={'MobileAppDevelopment'}
                                />
                            </Grid>
                        </>
                    ))}
                </Grid>
            }
        </>
    )
}

export default Offerrings
