import React from 'react';
import { ListItemButton, ListItemText } from '@mui/material';

const ProjectListItem = ({ text, filterProjects }) => {
    const [selectedIndex, setSelectedIndex] = React.useState(null);

    const handleListItemClick = (event) => {
        filterProjects(text);
        setSelectedIndex(text);
    };

    return (
        <ListItemButton
            selected={selectedIndex === text}
            onClick={handleListItemClick}
        >
            <ListItemText primary={text} />
        </ListItemButton>
    );
};

export default ProjectListItem;
