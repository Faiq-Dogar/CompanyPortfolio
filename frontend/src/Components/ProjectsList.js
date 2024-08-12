import React from 'react';
import { Divider, List } from '@mui/material';
import ProjectListItem from './ProjectListItem';

const ProjectsList = ({ filterProjects }) => {
    return (
        <List component="nav" aria-label="main mailbox folders">
            <ProjectListItem text='All' filterProjects={filterProjects} />
            <Divider />
            <ProjectListItem text='Web Development' filterProjects={filterProjects} />
            <Divider />
            <ProjectListItem text='Android Development' filterProjects={filterProjects} />
            <Divider />
            <ProjectListItem text='Software Development' filterProjects={filterProjects} />
            <Divider />
            <ProjectListItem text='UI/UX' filterProjects={filterProjects} />
            <Divider />
            <ProjectListItem text='SEO' filterProjects={filterProjects} />
        </List>
    );
};

export default ProjectsList;
