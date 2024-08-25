import React, { useEffect, useState } from 'react';
import TestimonialCard from './TestimonialCard';
import { Button } from '@mui/material';

const Carousel = ({ data }) => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsToShow = 3;
    const totalItems = data.length;

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
    };

    const translateX = -((currentIndex % totalItems) * (100 / itemsToShow));

    return (
        <div
        // data-aos="fade-up"
        className={`carousel-container`}>
            {/* <button className="carousel-button prev" onClick={handlePrevious}>&lt;</button> */}
            <div className="carousel-slider">
                <div className="carousel-wrapper" style={{ transform: `translateX(${translateX}%)` }}>

                    {data.map((item) => (
                        <div key={item.id} className="custom-class">
                            <TestimonialCard
                                key={item.id}
                                name={item.name}
                                date={item.date}
                                text={item.text}
                                img={item.img}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <Button className='carousel-button prev' variant='contained' sx={{ borderRadius: '50%', top: '50%', marginTop:'5%'}} onClick={handlePrevious}>&lt;</Button>
            <Button className='carousel-button next' variant='contained' sx={{ borderRadius: '50%', top: '50%', marginTop:'5%' }} onClick={handleNext}>&gt;</Button>
        </div>
    );
};

export default Carousel;