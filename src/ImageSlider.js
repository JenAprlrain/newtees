import React from 'react';
import { Link } from 'react-router-dom';
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
      arrows: false,
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
          <Link to="/drops/yachtclub">
            <img src={image1} alt="ad 1" />
            </Link>
          </div>
          <div className="slide">
          <Link to="/partners/punks">
            <img src={image2} alt="ad 2" />
            </Link>
          </div>
          <div className="slide">
          <Link to="/drops/jacket">
            <img src={image3} alt="ad 3" />
            </Link>
          </div>
          <div className="slide">
          <Link to="/partners/tomb">
            <img src={image4} alt="ad 4" />
            </Link>
          </div>
          <div className="slide">
          <Link to="/drops/sweater">
            <img src={image5} alt="ad 5" />
            </Link>
          </div>
        </Slider>
      </div>
    );
  };
  
  export default ImageSlider;
