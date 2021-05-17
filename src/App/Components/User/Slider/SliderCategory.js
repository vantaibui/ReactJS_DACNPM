import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import imgSlider from "../../../Assets/Images/User/slider1.jpg";

const SliderCategory = () => {
  const setting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  let slickSlider = () => {
    return (
      <div className="category-slider">
        <Slider {...setting}>
          <div className="category-slider__item">
            <a href="#" className="category-slider__item-link">
              <img className="category-slider__item-img" src={imgSlider} />
            </a>
          </div>
          <div className="category-slider__item">
            <a href="#" className="category-slider__item-link">
              <img className="category-slider__item-img" src={imgSlider} />
            </a>
          </div>
          <div className="category-slider__item">
            <a href="#" className="category-slider__item-link">
              <img className="category-slider__item-img" src={imgSlider} />
            </a>
          </div>{" "}
          <div className="category-slider__item">
            <a href="#" className="category-slider__item-link">
              <img className="category-slider__item-img" src={imgSlider} />
            </a>
          </div>{" "}
          <div className="category-slider__item">
            <a href="#" className="category-slider__item-link">
              <img className="category-slider__item-img" src={imgSlider} />
            </a>
          </div>{" "}
          <div className="category-slider__item">
            <a href="#" className="category-slider__item-link">
              <img className="category-slider__item-img" src={imgSlider} />
            </a>
          </div>{" "}
          <div className="category-slider__item">
            <a href="#" className="category-slider__item-link">
              <img className="category-slider__item-img" src={imgSlider} />
            </a>
          </div>{" "}
          <div className="category-slider__item">
            <a href="#" className="category-slider__item-link">
              <img className="category-slider__item-img" src={imgSlider} />
            </a>
          </div>{" "}
          <div className="category-slider__item">
            <a href="#" className="category-slider__item-link">
              <img className="category-slider__item-img" src={imgSlider} />
            </a>
          </div>
        </Slider>
      </div>
    );
  };
  return slickSlider();
};

export default SliderCategory;
