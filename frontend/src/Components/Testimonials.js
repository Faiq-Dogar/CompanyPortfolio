import { Container, Grid, Typography } from '@mui/material'
import React from 'react'
import PageIcons from './PageIcons'

const Testimonials = () => {
    return (
        <div>
            <Container maxWidth='xl'>
                <Grid container spacing={15} marginTop={"12%"}>
                    <Grid item xs={1} md={1}>
                        <PageIcons Icolor={'#351A5F'} size1={'medium'} size2={'medium'} size3={'medium'} size4={'medium'} size5={'medium'} size6={'extralarge'} size7={'medium'}/>
                    </Grid>
                    <Grid item xs={11} md={11}>
                        <Typography data-aos="fade-up" variant='h1' align='center' color={"primary"} fontWeight={"bolder"} marginTop={"5%"}>
                            Testimonials
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Testimonials
