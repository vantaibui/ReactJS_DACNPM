import React from "react";

const CartHeaderBody = (props) => {
  let { products } = props;

  let renderProduct = (products) => {
    return products.map((product, index) => {
      return (
        <li key={index} className="header__cart-item">
          <img
            src={product?.productImage}
            alt="abc"
            className="header__cart-item-img"
          />
          <div className="header__cart-item-info">
            <div className="info-head">
              <h5 className="header__cart-item-name">{product?.productName}</h5>
              <div className="header__cart-item-total">
                <span className="header__cart-item-price">
                  {product?.productPrice} ₫
                </span>
                <span className="header__cart-item-multiply">x</span>
                <span className="header__cart-item-quantity">
                  {product?.quantity}
                </span>
              </div>
            </div>
            <div className="info-body">
              <span className="header__cart-item-description">
                Phân loại: {product?.productName}
              </span>
              <button className="header__cart-item-remove">Xóa</button>
            </div>
          </div>
        </li>
      );
    });
  };

  return renderProduct(products);
};

export default CartHeaderBody;
