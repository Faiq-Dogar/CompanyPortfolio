import React from 'react';
import { Container, Grid, Typography, Paper, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

// const StyledPaper = styled(Paper)(({ theme, textAlign }) => ({
//     textAlign: textAlign,
//     padding: theme.spacing(3),
// }));

const SingleServiceDataDisplay = ({ SingleServicelist }) => {
    return (
        <>
            {SingleServicelist !== undefined &&
                SingleServicelist.map((service, index) => {
                    const isEven = index % 2 === 0;
                    return (
                        <div key={index}>
                            <Box textAlign={isEven ? 'left' : 'right'}>
                                {isEven ? (
                                    <Box
                                        paddingY={'5%'}
                                    >
                                        <Container maxWidth={'lg'}>
                                            <Grid container spacing={3} alignItems="center">
                                                <Grid item xs={12} md={6}>
                                                    <Typography variant="h4" component="h3" gutterBottom>
                                                        {service?.title}
                                                    </Typography>
                                                    {service?.para && <Typography>{service?.para}</Typography>}
                                                    {service?.para1 && <Typography>{service?.para1}</Typography>}
                                                    {service?.para2 && <Typography>{service?.para2}</Typography>}
                                                </Grid>
                                                <Grid item xs={12} md={6}>
                                                    {service.img_svg}
                                                </Grid>
                                            </Grid>
                                        </Container>
                                    </Box>
                                ) : (
                                    <Box
                                        paddingY={'5%'}
                                        bgcolor={'#F4F4F6'}
                                    >
                                        <Container maxWidth={'lg'}>
                                            <Grid container spacing={3} alignItems="center">
                                                <Grid item xs={12} md={6}>
                                                    {service.img_svg}
                                                </Grid>
                                                <Grid item xs={12} md={6}>
                                                    <Typography variant="h4" component="h3" color="textPrimary" gutterBottom>
                                                        {service?.title}
                                                    </Typography>
                                                    {service?.para && <Typography>{service?.para}</Typography>}
                                                    {service?.para1 && <Typography>{service?.para1}</Typography>}
                                                    {service?.para2 && <Typography>{service?.para2}</Typography>}
                                                </Grid>
                                            </Grid>
                                        </Container>
                                    </Box>
                                )}
                            </Box>
                        </div >
                    );
                })}
        </>
    );
};

export default SingleServiceDataDisplay;
