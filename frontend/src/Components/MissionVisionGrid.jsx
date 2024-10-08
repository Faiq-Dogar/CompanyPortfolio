import React from 'react'
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Typography } from '@mui/material';
import { useMediaQuery } from '@mui/material';

const MissionVisionGrid = ({ Mission_image, Vision_image, Perspective_image, Strategy_image }) => {
    // const itemData = [
    //     {
    //         img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
    //         title: 'Bed',
    //     },
    //     {
    //         img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
    //         title: 'Books',
    //     },
    //     {
    //         img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
    //         title: 'Sink',
    //     },
    //     {
    //         img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
    //         title: 'Kitchen',
    //     },
    //     {
    //         img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
    //         title: 'Blinds',
    //     },
    //     {
    //         img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
    //         title: 'Chairs',
    //     },
    //     {
    //         img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
    //         title: 'Laptop',
    //     },
    //     {
    //         img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
    //         title: 'Doors',
    //     },
    //     {
    //         img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
    //         title: 'Coffee',
    //     },
    //     {
    //         img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
    //         title: 'Storage',
    //     },
    //     {
    //         img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
    //         title: 'Candle',
    //     },
    //     {
    //         img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
    //         title: 'Coffee table',
    //     },
    // ];
    const isMobileOrTablet = useMediaQuery('(max-width: 1024px)');
    return (
        <Box sx={{ width:  isMobileOrTablet ? 400 : 500, height: 500, position: 'relative' }}>
            <ImageList variant="masonry" cols={2} gap={25}>
                {/* {itemData.map((item) => ( */}
                <ImageListItem
                    // key={item.img}
                    sx={{ mt: '20%' }}
                >
                    <img
                        srcSet={Mission_image}
                        src={Mission_image}
                        // alt={item.title}
                        loading="lazy"
                    />
                </ImageListItem>
                <ImageListItem>
                    <img
                        srcSet={Vision_image}
                        src={Vision_image}
                        loading="lazy"
                    />
                </ImageListItem>
                <ImageListItem>
                    <img
                        srcSet={Perspective_image}
                        src={Perspective_image}
                        loading="lazy"
                    />
                </ImageListItem>
                <ImageListItem >
                    <img
                        srcSet={Strategy_image}
                        src={Strategy_image}
                        loading="lazy"
                    />
                </ImageListItem>
                {/* ))} */}
            </ImageList>
            <Typography
                variant='h5'
                color={"white"}
                position={'absolute'}
                top={isMobileOrTablet ? '25%' : '31%'}
                left={isMobileOrTablet ? '8%' : '10.5%'}
                fontWeight={'bold'}
            >
                Our Mission
            </Typography>
            <Typography
                variant='h5'
                color={"white"}
                position={'absolute'}
                top={isMobileOrTablet ? '16%' : '21%'}
                left={isMobileOrTablet ? '63%' : '65%'}
                fontWeight={'bold'}
            >
                Our Vision
            </Typography>
            <Typography
                variant='h5'
                color={"white"}
                position={'absolute'}
                top={isMobileOrTablet ? '67%' : '84.5%'}
                left={isMobileOrTablet ? '3%' : '8.5%'}

                fontWeight={'bold'}
            >
                Our Philosophy
            </Typography>
            <Typography
                variant='h5'
                color={"white"}
                position={'absolute'}
                top={isMobileOrTablet ? '60%' : '74%'}
                left={isMobileOrTablet ? '60%' : '63%'}
                fontWeight={'bold'}
            >
                Our Stratagy
            </Typography>
        </Box>
    )
}

export default MissionVisionGrid


