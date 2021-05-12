import React from "react";

const CartProduct = () => {
  return (
    <li className="header__cart-item">
      <img
        src="../Asserts/Images/User/smart-watch.jfif"
        alt="abc"
        className="header__cart-item-img"
      />
      <div className="header__cart-item-info">
        <div className="info-head">
          <h5 className="header__cart-item-name">
            Ổ cứng SSD Indilinx 120Gb |Chính hãng
          </h5>
          <div className="header__cart-item-total">
            <span className="header__cart-item-price">200.000 ₫</span>
            <span className="header__cart-item-multiply">x</span>
            <span className="header__cart-item-quantity">1</span>
          </div>
        </div>
        <div className="info-body">
          <span className="header__cart-item-description">
            Phân loại: điện tử
          </span>
          <button className="header__cart-item-remove">Xóa</button>
        </div>
      </div>
    </li>
  );
};

export default CartProduct;
