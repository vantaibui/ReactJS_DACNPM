import React from "react";
import { connect } from "react-redux";
import { useFormik } from "formik";

import * as Actions from "../../Redux/Actions";
import Product from "../../Components/User/Checkout/Product";
import { user_login } from "../../Configuration";
import { Redirect } from "react-router";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NavLink } from "react-router-dom";

toast.configure();

const PaymentPage = (props) => {
  let { credentials, productInCart } = props;

  const formik = useFormik({
    initialValues: {
      customerID: credentials?.id,
      total: productInCart.reduce((total, product, index) => {
        return (total += product?.productPrice * product?.quantity);
      }, 0),
      consigneeName: credentials?.username,
      consigneePhone: credentials?.phone,
      address: credentials?.address,
      payMethod: "COD",
      items: productInCart.map((item) => {
        return { productID: item?.productID, quantity: item?.quantity };
      }),
    },
    onSubmit: (values) => {
      props.onCheckout(values);
    },
  });

  let renderProduct = (products) => {
    return products.map((product, index) => {
      return <Product key={index} product={product} />;
    });
  };

  let renderProducts = (products) => {
    return products.map((product, index) => {
      return (
        <div key={index} className="product-info">
          <div className="product-info__wrapper">
            <div className="product-info__img">
              <img
                src={product?.productImage}
                alt="img"
                className="product-img"
              />
            </div>
            <div className="product-info__inner">
              <div className="product-name">{product?.productName}</div>
              <div className="product-quantity">
                <span className="product-quantity__title">SL: x</span>
                <span className="product-quantity__number">
                  {product?.quantity}
                </span>
              </div>
            </div>
            <div className="product-info__total">
              {product?.productPrice * product?.quantity} ???
            </div>
          </div>
        </div>
      );
    });
  };

  let renderCheckout = () => {
    return (
      <section className="checkout">
        <div className="checkout__content">
          <div className="grid">
            <h4>Chi ti???t h??a ????n</h4>
            <form onSubmit={formik.handleSubmit} className="checkout__form">
              <div className="grid__row">
                <div className="grid-column-8">
                  <div className="checkout__product-info">
                    {renderProducts(productInCart)}
                  </div>
                </div>
                <div className="grid-column-4">
                  <div className="checkout__form-info">
                    <h4>?????a ch??? giao h??ng</h4>
                    <div className="info-address">
                      <p className="info-address__name">
                        {credentials?.username}
                      </p>
                      <p className="info-address__street">
                        {credentials?.address}
                      </p>
                      <p className="info-address__phone">
                        ??i???n tho???i: <span>{credentials?.phone}</span>
                      </p>
                    </div>
                  </div>
                  <div className="checkout__form-order">
                    <h4>????n h??ng c???a b???n</h4>
                    <div className="checkout__order__title">
                      <span>S???n ph???m</span>
                      <span>T???ng</span>
                    </div>
                    <ul className="checkout__order__products">
                      {renderProduct(productInCart)}
                    </ul>
                    <div className="checkout__order__total">
                      <span className="title">Th??nh ti???n</span>
                      <span className="checkout__order__item-amount">
                        {productInCart.reduce((total, product, index) => {
                          return (total +=
                            product?.productPrice * product?.quantity);
                        }, 0)}{" "}
                        <span className="currency">???</span>
                      </span>
                    </div>
                    <button type="submit" className="checkout__order-btn">
                      ?????t h??ng
                    </button>
                    <NavLink
                      exact
                      to={`/user/${credentials?.id}/orders`}
                      className="btn btn-reset"
                      id="go-back"
                    >
                      ????n h??ng
                    </NavLink>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  };

  if (!localStorage.getItem(user_login)) {
    return (
      toast.warn("Vui l??ng ????ng nh???p tr?????c khi thanh to??n!", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1000,
      }),
      (<Redirect to="/login" />)
    );
  }
  return renderCheckout();
};

const mapStateToProps = (state) => {
  return {
    credentials: state.UserReducer.credentials,
    productInCart: state.CartReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCheckout: (values) => {
      return dispatch(Actions.actionCheckoutRequest(values));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PaymentPage);
