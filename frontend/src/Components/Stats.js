import { Box, Container, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import PageNumber from './PageNumber';
import PageIcons from './PageIcons';
import StatsTopGrid from './StatsTopGrid';
import IncreasingNumbers from './IncreasingNumbers';
import PercentageCircle from './PercentageCircle';

const Stats = ({ isDarkMode, HomeStatsSection1 }) => {

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

        <div >
            <Container maxWidth='xl'>
                        <Box sx={{ textAlign: 'left', paddingX: '10%', marginTop: '12%' }}>
                            <StatsTopGrid StatsSection1={HomeStatsSection1} isDarkMode={isDarkMode} />
                        </Box>
                        <Box sx={{ marginTop: '8%' }}>
                            <IncreasingNumbers increaseClient={increaseClient} increaseProjects={increaseProjects} increaseTeam={increaseTeam} increasePartners={increasePartners} isDarkMode={isDarkMode} />
                            {/* <Grid container spacing={10}>
                                <Grid item xs={5} md={6} lg={3}>
                                    <PercentageCircle percent={100} title={'Security'} disc={'Years of cooperation with both corporations and startups'} inversePercent={0} />
                                </Grid>
                                <Grid item xs={6} md={6} lg={3}>
                                    <PercentageCircle percent={75} title={'Prosperity'} disc={'Years of cooperation with both corporations and startups'} inversePercent={25} />
                                </Grid>
                                <Grid item xs={6} md={6} lg={3}>
                                    <PercentageCircle percent={90} title={'Guarantee'} disc={'Years of cooperation with both corporations and startups'} inversePercent={10} />
                                </Grid>
                                <Grid item xs={6} md={6} lg={3}>
                                    <PercentageCircle percent={60} title={'Quality'} disc={'Years of cooperation with both corporations and startups'} inversePercent={40} />
                                </Grid>
                            </Grid> */}
                        </Box>
            </Container>
        </div>

    )
}

export default Stats
