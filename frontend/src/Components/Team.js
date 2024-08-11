import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import PageIcons from './PageIcons'
import TeamCard from './TeamCard'
import PageNumber from './PageNumber'

const Team = ({ HomeTeamMembers, Team_person_1, Team_person_2, Team_person_3, Team_person_4, isDarkMode }) => {
    return (
        <div>
            {HomeTeamMembers !== undefined &&
                <Container maxWidth='xl'>
                    <Grid container spacing={15} marginTop={"3%"}>
                        <Grid item xs={1} md={1} marginTop={"9%"}>
                            {/* <PageIcons Icolor={'#351A5F'} size1={'medium'} size2={'medium'} size3={'medium'} size4={'medium'} size5={'extralarge'} size6={'medium'} size7={'medium'}/> */}
                        </Grid>
                        <Grid item xs={11} md={11}>
                            <Typography
                                // data-aos="fade-up" 
                                variant='h2' align='center' color={isDarkMode ? "#5EC3EB" : "#351A5F"} >
                                Our Team
                            </Typography>
                            <Typography
                                // data-aos="fade-up" 
                                variant='body1' align='center' color={isDarkMode ? "#5EC3EB" : "#351A5F"} marginTop={"2%"}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </Typography>
                            <Box
                                // data-aos="fade-up" 
                                sx={{ maxWidth: "90%", paddingX: "5%" }}>

                                <Grid container spacing={4} marginTop={"7%"}>
                                    {HomeTeamMembers.map((data, key) => (
                                        <Grid item xs={12} md={4}>
                                            <TeamCard isDarkMode={isDarkMode} person_image={data.profile} name={data.name} designation={data.designation} facebookAccount={data.facebookAccount} gmailAccount={data.gmailAccount} instagramAccount={data.instagramAccount}/>
                                        </Grid>
                                    ))}
                                    {/* <Grid item xs={12} md={4}>
                                        <TeamCard person_image={Team_person_2} name={"Chaudhary Abdullah"} designation={"Java developer"} />
                                    </Grid>
                                    <Grid item xs={12} md={4}>
                                        <TeamCard person_image={Team_person_3} name={"Zohaib Yasin"} designation={"Android developer"} />
                                    </Grid> */}
                                    {/* <Grid item xs={12} md={3}>
                                    <TeamCard person_image={Team_person_4} name={"Shabana"} designation={"UI/US designer"} />
                                </Grid> */}
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                    <PageNumber isDarkMode={isDarkMode} current={'05'} total={'06'} marginT={'9.5%'} />
                </Container>
            }
        </div>
    )
}

export default Team
