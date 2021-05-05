import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import imgSlider from "../../../Assets/Images/User/slider1.jpg";

const SliderNotification = () => {
  const setting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  let slickSlider = () => {
    return (
      <div className="home-slider">
        <Slider {...setting}>
          <div className="home-slider__item">
            <a href="#" className="home-slider__item-link">
              <img className="home-slider__item-img" src={imgSlider} />
            </a>
          </div>
          <div className="home-slider__item">
            <a href="#" className="home-slider__item-link">
              <img className="home-slider__item-img" src={imgSlider} />
            </a>
          </div>
          <div className="home-slider__item">
            <a href="#" className="home-slider__item-link">
              <img className="home-slider__item-img" src={imgSlider} />
            </a>
          </div>{" "}
          <div className="home-slider__item">
            <a href="#" className="home-slider__item-link">
              <img className="home-slider__item-img" src={imgSlider} />
            </a>
          </div>{" "}
          <div className="home-slider__item">
            <a href="#" className="home-slider__item-link">
              <img className="home-slider__item-img" src={imgSlider} />
            </a>
          </div>{" "}
          <div className="home-slider__item">
            <a href="#" className="home-slider__item-link">
              <img className="home-slider__item-img" src={imgSlider} />
            </a>
          </div>{" "}
          <div className="home-slider__item">
            <a href="#" className="home-slider__item-link">
              <img className="home-slider__item-img" src={imgSlider} />
            </a>
          </div>{" "}
          <div className="home-slider__item">
            <a href="#" className="home-slider__item-link">
              <img className="home-slider__item-img" src={imgSlider} />
            </a>
          </div>{" "}
          <div className="home-slider__item">
            <a href="#" className="home-slider__item-link">
              <img className="home-slider__item-img" src={imgSlider} />
            </a>
          </div>
        </Slider>
      </div>
    );
  };
  return slickSlider();
};

export default SliderNotification;
