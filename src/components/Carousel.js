// src/components/Carousel.js

import React from 'react';
import { Carousel as ReactCarousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image1 from '../images/image1.jpg';
import Image2 from '../images/image2.jpg';
import Image3 from '../images/image3.jpg';

const Carousel = () => {
  return (
    <ReactCarousel infiniteLoop autoPlay interval={3000} showThumbs={false} showStatus={false}>
      <div>
        <img src={Image1} alt="Carousel 1" />
      </div>
      <div>
        <img src={Image2} alt="Carousel 2" />
      </div>
      <div>
        <img src={Image3} alt="Carousel 3" />
      </div>
      {/* Add more images as needed */}
    </ReactCarousel>
  );
};

export default Carousel;
