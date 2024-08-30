import * as React from 'react';
import { Button, Grid, Typography } from '@mui/material';
import ServiceCard from './ServiceCard';
import MobileDevelopemnt from '../SVGs/MobileDevelopemnt';
import WebDevelopemnt from '../SVGs/WebDevelopemnt';
import Ecommerce from '../SVGs/Ecommerce';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import logo from './../assets/Images/Your paragraph text (1).png'

const Offerrings = ({ ServiceOfferingsList }) => {
    const [state, setState] = React.useState({
        right: false,
    });
    const [drawerContent, setDrawerContent] = React.useState([]);

    const toggleDrawer = (open, content = []) => () => {
        setDrawerContent(content);
        setState({ ...state, right: open });
    };

    const list = (
        <Box
            sx={{ width: 400 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
                        <img src={logo} className='drawer-logo' alt='DevBeryy' width={'100%'}/>
            <List>
                <Typography variant='h5' textAlign={'center'} fontWeight={'bold'} my={'4%'}>
                    Our Services
                </Typography>
                {drawerContent.map((item, index) => (
                    <>
                        <ListItem key={index} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={item.dis} />
                            </ListItemButton>
                        </ListItem>
                        <Divider />
                    </>
                ))}
            </List>
        </Box>
    );

    return (
        <>
            {ServiceOfferingsList !== undefined &&
                <Grid container spacing={10}>
                    {ServiceOfferingsList.map((data, key) => (
                        <Grid item xs={12} md={4} lg={4} key={key}>
                            <div onClick={toggleDrawer(true, data.serviceList)} className='offering-conatiner'>
                                <ServiceCard
                                    prehead={data.preTitle}
                                    heading={data.title}
                                    text={data.dis}
                                    itemList={data.serviceList}
                                    item1Svg={<Ecommerce width={'74.7256267'} height={'53.67618505'} />}
                                    item2Svg={<WebDevelopemnt />}
                                    item3Svg={<MobileDevelopemnt width={'71.767004'} height={'59.63292'} />}
                                    circleIcon={data.icon}
                                    nextLink1={''}
                                    nextLink2={''}
                                    nextLink3={'MobileAppDevelopment'}
                                />
                            </div>
                        </Grid>
                    ))}
                </Grid>
            }

            <Drawer
                anchor='right'
                open={state.right}
                onClose={toggleDrawer(false)}
            >
                {list}
            </Drawer>
        </>
    );
}

export default Offerrings;
