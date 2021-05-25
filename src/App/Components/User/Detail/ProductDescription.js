import React from "react";

const ProductDescription = (props) => {
  let { credentials, productDetail } = props;

  // let onAddProductToCart = (userID, productID, productPrice, quantity) => {
  //   props.onAddProductToCart(userID, productID, productPrice, quantity);
  // };

  let onAddProductToCart = (productID) => {
    let values = {
      product: productID,
      qty: 1,
    };
    props.onAddProductToCart(values);
  };

  let renderRating = (rating) => {
    let result;
    let iconStar = <i className="fas fa-star star--gold" />;
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
    <div className="product-description">
      <h3 className="product-description__name">{productDetail?.name}</h3>
      <div className="product-description__rating">
        {renderRating(productDetail?.evaluate)}
      </div>
      <div className="product-description__price">
        {productDetail?.price}
        <span className="product-description__price-currency">₫</span>
      </div>
      <p className="product-description__des">{productDetail?.description}</p>
      <div className="product-description__quantity">
        <div className="quantity">
          <div className="quantity__inner">
            <span className="quantity__btn"> - </span>
            <span className="quantity__value"> 1 </span>
            <span className="quantity__btn"> + </span>
          </div>
        </div>
        <button
          onClick={() => {
            onAddProductToCart(productDetail?.id);
          }}
          className="product-description__add-cart"
        >
          Thêm vào giỏ hàng
        </button>
      </div>
      <ul className="product-description__ul">
        <li className="product-description__li">
          <span className="product-description__title">Danh mục</span>
          <span className="product-description__value">
            {productDetail?.category}
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
  );
};

export default ProductDescription;
