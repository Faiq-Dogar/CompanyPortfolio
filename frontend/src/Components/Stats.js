import { Box, Container, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Stats_image from 'C:/Users/SURFACE/Desktop/Web/CompanyPortfolio/frontend/src/Images/section_01.jpg'
import PageNumber from './PageNumber';
import PageIcons from './PageIcons';
import StatsTopGrid from './StatsTopGrid';

const Stats = () => {

    const [increaseClient, setIncreaseClient] = useState(0);
    const [increaseProjects, setIncreaseProjects] = useState(0);
    const [increaseTeam, setIncreaseTeam] = useState(0);
    const [increasePartners, setIncreasePartners] = useState(0);

    function functionClient() {
        const targetNumber = 28;
        const increment = 1;
        let currentNumber = 0;

        const intervalId = setInterval(() => {
            currentNumber += Math.round(increment);
            setIncreaseClient(currentNumber);
            if (currentNumber >= targetNumber) {
                clearInterval(intervalId);
                setIncreaseClient(targetNumber);
            }
        }, 100);
    }
    function functionProjects() {
        const targetNumber = 32;
        const increment = 1;
        let currentNumber = 0;

        const intervalId = setInterval(() => {
            currentNumber += Math.round(increment);
            setIncreaseProjects(currentNumber);
            if (currentNumber >= targetNumber) {
                clearInterval(intervalId);
                setIncreaseProjects(targetNumber);
            }
        }, 100);
    }
    function functionTeam() {
        const targetNumber = 8;
        const increment = 1;
        let currentNumber = 0;

        const intervalId = setInterval(() => {
            currentNumber += Math.round(increment);
            setIncreaseTeam(currentNumber);
            if (currentNumber >= targetNumber) {
                clearInterval(intervalId);
                setIncreaseTeam(targetNumber);
            }
        }, 400);
    }
    function functionPartners() {
        const targetNumber = 4;
        const increment = 1;
        let currentNumber = 0;

        const intervalId = setInterval(() => {
            currentNumber += Math.round(increment);
            setIncreasePartners(currentNumber);
            if (currentNumber >= targetNumber) {
                clearInterval(intervalId);
                setIncreasePartners(targetNumber);
            }
        }, 400);
    }

    useEffect(() => {
        functionClient();
        functionProjects();
        functionTeam();
        functionPartners();

    }, [])
    return (
        <div>
            <Container maxWidth='xl'>
                <Grid container spacing={15} marginTop={"12%"}>
                    <Grid item xs={1} md={1}>
                        <PageIcons Icolor={'#351A5F'} size1={'medium'} size2={'extralarge'} size3={'medium'} size4={'medium'} size5={'medium'} size6={'medium'} size7={'medium'}/>
                    </Grid>

                    <Grid item xs={11} md={11}>
                        <Box sx={{ textAlign: 'left', paddingX: '10%', marginTop: '-10%' }}>
                            <StatsTopGrid Stats_image={Stats_image} />
                        </Box>
                        <Box sx={{ marginTop: '8%' }}>
                            <Grid container width={'75%'}>
                                <Grid item xs={12} md={3} >
                                    <Box sx={{ textAlign: 'right' }}>
                                        <Typography data-aos="fade-up" variant='h4' color={"#351A5F"} fontWeight={"bolder"}>
                                            {increaseClient} +
                                        </Typography>
                                        <Typography data-aos="fade-up" variant='body1' color={"#351A5F"}>
                                            Happy Client
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} md={3} >
                                    <Box sx={{ textAlign: 'right' }}>
                                        <Typography data-aos="fade-up" variant='h4' color={"#351A5F"} fontWeight={"bolder"} >
                                            {increaseProjects} +
                                        </Typography>
                                        <Typography data-aos="fade-up" variant='body1' color={"#351A5F"}>
                                            Projects
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} md={3}>
                                    <Box sx={{ textAlign: 'right' }}>
                                        <Typography data-aos="fade-up" variant='h4' color={"#351A5F"} fontWeight={"bolder"} >
                                            {increaseTeam} +
                                        </Typography>
                                        <Typography data-aos="fade-up" variant='body1' color={"#351A5F"}>
                                            Team Members
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} md={3} >
                                    <Box sx={{ textAlign: 'right' }}>
                                        <Typography data-aos="fade-up" variant='h4' color={"#351A5F"} fontWeight={"bolder"}>
                                            {increasePartners} +
                                        </Typography>
                                        <Typography data-aos="fade-up" variant='body1' color={"#351A5F"}>
                                            Partners
                                        </Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
                <PageNumber current={'02'} total={'06'} marginT={'2%'} />
            </Container>
        </div>
    )
}

export default Stats
