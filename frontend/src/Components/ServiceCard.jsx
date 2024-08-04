import { Button, Card, CardActions, CardContent, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import React from 'react'


const ServiceCard = ({ heading, text, item1, item2, item3, item1Svg, item2Svg, item3Svg }) => {
    return (
        <Card sx={{ minWidth: '100%', padding: '5%' }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Word of the Day
                </Typography>
                <Typography variant="h5" component="div" fontWeight={"bold"}>
                    {heading}
                </Typography>

                <Typography sx={{ my: 2 }} variant='subtitle1' align='left' color={"#351A5F"} fontWeight={"light"}>
                    {text}
                </Typography>
                <nav aria-label="main mailbox folders">
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {item1Svg}
                                </ListItemIcon>
                                <ListItemText primary={item1} />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {item2Svg}
                                </ListItemIcon>
                                <ListItemText primary={item2} />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {item3Svg}
                                </ListItemIcon>
                                <ListItemText primary={item3} />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </nav>
            </CardContent>
            {/* <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions> */}
        </Card>
    )
}

export default ServiceCard
