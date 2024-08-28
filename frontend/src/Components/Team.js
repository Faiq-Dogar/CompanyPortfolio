import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import TeamCard from './TeamCard'
// import PageIcons from './PageIcons'
// import PageNumber from './PageNumber'

const Team = ({ HomeTeamMembers, Team_person_1, Team_person_2, Team_person_3, Team_person_4, isDarkMode }) => {
    return (
        <div>
            {HomeTeamMembers !== undefined &&
                <Container maxWidth='xl'>
                    <Typography
                        variant='h2' align='center' color={isDarkMode ? "#5EC3EB" : "#351A5F"} marginTop={"13%"}>
                        Our Team
                    </Typography>
                    <Typography
                        // data-aos="fade-up" 
                        variant='body1' align='center' color={isDarkMode ? "#5EC3EB" : "#351A5F"} marginTop={"2%"}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Typography>
                    <Box
                        // data-aos="fade-up" 
                        sx={{ paddingX: "5%" }}>

                        <Grid container spacing={4} marginTop={"7%"}>
                            {HomeTeamMembers.map((data, key) => (
                                <Grid item xs={12} md={4}>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <TeamCard isDarkMode={isDarkMode} person_image={data.profile} name={data.name} designation={data.designation} facebookAccount={data.facebookAccount} gmailAccount={data.gmailAccount} instagramAccount={data.instagramAccount} />
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Container>
            }
        </div>
    )
}

export default Team
