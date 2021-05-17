import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import Slider from "react-slick";
import $ from "jquery";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import * as Actions from "../../Redux/Actions";
import ProductDescription from "../../Components/User/Detail/ProductDescription";
import ProductSlideFor from "../../Components/User/Detail/ProductSlideFor";
import ProductSliderNav from "../../Components/User/Detail/ProductSliderNav";

const Detail = (props) => {
  let { productDetail } = props;
  console.log(productDetail);

  const settingSliderFor = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    fade: true,
    autoplay: 3000,
  };

  const settingSliderNav = {
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    infinite: false,
    speed: 400,
    autoplay: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: false,
        },
      },
    ],
  };

  useEffect(() => {
    let value = props.match.params.id;
    // let value = props.match.params.code;
    props.onProductDetail(value);
  }, []);

  let onAddProductToCart = (product) => {
    props.onAddProductToCart(product);
  };

  return (
    <section className="product-detail">
      <div className="grid">
        <div className="grid__row">
          <div className="grid-column-6">
            <div className="product-image">
              <div className="product__wrapper">
                <Slider
                  className="product__slider slider-for"
                  {...settingSliderFor}
                >
                  <ProductSlideFor product={productDetail} />
                </Slider>
                <Slider
                  className="product__slider slider-nav"
                  {...settingSliderNav}
                >
                  <ProductSliderNav product={productDetail} />
                </Slider>
              </div>
            </div>
          </div>
          <div className="grid-column-6">
            <ProductDescription
              productDetail={productDetail}
              onAddProductToCart={onAddProductToCart}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    productDetail: state.ProductReducer.productDetail || {
      name: "",
      price: 0,
      description: "",
    },
    productInCart: state.CartReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onProductDetail: (value) => {
      return dispatch(Actions.actionFetchProductDetailByIdRequest(value));
      // return dispatch(Actions.actionFetchProductDetailByCodeRequest(value));
    },
    onAddProductToCart: (product) => {
      return dispatch(Actions.actionAddProductToCartRequest(product, 1));
    },
    onUpdateProductInCart: (product, quantity) => {
      return dispatch(
        Actions.actionUpdateProductInCartRequest(product, quantity)
      );
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
