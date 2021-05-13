import React from "react";

const Product = (props) => {
  let { product } = props;
  return (
    <li className="checkout__order__item">
      <span className="checkout__order__item-name">
        {product?.product.name}
        <strong className="quantity">× 1</strong>
      </span>
      <span className="checkout__order__item-amount">
        {product?.product.price * product?.quantity}{" "}
        <span className="currency">₫</span>
      </span>
    </li>
  );
};

export default Product;
