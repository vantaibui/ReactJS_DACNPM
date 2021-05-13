import React from "react";

const CartHeaderBody = (props) => {
  let { products } = props;

  let renderProduct = (products) => {
    return products.map((product, index) => {
      return (
        <li key={index} className="header__cart-item">
          <img
            src="../Asserts/Images/User/smart-watch.jfif"
            alt="abc"
            className="header__cart-item-img"
          />
          <div className="header__cart-item-info">
            <div className="info-head">
              <h5 className="header__cart-item-name">
                {product?.product.name}
              </h5>
              <div className="header__cart-item-total">
                <span className="header__cart-item-price">
                  {product?.product.price} ₫
                </span>
                <span className="header__cart-item-multiply">x</span>
                <span className="header__cart-item-quantity">
                  {product?.quantity}
                </span>
              </div>
            </div>
            <div className="info-body">
              <span className="header__cart-item-description">
                Phân loại: {product?.product.category}
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
