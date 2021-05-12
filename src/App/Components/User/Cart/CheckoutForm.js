import React from "react";
import { NavLink } from "react-router-dom";

const CheckoutForm = (props) => {
  let { products } = props;
  console.log(products);
  return (
    <div className="shopping-cart__checkout">
      <h5>tổng số lượng</h5>
      <ul className="checkout__menu">
        <li className="checkout__subtotal">
          <span className="checkout__subtotal-title">Tổng phụ</span>
          <span className="checkout__subtotal-total">
            {products.reduce((total, product, index) => {
              return (total += parseInt(
                product?.product.price * product?.quantity
              ));
            }, 0)}
            <span className="cart-table__body-currency">₫</span>
          </span>
        </li>
        <li className="checkout__total">
          <span className="checkout__subtotal-title">Tổng</span>
          <span className="checkout__subtotal-total">
            {products.reduce((total, product, index) => {
              return (total += parseInt(
                product?.product.price * product?.quantity
              ));
            }, 0)}
            <span className="cart-table__body-currency">₫</span>
          </span>
        </li>
      </ul>
      <NavLink exact to="/payment" className="checkout__btn">
        tiến hành thanh toán
      </NavLink>
    </div>
  );
};

export default CheckoutForm;
