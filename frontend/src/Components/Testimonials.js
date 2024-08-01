import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import PageIcons from './PageIcons'
import TestimonialCard from './TestimonialCard'
import {Data} from './../db/data'
import { useLocation } from 'react-router-dom';

const Testimonials = () => {
    // const page = useParams();
    // const location = useLocation();
    // const page = location.pathname;
    // console.log('path: ', page);

    // const newList = Data.filter((v) => v.page === page);
    return (
        // {newList.map(
        //     ({
        //         HomeTestimoials
        //       }) => (
        //         <>
        //         </>
        //         )
        // )}
        <div>
            <Container maxWidth='xl'>
                <Grid container spacing={15} marginTop={"12%"}>
                    <Grid item xs={1} md={1}>
                        <PageIcons Icolor={'#351A5F'} size1={'medium'} size2={'medium'} size3={'medium'} size4={'medium'} size5={'medium'} size6={'extralarge'} size7={'medium'} />
                    </Grid>
                    <Grid item xs={11} md={11}>
                        <Typography data-aos="fade-up" variant='h2' align='center' color={"#351A5F"} marginTop={"-15%"}>
                            Testimonials
                        </Typography>
                        <Box sx={
                            {
                                marginTop:'15%'
                            }
                        }>
                            <TestimonialCard/>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Testimonials
