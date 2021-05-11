import React from "react";

const CartPage = () => {
  return (
    <>
      <section className="shopping-cart">
        <div className="grid">
          <div className="grid__row">
            <div className="grid__full-width">
              <div className="shopping-cart__table">
                <table className="cart-table">
                  <thead className="cart-table__head">
                    <tr className="cart-table__head-row">
                      <th className="cart-table__head-item">sản phẩm</th>
                      <th className="cart-table__head-price">giá</th>
                      <th className="cart-table__head-quantity">số lượng</th>
                      <th className="cart-table__head-total">tổng</th>
                      <th className="cart-table__head-action" />
                    </tr>
                  </thead>
                  <tbody className="cart-table__body">
                    <tr className="cart-table__body-row">
                      <td className="cart-table__body-item">
                        <img
                          src="../Assets/Images/User/product-details-1.jpg"
                          alt="img"
                          className="item__img"
                        />
                        <h5 className="item__name">Vegetable’s Package</h5>
                      </td>
                      <td className="cart-table__body-price">
                        70,000
                        <span className="cart-table__body-currency">₫</span>
                      </td>
                      <td className="cart-table__body-quantity">
                        <div className="quantity">
                          <div className="quantity__inner">
                            <span className="quantity__btn"> - </span>
                            <span className="quantity__value"> 2 </span>
                            <span className="quantity__btn"> + </span>
                          </div>
                        </div>
                      </td>
                      <td className="cart-table__body-total">
                        70,000
                        <span className="cart-table__body-currency">₫</span>
                      </td>
                      <td className="cart-table__body-delete">
                        <i className="fa fa-times cart-table__body-icon" />
                      </td>
                    </tr>
                  </tbody>
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
              <div className="shopping-cart__checkout">
                <h5>tổng số lượng</h5>
                <ul className="checkout__menu">
                  <li className="checkout__subtotal">
                    <span className="checkout__subtotal-title">Tổng phụ</span>
                    <span className="checkout__subtotal-total">70,000₫</span>
                  </li>
                  <li className="checkout__total">
                    <span className="checkout__subtotal-title">Tổng</span>
                    <span className="checkout__subtotal-total">70,000₫</span>
                  </li>
                </ul>
                <a href className="checkout__btn">
                  tiến hành thanh toán
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CartPage;
