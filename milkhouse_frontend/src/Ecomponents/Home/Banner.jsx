import React from 'react'
import Carousel from 'react-multi-carousel';
import { bannerData } from '../../constants/data';
import {styled } from '@mui/material';
import 'react-multi-carousel/lib/styles.css';

const Image = styled('img')({
    width: '100%',
    height: '370px',
    objectFit: 'cover',
    transform: 'scale(1)', // Default Zoom out the image by 10%
    transition: 'transform 0.3s ease'
})


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};


const Banner = () => {
  return (
    <Carousel
        responsive={responsive}
        dotListClass='custom-dot-list-style'
        itemClass='carousel-item-padding-40-px'
        containerClass='carousel-container'
        draggable={false}
        swipeable={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        slidesToSlide={1}
    >
        {
            bannerData.map((data, index) => (
                <Image key={index} src={data.url} alt="banner-img" />
            ))
        }

    </Carousel>
  )
}

export default Banner