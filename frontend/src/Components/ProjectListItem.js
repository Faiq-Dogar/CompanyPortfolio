import React from 'react'
import { ListItemButton, ListItemText } from '@mui/material'


const ProjectListItem = ({ text }) => {
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };
    return (
        <ListItemButton
            selected={selectedIndex === 1}
            onClick={(event) => handleListItemClick(event, 1)}
        >
            {/* <ListItemIcon>
<InboxIcon />
</ListItemIcon> */}
            <ListItemText primary={text} />
        </ListItemButton>
    )
}

export default ProjectListItem
