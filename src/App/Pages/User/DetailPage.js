import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import * as Actions from "../../Redux/Actions";

const Detail = (props) => {
  let { productDetail } = props;

  useEffect(() => {
    let value = props.match.params.id;
    // let value = props.match.params.code;
    props.onProductDetail(value);
  }, []);

  let onAddProductToCart = (product) => {
    props.onAddProductToCart(product);
    console.log(product);
  };

  const settingSliderFor = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    fade: true,
    // asNavFor: ".slider-nav",
  };

  const settingSliderNav = {
    slidesToShow: 4,
    slidesToScroll: 1,
    // asNavFor: ".slider-for",
    dots: true,
    centerMode: false,
    focusOnSelect: true,
    autoplay: 1000,
    infinite: false,
    speed: 400,
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

  return (
    <section className="product-detail">
      <div className="grid">
        <div className="grid__row">
          <div className="grid-column-6">
            <div className="product-image">
              <div className="product__wrapper">
                <Slider className="product__slider" {...settingSliderFor}>
                  <div className="product">
                    <img
                      src="https://salt.tikicdn.com/cache/w64/ts/product/e5/06/a5/43d941f6dbb57d573bd4e1c840b2b3bd.jpg"
                      alt="img"
                      className="product__img"
                    />
                  </div>
                  <div className="product">
                    <img
                      src="https://salt.tikicdn.com/cache/w64/ts/product/39/2d/a1/68d19cfd4ea770af4cd4a172a76d031c.jpg"
                      alt="img"
                      className="product__img"
                    />
                  </div>
                  <div className="product">
                    <img
                      src="https://salt.tikicdn.com/cache/w64/ts/product/a8/b0/51/44e398a43ff68e2f5c8847fbd2274776.jpg"
                      alt="img"
                      className="product__img"
                    />
                  </div>
                  <div className="product">
                    <img
                      s
                      src="https://salt.tikicdn.com/cache/w64/ts/product/fb/f4/6d/2af358d6ec7597b92f9fbf83d6c14fc8.jpg"
                      alt="img"
                      className="product__img"
                    />
                  </div>
                  <div className="product">
                    <img
                      src="https://salt.tikicdn.com/cache/w64/ts/product/b3/21/ff/ba40d5a4be7b75a1c66433b1e1e4d654.jpg"
                      alt="img"
                      className="product__img"
                    />
                  </div>
                </Slider>
                <Slider className="product__slider" {...settingSliderNav}>
                  <div className="product-nav">
                    <img
                      src="https://salt.tikicdn.com/cache/w64/ts/product/e5/06/a5/43d941f6dbb57d573bd4e1c840b2b3bd.jpg"
                      alt="img"
                      className="product-nav__img"
                    />
                  </div>
                  <div className="product-nav">
                    <img
                      src="https://salt.tikicdn.com/cache/w64/ts/product/39/2d/a1/68d19cfd4ea770af4cd4a172a76d031c.jpg"
                      alt="img"
                      className="product-nav__img"
                    />
                  </div>
                  <div className="product-nav">
                    <img
                      src="https://salt.tikicdn.com/cache/w64/ts/product/a8/b0/51/44e398a43ff68e2f5c8847fbd2274776.jpg"
                      alt="img"
                      className="product-nav__img"
                    />
                  </div>
                  <div className="product-nav">
                    <img
                      src="https://salt.tikicdn.com/cache/w64/ts/product/fb/f4/6d/2af358d6ec7597b92f9fbf83d6c14fc8.jpg"
                      alt="img"
                      className="product-nav__img"
                    />
                  </div>
                  <div className="product-nav">
                    <img
                      src="https://salt.tikicdn.com/cache/w64/ts/product/b3/21/ff/ba40d5a4be7b75a1c66433b1e1e4d654.jpg"
                      alt="img"
                      className="product-nav__img"
                    />
                  </div>
                </Slider>
              </div>
            </div>
          </div>
          <div className="grid-column-6">
            <div className="product-description">
              <h3 className="product-description__name">
                Vetgetable’s Package
              </h3>
              <div className="product-description__rating">
                <i className="fas fa-star star--gold" />
                <i className="fas fa-star star--gold" />
                <i className="fas fa-star star--gold" />
              </div>
              <div className="product-description__price">
                700,000
                <span className="product-description__price-currency">₫</span>
              </div>
              <p className="product-description__des">
                Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
                dui. Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam
                vehicula elementum sed sit amet dui. Proin eget tortor risus.
              </p>
              <div className="product-description__quantity">
                <div className="quantity">
                  <div className="quantity__inner">
                    <span className="quantity__btn"> - </span>
                    <span className="quantity__value"> 2 </span>
                    <span className="quantity__btn"> + </span>
                  </div>
                </div>
                <button
                  onClick={() => {
                    onAddProductToCart(productDetail);
                  }}
                  className="product-description__add-cart"
                >
                  Thêm vào giỏ hàng
                </button>
              </div>
              <ul className="product-description__ul">
                <li className="product-description__li">
                  <span className="product-description__title">Danh mục</span>
                  <span className="product-description__value">Rau, củ</span>
                </li>
                <li className="product-description__li">
                  <span className="product-description__title">Cân nặng</span>
                  <span className="product-description__value">
                    0.5 <span className="uit">kg</span>
                  </span>
                </li>
                <li className="product-description__li">
                  <span className="product-description__title">Chia sẻ</span>
                  <span className="product-description__value">
                    <a href className="product-description__link">
                      <i className="fab fa-facebook-f product-description__icon" />
                    </a>
                    <a href className="product-description__link">
                      <i className="fab fa-twitter product-description__icon" />
                    </a>
                    <a href className="product-description__link">
                      <i className="fab fa-instagram product-description__icon" />
                    </a>
                    <a href className="product-description__link">
                      <i className="fab fa-pinterest product-description__icon" />
                    </a>
                  </span>
                </li>
              </ul>
            </div>
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
