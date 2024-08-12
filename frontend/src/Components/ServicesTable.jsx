import React from 'react'
import SectionHeading from './SectionHeading'
import PropTypes from 'prop-types';
import { Box, IconButton, ImageList, ImageListItem, ImageListItemBar, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Tab, Tabs, Typography } from '@mui/material';


const ServicesTable = ({ PrtfolioProjects }) => {
    const itemData = [
        {
            img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
            title: 'Breakfast',
            author: '@bkristastucchio',
        },
        {
            img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
            title: 'Burger',
            author: '@rollelflex_graphy726',
        },
        {
            img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
            title: 'Camera',
            author: '@helloimnik',
        },
        {
            img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
            title: 'Coffee',
            author: '@nolanissac',
            cols: 2,
        },
        {
            img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
            title: 'Hats',
            author: '@hjrc33',
            cols: 2,
        },
        {
            img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
            title: 'Honey',
            author: '@arwinneil',
        },
        {
            img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
            title: 'Basketball',
            author: '@tjdragotta',
        },
        {
            img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
            title: 'Fern',
            author: '@katie_wasserman',
        },
        {
            img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
            title: 'Mushrooms',
            author: '@silverdalex',
            rows: 2,
            cols: 2,
        },
        {
            img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
            title: 'Tomato basil',
            author: '@shelleypauls',
        },
        {
            img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
            title: 'Sea star',
            author: '@peterlaster',
        },
        {
            img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
            title: 'Bike',
            author: '@southside_customs',
        },
    ];

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
        <div>
            <Box sx={{ width: '100%', my: '4%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="All" {...a11yProps(0)} />
                        <Tab label="Mobile Development" {...a11yProps(1)} />
                        <Tab label="Website Development" {...a11yProps(2)} />
                        <Tab label="Desktop Development" {...a11yProps(3)} />
                        <Tab label="UI/UX " {...a11yProps(4)} />
                        <Tab label="SEO" {...a11yProps(5)} />
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    <nav aria-label="main mailbox folders">
                        <ImageList variant="masonry" cols={3} gap={25}>
                            {PrtfolioProjects.map((item) => (
                                <ImageListItem key={item.img} className='image-list-item'>
                                    <img
                                        srcSet={`${item.img}?w=350&fit=crop&auto=format&dpr=2 2x`}
                                        src={`${item.img}?w=350&fit=crop&auto=format`}
                                        alt={item.title}
                                        loading="lazy"
                                        // height= "350px "
                                        className='portfolio-images'
                                    />
                                    <div className='portfolio-img-dis'>
                                        <Typography variant='h6'>
                                            {item.title}
                                        </Typography>
                                    </div>
                                </ImageListItem>

                            ))}
                        </ImageList>
                    </nav>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <nav aria-label="main mailbox folders">
                        <ImageList variant="masonry" cols={3} gap={25}>
                            {PrtfolioProjects.map((item) => (
                                <>
                                    {item.type === 'Android Development' &&
                                        <ImageListItem key={item.img} className='image-list-item'>
                                            <img
                                                srcSet={`${item.img}?w=350&fit=crop&auto=format&dpr=2 2x`}
                                                src={`${item.img}?w=350&fit=crop&auto=format`}
                                                alt={item.title}
                                                loading="lazy"
                                                // height= "350px "
                                                className='portfolio-images'
                                            />
                                            <div className='portfolio-img-dis'>
                                                <Typography variant='h6'>
                                                    {item.title}
                                                </Typography>
                                            </div>
                                        </ImageListItem>
                                    }
                                </>
                            ))}
                        </ImageList>
                    </nav>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    <nav aria-label="main mailbox folders">
                        <ImageList variant="masonry" cols={3} gap={25}>
                            {PrtfolioProjects.map((item) => (
                                <>
                                    {item.type === 'Web Development' &&
                                        <ImageListItem key={item.img} className='image-list-item'>
                                            <img
                                                srcSet={`${item.img}?w=350&fit=crop&auto=format&dpr=2 2x`}
                                                src={`${item.img}?w=350&fit=crop&auto=format`}
                                                alt={item.title}
                                                loading="lazy"
                                                // height= "350px "
                                                className='portfolio-images'
                                            />
                                            <div className='portfolio-img-dis'>
                                                <Typography variant='h6'>
                                                    {item.title}
                                                </Typography>
                                            </div>
                                        </ImageListItem>
                                    }
                                </>
                            ))}
                        </ImageList>
                    </nav>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={3}>
                    <nav aria-label="main mailbox folders">
                        <ImageList variant="masonry" cols={3} gap={25}>
                            {PrtfolioProjects.map((item) => (
                                <>
                                    {item.type === 'Software Development' &&
                                        <ImageListItem key={item.img} className='image-list-item'>
                                            <img
                                                srcSet={`${item.img}?w=350&fit=crop&auto=format&dpr=2 2x`}
                                                src={`${item.img}?w=350&fit=crop&auto=format`}
                                                alt={item.title}
                                                loading="lazy"
                                                // height= "350px "
                                                className='portfolio-images'
                                            />
                                            <div className='portfolio-img-dis'>
                                                <Typography variant='h6'>
                                                    {item.title}
                                                </Typography>
                                            </div>
                                        </ImageListItem>
                                    }
                                </>
                            ))}
                        </ImageList>
                    </nav>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={4}>
                    <nav aria-label="main mailbox folders">
                        <ImageList variant="masonry" cols={3} gap={25}>
                            {PrtfolioProjects.map((item) => (
                                <>
                                    {item.type === 'UI/UX' &&
                                        <ImageListItem key={item.img} className='image-list-item'>
                                            <img
                                                srcSet={`${item.img}?w=350&fit=crop&auto=format&dpr=2 2x`}
                                                src={`${item.img}?w=350&fit=crop&auto=format`}
                                                alt={item.title}
                                                loading="lazy"
                                                // height= "350px "
                                                className='portfolio-images'
                                            />
                                            <div className='portfolio-img-dis'>
                                                <Typography variant='h6'>
                                                    {item.title}
                                                </Typography>
                                            </div>
                                        </ImageListItem>
                                    }
                                </>
                            ))}
                        </ImageList>
                    </nav>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={5}>
                    <nav aria-label="main mailbox folders">
                        <ImageList variant="masonry" cols={3} gap={25}>
                            {PrtfolioProjects.map((item) => (
                                <>
                                    {item.type === 'SEO' &&
                                        <ImageListItem key={item.img} className='image-list-item'>
                                            <img
                                                srcSet={`${item.img}?w=350&fit=crop&auto=format&dpr=2 2x`}
                                                src={`${item.img}?w=350&fit=crop&auto=format`}
                                                alt={item.title}
                                                loading="lazy"
                                                // height= "350px "
                                                className='portfolio-images'
                                            />
                                            <div className='portfolio-img-dis'>
                                                <Typography variant='h6'>
                                                    {item.title}
                                                </Typography>
                                            </div>
                                        </ImageListItem>
                                    }
                                </>
                            ))}
                        </ImageList>
                    </nav>
                </CustomTabPanel>
            </Box>
        </div>
    )
}

export default ServicesTable