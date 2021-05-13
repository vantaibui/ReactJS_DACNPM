import React from "react";
import { NavLink } from "react-router-dom";

const ProductItem = (props) => {
  let { product } = props;

  let renderRating = (rating) => {
    let result;
    let iconStar = (
      <i className="fa fa-star home-product__item-action-star--gold" />
    );
    if (rating > 0) {
      for (let i = 0; i < rating; i++) {
        switch (i + 1) {
          case 0:
            result = <></>;
            break;
          case 1:
            result = <>{iconStar}</>;
            break;
          case 2:
            result = (
              <>
                {iconStar}
                {iconStar}
              </>
            );
            break;
          case 3:
            result = (
              <>
                {iconStar}
                {iconStar}
                {iconStar}
              </>
            );
            break;
          case 4:
            result = (
              <>
                {iconStar}
                {iconStar}
                {iconStar}
                {iconStar}
              </>
            );
            break;
          case 5:
            result = (
              <>
                {iconStar}
                {iconStar}
                {iconStar}
                {iconStar}
                {iconStar}
              </>
            );
            break;
        }
      }
    }
    return result;
  };

  return (
    <div className="grid-column-2-4">
      <NavLink
        exact
        // to={`/products/id/${product.id}`}
        to={`/products/code/${product.code}`}
        className="home-product__item"
      >
        <div
          style={{
            backgroundImage:
              "url(https://cdn.tgdd.vn/Products/Images/2513/236952/bhx/gao-thom-hat-ngoc-troi-thien-vuong-tui-5kg-202104261519374512_300x300.jpeg)",
          }}
          className="home-product__item-img"
        />
        <div className="home-product__item-info">
          <h4 className="home-product__item-name">{product.name}</h4>
          <div className="home-product__item-price">
            <span className="home-product__item-price-old">
              {product.remain} còn lại
            </span>
            <span className="home-product__item-price-current">
              {product.price} ₫
            </span>
          </div>
          <div className="home-product__item-action">
            <span className="home-product__item-action-heart home-product__item-action-heart--hearted">
              <i className="far fa-heart home-product__item-heart-icon-empty" />
              <i className="fas fa-heart home-product__item-heart-icon-fill" />
            </span>
            <span className="home-product__item-action-rating">
              {renderRating(product.evaluate)}
            </span>
            {/* <span className="home-product__item-action-sold">
              {product.remain} còn lại
            </span> */}
          </div>
        </div>
        {/* <div className="home-product__item-favorite">
          <i className="fas fa-check home-product__item-favorite--check" />
          <span>Yêu thích</span>
        </div>
        <div className="home-product__item-sale-off">
          <span className="home-product__item-sale-off-percent">10%</span>
          <span className="home-product__item-sale-off-label">Giảm</span>
        </div> */}
      </NavLink>
    </div>
  );
};

export default ProductItem;
