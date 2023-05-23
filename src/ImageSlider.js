import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from './images/1.png';
import image2 from './images/2.png';
import image3 from './images/3.png';
import image4 from './images/4.png';
import image5 from './images/5.png';
import './App.css';

const ImageSlider = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 200,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
    };
  
    return (
      <div className="slider-container">
        <Slider {...settings}>
          <div className="slide">
            <img src={image1} alt="ad 1" />
          </div>
          <div className="slide">
            <img src={image2} alt="ad 2" />
          </div>
          <div className="slide">
            <img src={image3} alt="ad 3" />
          </div>
          <div className="slide">
            <img src={image4} alt="ad 4" />
          </div>
          <div className="slide">
            <img src={image5} alt="ad 5" />
          </div>
        </Slider>
      </div>
    );
  };
  
  export default ImageSlider;
