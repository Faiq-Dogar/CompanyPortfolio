import { List, ListItem, ListItemText, Stack, Typography } from '@mui/material'
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import StarRateOutlinedIcon from '@mui/icons-material/StarRateOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';
import React from 'react'

const PageIcons = ({Icolor, size1, size2, size3, size4, size5, size6, size7}) => {
    return (
        <div className='pageIcon'>
            {/* <Stack direction={'column'} spacing={3} >
                <Typography marginBottom={"15%"}>
                    <CottageOutlinedIcon sx={{ color: "#351A5F", mb: 2, fontSize: 'small' }} />
                </Typography>
                <PeopleAltOutlinedIcon sx={{ color: "#351A5F", fontSize: 'small' }} />
                <StarRateOutlinedIcon sx={{ color: "#351A5F", fontSize: 'small' }} />
                <LocalOfferOutlinedIcon sx={{ color: "#351A5F", fontSize: 'small' }} />
                <PeopleOutlineIcon sx={{ color: "#351A5F", fontSize: 'small' }} />
                <ThumbUpAltOutlinedIcon sx={{ color: "#351A5F", fontSize: 'small' }} />
            </Stack> */}
            <List >
                <ListItem >
                    <ListItemText
                        primary={<CottageOutlinedIcon sx={{ color: Icolor, fontSize: size1 }} />}
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary={<PeopleAltOutlinedIcon sx={{ color: Icolor, fontSize: size2 }} />}
                        
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary={<LocalOfferOutlinedIcon sx={{ color: Icolor, fontSize: size3 }} />}
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary={<StarRateOutlinedIcon sx={{ color: Icolor, fontSize: size4 }} />}
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary={<PeopleOutlineIcon sx={{ color: Icolor, fontSize: size5 }} />}
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary={<ThumbUpAltOutlinedIcon sx={{ color: Icolor, fontSize: size6 }} />}
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary={<ContactPageOutlinedIcon sx={{ color: Icolor, fontSize: size7 }} />}
                    />
                </ListItem>
            </List>
        </div>
    )
}

export default PageIcons
