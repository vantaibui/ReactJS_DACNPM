import React from "react";
import { connect } from "react-redux";

import * as Actions from "../../Redux/Actions";

import TableBody from "../../Components/User/Cart/TableBody";
import TableHead from "../../Components/User/Cart/TableHead";
import CheckoutForm from "../../Components/User/Cart/CheckoutForm";

const CartPage = (props) => {
  let { products } = props;

  let onDeleteProductInCart = (id) => {
    props.onDeleteProductInCart(id);
  };

  let onUpdateProductInCart = (product, quantity) => {
    props.onUpdateProductInCart(product, quantity);
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
                  products={products}
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
            <CheckoutForm products={products} />
          </div>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.CartReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteProductInCart: (product) => {
      return dispatch(Actions.actionDeleteProductInCartRequest(product));
    },
    onUpdateProductInCart: (product, quantity) => {
      return dispatch(
        Actions.actionUpdateProductInCartRequest(product, quantity)
      );
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
