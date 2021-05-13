import React from "react";
import { connect } from "react-redux";
import { useFormik } from "formik";

import * as Actions from "../../Redux/Actions";
import Product from "../../Components/User/Checkout/Product";

const PaymentPage = (props) => {
  let { products } = props;

  const formik = useFormik({
    initialValues: {},
    onSubmit: (values) => {
      console.log(values);
    },
  });

  let renderProduct = (products) => {
    return products.map((product, index) => {
      return <Product key={index} product={product} />;
    });
  };

  return (
    <section className="checkout">
      <div className="checkout__content">
        <div className="grid">
          <h4>Chi tiết hóa đơn</h4>
          <form onSubmit={formik.handleSubmit} className="checkout__form">
            <div className="grid__row">
              <div className="grid-column-8">
                <div className="checkout__form-info">
                  <h5>1. Thông tin người nhận hàng:</h5>
                  <div className="form-group">
                    <span className="gender">
                      <input
                        type="radio"
                        className="gender__input"
                        defaultValue={1}
                        name="gender"
                      />
                      <label htmlFor="male" className="gender__label">
                        Anh
                      </label>
                    </span>
                    <span className="gender">
                      <input
                        type="radio"
                        className="gender__input"
                        defaultValue={0}
                        name="gender"
                      />
                      <label htmlFor="female" className="gender__label">
                        Chị
                      </label>
                    </span>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-group__input"
                      name="name"
                    />
                    <label htmlFor="name" className="form-group__label">
                      Họ và tên
                    </label>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-group__input"
                      name="phone"
                    />
                    <label htmlFor="phone" className="form-group__label">
                      Số điện thoại
                    </label>
                  </div>
                  <h5>2. Địa chỉ nhận hàng:</h5>
                  <div className="grid__row">
                    <div className="grid-column-6">
                      <div className="form-group form-group--modifier">
                        <input
                          type="text"
                          className="form-group__input"
                          name="city"
                        />
                        <label htmlFor="city" className="form-group__label">
                          Thành phố, Tỉnh, ...
                        </label>
                      </div>
                    </div>
                    <div className="grid-column-6">
                      <div className="form-group form-group--modifier">
                        <input
                          type="text"
                          className="form-group__input"
                          name="district"
                        />
                        <label htmlFor="district" className="form-group__label">
                          Quận, Huyện, ...
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-group__input"
                      name="ward"
                    />
                    <label htmlFor="ward" className="form-group__label">
                      Phường, Xã, ...
                    </label>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-group__input"
                      name="apartment"
                    />
                    <label htmlFor="apartment" className="form-group__label">
                      Số nhà, tên đường
                    </label>
                  </div>
                </div>
              </div>
              <div className="grid-column-4">
                <div className="checkout__form-order">
                  <h4>đơn hàng của bạn</h4>
                  <div className="checkout__order__title">
                    <span>Sản phẩm</span>
                    <span>Tổng</span>
                  </div>
                  <ul className="checkout__order__products">
                    {renderProduct(products)}
                  </ul>
                  <div className="checkout__order__subtotal">
                    <span className="title">Tổng phụ</span>
                    <span className="checkout__order__item-amount">
                      {products.reduce((total, product, index) => {
                        return (total +=
                          product?.product.price * product?.quantity);
                      }, 0)}{" "}
                      <span className="currency">₫</span>
                    </span>
                  </div>
                  <div className="checkout__order__total">
                    <span className="title">Tổng</span>
                    <span className="checkout__order__item-amount">
                      {products.reduce((total, product, index) => {
                        return (total +=
                          product?.product.price * product?.quantity);
                      }, 0)}{" "}
                      <span className="currency">₫</span>
                    </span>
                  </div>
                  <button type="submit" className="checkout__order-btn">
                    Đặt hàng
                  </button>
                </div>
              </div>
            </div>
          </form>
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
    onCheckout: (values) => {
      return dispatch(Actions.actionCheckoutRequest(values));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PaymentPage);
