import React from 'react'
import { Divider, List} from '@mui/material'
import ProjectListItem from './ProjectListItem'

const projectsList = () => {
    return (
        <List component="nav" aria-label="main mailbox folders">
            <ProjectListItem text={'All'} />
            <Divider />
            <ProjectListItem text={'Web Development'} />
            <Divider />
            <ProjectListItem text={'Android Development'} />
            <Divider />
            <ProjectListItem text={'Software Development'}/>
            <Divider />
            <ProjectListItem text={'UI/UX'}/>
            <Divider />
            <ProjectListItem text={'SEO'}/>
        </List>

    )
}

export default projectsList
