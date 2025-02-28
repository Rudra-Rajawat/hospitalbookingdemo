import React from 'react';
import Slider from 'react-slick';
//import './ImageSlider.css'; // Make sure to import the CSS file

function ImageSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings}>
      <div>
        <img
          className="slider-image"
          src="./img1.jpg"
          alt="Slide 1"
        />
        <div className="slider-caption">
          <h3>Slide 1</h3>
          <p>Some representative placeholder content for the first slide.</p>
        </div>
      </div>
      <div>
        <img
          className="slider-image"
          src="https://via.placeholder.com/800x400"
          alt="Slide 2"
        />
        <div className="slider-caption">
          <h3>Slide 2</h3>
          <p>Some representative placeholder content for the second slide.</p>
        </div>
      </div>
      <div>
        <img
          className="slider-image"
          src="https://via.placeholder.com/800x400"
          alt="Slide 3"
        />
        <div className="slider-caption">
          <h3>Slide 3</h3>
          <p>Some representative placeholder content for the third slide.</p>
        </div>
      </div>
    </Slider>
  );
}

export default ImageSlider;