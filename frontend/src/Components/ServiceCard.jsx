import { Box, Button, Card, CardActions, CardContent, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import React from 'react'

const ServiceCard = ({ prehead, heading, text, itemList, item1, item2, item3, item1Svg, item2Svg, item3Svg, circleIcon, nextLink1, nextLink2, nextLink3 }) => {
    const navigate = useNavigate();
    const showDisc = (nextLink, service) => {
        navigate(`/Services/${nextLink}`, { state: { serviceName: service } });
    }

    return (
        <Card sx={{ minWidth: '100%', padding: '5%', position: 'relative' }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {prehead}
                </Typography>
                <Typography variant="h5" component="div" fontWeight={"bold"}>
                    {heading}
                </Typography>

                <Typography sx={{ my: 2 }} variant='subtitle1' align='left' color={"#351A5F"} fontWeight={"light"}>
                    {text}
                </Typography>
                {itemList !== undefined &&
                    <nav aria-label="main mailbox folders">
                        <List>
                            {itemList.map((data, key) => (
                                <>
                                    <ListItem disablePadding onClick={showDisc} key={key}>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                {/* {item1Svg} */}
                                                /
                                            </ListItemIcon>
                                            <ListItemText primary={data.dis} />
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem disablePadding onClick={showDisc}>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                {/* {item2Svg} */}
                                                /
                                            </ListItemIcon>
                                            <ListItemText primary={item2} />
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem disablePadding onClick={(e) => showDisc(nextLink3, 'Mobile App Developemnt')}>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                {/* {item3Svg} */}
                                                /
                                            </ListItemIcon>
                                            <ListItemText primary={item3} />
                                        </ListItemButton>
                                    </ListItem>
                                </>
                            ))}
                        </List>
                    </nav>
                }
                <Box
                    sx={
                        {
                            width: '140px',
                            height: '140px',
                            borderRadius: '50%',
                            bgcolor: '#1976D2',
                            position: 'absolute',
                            top: '-12%',
                            right: '-12%',
                            color: 'white',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }
                    }>
                    <Typography variant='body1' color={'white'} mt={'25%'} mr={'20%'}>
                        {circleIcon}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    )
}

export default ServiceCard
