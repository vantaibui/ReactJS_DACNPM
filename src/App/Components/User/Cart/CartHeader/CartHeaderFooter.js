import React from "react";

const CartHeaderFooter = (props) => {
  let { products } = props;

  return (
    <div className="header__cart-total">
      <p className="header__cart-total-item">
        <span className="total-item__title">Tổng tiền :</span>
        <span className="total-item__value">
          {products.reduce((total, product, index) => {
            return (total += parseInt(
              product?.product.price * product?.quantity
            ));
          }, 0)}{" "}
          ₫
        </span>
      </p>
      <p className="header__cart-total-item"></p>
    </div>
  );
};

export default CartHeaderFooter;
