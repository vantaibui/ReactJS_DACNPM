import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import * as Actions from "../../Redux/Actions";

import TableBody from "../../Components/User/Cart/TableBody";
import TableHead from "../../Components/User/Cart/TableHead";
import CheckoutForm from "../../Components/User/Cart/CheckoutForm";

const CartPage = (props) => {
  let { credentials, productInCart } = props;

  useEffect(() => {
    props.fetchProductInCart(credentials?.id);
  }, []);

  let onUpdateProductInCart = (productID, action) => {
    let values = {
      userID: credentials?.id,
      productID: productID,
      action: action,
    };
    props.onUpdateProductInCart(values);
  };

  let onDeleteProductInCart = (productID) => {
    let values = {
      userID: credentials?.id,
      productID: productID,
    };
    props.onDeleteProductInCart(values);
  };

  return (
    <section className="shopping-cart">
      <div className="grid">
        <div className="grid__row">
          <div className="grid__full-width">
            <div className="shopping-cart__table">
              <table className="cart-table">
                <TableHead />
                <TableBody
                  products={productInCart}
                  onDeleteProductInCart={onDeleteProductInCart}
                  onUpdateProductInCart={onUpdateProductInCart}
                />
              </table>
            </div>
          </div>
        </div>
        <div className="grid__row grid__row--modifier">
          <div className="grid-column-6">
            <div className="shopping-cart__discount">
              <h5>Mã giảm giá</h5>
              <form className="shopping-cart__discount-form">
                <input
                  type="text"
                  className="discount-form__input"
                  placeholder="Nhập mã phiếu giảm giá"
                />
                <button className="discount-form__btn">áp dụng</button>
              </form>
            </div>
          </div>
          <div className="grid-column-6">
            <CheckoutForm products={productInCart} />
          </div>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    credentials: state.UserReducer.credentials,
    productInCart: state.CartReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProductInCart: (userID) => {
      return dispatch(Actions.actionFetchProductInCartByUserID(userID));
    },
    onUpdateProductInCart: (values) => {
      return dispatch(Actions.actionUpdateProductInCartRequest(values));
    },
    onDeleteProductInCart: (values) => {
      return dispatch(Actions.actionDeleteProductInCartRequest(values));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
