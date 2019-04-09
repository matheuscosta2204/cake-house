import React from 'react';
import Carousel from 'nuka-carousel';

import classes from './Carousel.css';

const carousel = (props) => {

    const CakeImages = [
        {
            classes: [classes.CarouselImage],
            url: "images/cake1.jpg"
        },
        {
            classes: [classes.CarouselImage],
            url: "images/cake2.jpg"
        },
        {
            classes: [classes.CarouselImage],
            url: "images/cake3.jpg"
        },
        {
            classes: [classes.CarouselImage],
            url: "images/cake4.jpg"
        },
    ];

    return (
        <Carousel className={classes.Carousel} width="45%">
            {CakeImages.map((image, index) => (
                <img key={index} src={image.url} className={image.classes.join(' ')} />
            ))}
        </Carousel>
    );
};

export default carousel;