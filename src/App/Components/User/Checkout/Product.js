import React from "react";

const Product = (props) => {
  let { product } = props;
  return (
    <li className="checkout__order__item">
      <span className="checkout__order__item-name">
        {product?.productName}
        <strong className="quantity">× {product?.quantity}</strong>
      </span>
      <span className="checkout__order__item-amount">
        {product?.productPrice * product?.quantity}{" "}
        <span className="currency">₫</span>
      </span>
    </li>
  );
};

export default Product;
