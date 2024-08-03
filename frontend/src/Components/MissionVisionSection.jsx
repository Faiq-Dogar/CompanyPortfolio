import { Box, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import MissionVisionGrid from './MissionVisionGrid'

const MissionVisionSection = ({ Mission_image, Vision_image, Perspective_image, Strategy_image }) => {
    return (
        <Grid container spacing={15}>
            <Grid item
                sx={12}
                md={6}
                lg={6}
            >
                <MissionVisionGrid Mission_image={Mission_image} Vision_image={Vision_image} Perspective_image={Perspective_image} Strategy_image={Strategy_image} />
            </Grid>
            <Grid item
                sx={12}
                md={6}
                lg={6}
                alignItems={'center'}
                display={'flex'}
            >
                <Box>
                    <Typography
                        variant='h3'
                        color={"#351A5F"}
                    >
                        Your Partner for Software Innovation
                    </Typography>
                    <Typography
                        variant='body1'
                        color={"#351A5F"}
                        marginTop={'5%'}
                    >
                        Engitech is the partner of choice for many of the world’s leading enterprises, SMEs and technology challengers. We help businesses elevate their value through custom software development, product design, QA and consultancy services.
                    </Typography>
                    <Typography
                        variant='subtitle1'
                        color={"#351A5F"}
                        marginTop={'5%'}
                        fontWeight={'bold'}
                    >
                        <i>We can help to maintain and modernize your IT infrastructure and solve various infrastructure-specific issues a business may face.</i>
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    )
}

export default MissionVisionSection
