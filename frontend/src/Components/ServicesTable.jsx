import React from 'react'
import SectionHeading from './SectionHeading'
import PropTypes from 'prop-types';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Tab, Tabs } from '@mui/material';


const ServicesTable = () => {
    function CustomTabPanel(props) {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
            </div>
        );
    }

    CustomTabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired,
    };

    function a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className='popup'>
            <SectionHeading text={'Services'} variant={'h3'} width={'100%'} alignText={'center'} textColor={"#351A5F"} fontWeight={'medium'} />
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Mobile Development" {...a11yProps(0)} />
                        <Tab label="Website Development" {...a11yProps(1)} />
                        <Tab label="Desktop Development" {...a11yProps(2)} />
                        <Tab label="UI/UX " {...a11yProps(3)} />
                        <Tab label="SEO" {...a11yProps(4)} />
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    <nav aria-label="main mailbox folders">
                        <List>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {/* <InboxIcon /> */}
                                    </ListItemIcon>
                                    <ListItemText primary="Custom App Development" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {/* <InboxIcon /> */}
                                    </ListItemIcon>
                                    <ListItemText primary="Flutter App Development" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {/* <DraftsIcon /> */}
                                    </ListItemIcon>
                                    <ListItemText primary="IOS App Developement" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {/* <DraftsIcon /> */}
                                    </ListItemIcon>
                                    <ListItemText primary="Andoid App Consultancy" />
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </nav>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <nav aria-label="main mailbox folders">
                        <List>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {/* <InboxIcon /> */}
                                    </ListItemIcon>
                                    <ListItemText primary="React App Development" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {/* <InboxIcon /> */}
                                    </ListItemIcon>
                                    <ListItemText primary="Mern App Development" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {/* <DraftsIcon /> */}
                                    </ListItemIcon>
                                    <ListItemText primary="WordPress" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {/* <DraftsIcon /> */}
                                    </ListItemIcon>
                                    <ListItemText primary="Personal Portfolios" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {/* <DraftsIcon /> */}
                                    </ListItemIcon>
                                    <ListItemText primary="E-commerce Stores" />
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </nav>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    <nav aria-label="main mailbox folders">
                        <List>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {/* <InboxIcon /> */}
                                    </ListItemIcon>
                                    <ListItemText primary=".Net (Java) App Development " />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {/* <InboxIcon /> */}
                                    </ListItemIcon>
                                    <ListItemText primary=".Net (C#) App Development " />
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </nav>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={3}>
                    <nav aria-label="main mailbox folders">
                        <List>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {/* <InboxIcon /> */}
                                    </ListItemIcon>
                                    <ListItemText primary="Website layout" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {/* <InboxIcon /> */}
                                    </ListItemIcon>
                                    <ListItemText primary="Mobile App layout" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {/* <InboxIcon /> */}
                                    </ListItemIcon>
                                    <ListItemText primary="Custom Logo making" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {/* <InboxIcon /> */}
                                    </ListItemIcon>
                                    <ListItemText primary="Consultancy" />
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </nav>
                </CustomTabPanel>
            </Box>
        </div>
    )
}

export default ServicesTable