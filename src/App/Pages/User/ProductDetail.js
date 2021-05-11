import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "../../Layouts/User/Header/Header";
import Footer from "../../Layouts/User/Footer/Footer";

const ProductDetail = () => {
  let setting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Header />
      <section className="section-product">
        <div className="grid">
          <div className="grid__row">
            <div className="grid-column-6">
              <div className="product-detail__picture">
                <div className="product-detail__picture-img">
                  <img src="" class="" alt="" />
                </div>
                <div className="product-detail__picture-slider"></div>
              </div>
            </div>
            <div className="grid-column-6"></div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProductDetail;
