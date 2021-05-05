import React from "react";

const ProductItem = () => {
  return (
    <div className="grid-column-2-4">
      <a href="./detail.html" className="home-product__item">
        <div
          style={{
            backgroundImage: "url(../Assets/Images/User/rau-muong-4kfarm.jpg)",
          }}
          className="home-product__item-img"
        />
        <div className="home-product__item-info">
          <h4 className="home-product__item-name">
            Rau muống tươi 4KFarm túi 200-300g Rau muống tươi 4KFarm túi
            200-300g
          </h4>
          <div className="home-product__item-price">
            <span className="home-product__item-price-old">1.200.000₫</span>
            <span className="home-product__item-price-current">999.000₫</span>
          </div>
          <div className="home-product__item-action">
            <span className="home-product__item-action-heart home-product__item-action-heart--hearted">
              <i className="far fa-heart home-product__item-heart-icon-empty" />
              <i className="fas fa-heart home-product__item-heart-icon-fill" />
            </span>
            <span className="home-product__item-action-rating">
              <i className="far fa-star home-product__item-action-star--gold" />
              <i className="fa fa-star home-product__item-action-star--gold" />
              <i className="fa fa-star home-product__item-action-star--gold" />
              <i className="fa fa-star home-product__item-action-star--gold" />
              <i className="fa fa-star home-product__item-action-star--gold" />
            </span>
            <span className="home-product__item-action-sold">88 đã bán</span>
          </div>
          <div className="home-product__item-origin">
            <span className="home-product__item-origin-brand">Whoo</span>
            <span className="home-product__item-origin-name">Nhật bản</span>
          </div>
        </div>
        <div className="home-product__item-favorite">
          <i className="fas fa-check home-product__item-favorite--check" />
          <span>Yêu thích</span>
        </div>
        <div className="home-product__item-sale-off">
          <span className="home-product__item-sale-off-percent">10%</span>
          <span className="home-product__item-sale-off-label">Giảm</span>
        </div>
      </a>
    </div>
  );
};

export default ProductItem;
