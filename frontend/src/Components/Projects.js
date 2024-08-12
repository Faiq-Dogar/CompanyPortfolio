import { Box, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import ProjectsList from './ProjectsList';
import ProjectsImageGrid from './ProjectsImageGrid';
import PageNumber from './PageNumber';

const Projects = ({ isDarkMode, HomeProjects }) => {
    const [filteredProjects, setFilteredProjects] = useState(HomeProjects);

    const filterProjects = (type) => {
        if (type === 'All') {
            setFilteredProjects(HomeProjects);
        } else {
            setFilteredProjects(HomeProjects.filter(project => project.type === type));
        }
    };

    return (
        <div>
            <Container maxWidth='xl'>
                <Grid container spacing={15} marginTop={"12%"}>
                    <Grid item xs={1} md={1}>
                        {/* <PageIcons Icolor={'#351A5F'} size1={'medium'} size2={'medium'} size3={'medium'} size4={'extralarge'} size5={'medium'} size6={'medium'} size7={'medium'}/> */}
                    </Grid>
                    <Grid item xs={11} md={11}>
                        <Typography
                            variant='h2' align='center' color={isDarkMode ? "#5EC3EB" : "#351A5F"} marginTop={"-15%"}>
                            Projects
                        </Typography>
                        <Box sx={{ marginTop: '3%' }}>
                            <Grid container spacing={5} marginTop={'3%'}>
                                <Grid item xs={1} md={5}>
                                    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', marginTop: '15%' }}>
                                        <ProjectsList filterProjects={filterProjects} />
                                    </Box>
                                </Grid>
                                <Grid item xs={1} md={7}>
                                    <ProjectsImageGrid projects={filteredProjects} />
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
                <PageNumber isDarkMode={isDarkMode} current={'04'} total={'06'} marginT={'1%'} />
            </Container>
        </div>
    );
};

export default Projects;
