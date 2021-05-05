import React from "react";
import "./style.css";

import QR from "../../../Assets/Images/User/QR.png";
import AppStore from "../../../Assets/Images/User/AppStore.png";
import GooglePlay from "../../../Assets/Images/User/GooglePlay.png";
import AppGallery from "../../../Assets/Images/User/AppGallery.png";
import Avatar from "../../../Assets/Images/User/avatar.png";

import Logo from "../../../Assets/Images/User/logo.jfif";

const Header = () => {
  return (
    <header className="header">
      <div className="grid">
        <nav className="header__navbar">
          <ul className="header__navbar-list">
            <li className="header__navbar-item header__navbar-item--separate">
              <a href="#" className="header__navbar-item-link">
                Kênh người bán
              </a>
            </li>
            <li className="header__navbar-item header__navbar-item--form-toggle header__navbar-item--separate">
              Tải ứng dụng
              <div className="header__qr">
                <img src={QR} alt="QR" className="header__qr-img" />
                <div className="header__qr-apps">
                  <a href className="header__qr-link">
                    <img
                      src={AppStore}
                      alt="App Store"
                      className="header__qr-download"
                    />
                  </a>
                  <a href className="header__qr-link">
                    <img
                      src={GooglePlay}
                      alt="Google Play"
                      className="header__qr-download"
                    />
                  </a>
                  <a href className="header__qr-link">
                    <img
                      src={AppGallery}
                      alt="App Gallery"
                      className="header__qr-download"
                    />
                  </a>
                </div>
              </div>
            </li>
            <li className="header__navbar-item">
              <span className="header__navbar-title--no-pointer">Kết nối</span>
              <a
                title="Kết nối facebook"
                href="#"
                className="header__navbar-icon-link"
              >
                <i className="header__navbar-icon fab fa-facebook" />
              </a>
              <a
                title="Kết nối instagram"
                href="#"
                className="header__navbar-icon-link"
              >
                <i className="header__navbar-icon fab fa-instagram" />
              </a>
            </li>
          </ul>
          <ul className="header__navbar-list header__navbar-list--right">
            <li className="header__navbar-item header__navbar-item--form-toggle">
              <a href="#" className="header__navbar-item-link">
                <i className="far fa-bell header__navbar-icon" />
                Thông báo
              </a>
              <div className="header__notification">
                <div className="header__notification-header">
                  <h3>Thông báo mới nhận</h3>
                </div>
                <ul className="header__notification-list">
                  <li className="header__notification-item">
                    <a href className="header__notification-link">
                      <img
                        src="../Asserts/Images/User/smart-watch.jfif"
                        alt="image"
                        className="header__notification-img"
                      />
                      <div className="header__notification-info">
                        <span className="header__notification-name">
                          Công bố sản phẩm mới Ohui tháng 1 năm 2021
                        </span>
                        <span className="header__notification-description">
                          Để cảm ơn sự ủng hộ và yêu thích của khách hàng đối
                          với chúng tôi, chương trình Khách Hàng Thân Thiết đã
                          được ra đời.
                        </span>
                      </div>
                    </a>
                  </li>
                  <li className="header__notification-item">
                    <a href className="header__notification-link">
                      <img
                        src="../Asserts/Images/User/smart-watch.jfif"
                        alt="image"
                        className="header__notification-img"
                      />
                      <div className="header__notification-info">
                        <span className="header__notification-name">
                          Sản phẩm chính hãng
                        </span>
                        <span className="header__notification-description">
                          Mô tả sản phẩm
                        </span>
                      </div>
                    </a>
                  </li>
                  <li className="header__notification-item">
                    <a href className="header__notification-link">
                      <img
                        src="../Asserts/Images/User/smart-watch.jfif"
                        alt="image"
                        className="header__notification-img"
                      />
                      <div className="header__notification-info">
                        <span className="header__notification-name">
                          Sản phẩm chính hãng
                        </span>
                        <span className="header__notification-description">
                          Để cảm ơn sự ủng hộ và yêu thích của khách hàng đối
                          với chúng tôi, chương trình Khách Hàng Thân Thiết đã
                          được ra đời.
                        </span>
                      </div>
                    </a>
                  </li>
                  <li className="header__notification-item">
                    <a href className="header__notification-link">
                      <img
                        src="../Asserts/Images/User/smart-watch.jfif"
                        alt="image"
                        className="header__notification-img"
                      />
                      <div className="header__notification-info">
                        <span className="header__notification-name">
                          Sản phẩm chính hãng
                        </span>
                        <span className="header__notification-description">
                          Để cảm ơn sự ủng hộ và yêu thích của khách hàng đối
                          với chúng tôi, chương trình Khách Hàng Thân Thiết đã
                          được ra đời.
                        </span>
                      </div>
                    </a>
                  </li>
                  <li className="header__notification-item header__notification-item--viewed">
                    <a href className="header__notification-link">
                      <img
                        src="../Asserts/Images/User/smart-watch.jfif"
                        alt="image"
                        className="header__notification-img"
                      />
                      <div className="header__notification-info">
                        <span className="header__notification-name">
                          Sản phẩm chính hãng
                        </span>
                        <span className="header__notification-description">
                          Mô tả sản phẩm
                        </span>
                      </div>
                    </a>
                  </li>
                </ul>
                <div className="header__notification-footer">
                  <a href="#" className="header__notification-btn">
                    Xem tất cả
                  </a>
                </div>
              </div>
            </li>
            <li className="header__navbar-item">
              <a href className="header__navbar-item-link">
                <i className="far fa-question-circle header__navbar-icon" />
                Hỗ trợ
              </a>
            </li>
            {/* <li
      class="header__navbar-item header__navbar-item--strong header__navbar-item--separate"
    >
      Đăng ký
    </li>
    <li
      onclick="toggle()"
      class="header__navbar-item header__navbar-item--strong"
      id="blur"
    >
      Đăng nhập
    </li> */}
            <li className="header__navbar-item header__navbar-item--form-toggle header__navbar-user">
              <img
                src={Avatar}
                alt="avatar"
                className="header__navbar-user-img"
              />
              <span className="header__navbar-user-name">Tai Bui</span>
              <ul className="header__navbar-user-menu">
                <li className="header__navbar-user-item">
                  <a className="header__navbar-user-link" href>
                    Tài khoản của tôi
                  </a>
                </li>
                <li className="header__navbar-user-item">
                  <a className="header__navbar-user-link" href>
                    Đơn mua
                  </a>
                </li>
                <li className="header__navbar-user-item header__navbar-user-item--separate">
                  <a className="header__navbar-user-link" href>
                    Đăng xuất
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <div className="header-with-search">
          <div className="header__logo">
            <a href="./index.html" className="header__logo-link">
              <img className="header__logo-img" src={Logo} alt="logo" />
            </a>
          </div>
          <div className="header__search">
            <form>
              <div className="header__search-input-wrap">
                <input
                  type="text"
                  className="header__search-input"
                  placeholder="Nhập để tìm kiếm sản phẩm"
                />
                <div className="header__search-history">
                  <h3 className="header__search-history-heading">
                    Lịch sử tìm kiếm
                  </h3>
                  <ul className="header__search-history-list">
                    <li className="header__search-history-item">
                      <a href className="history-item__link">
                        Trứng gà
                      </a>
                    </li>
                    <li className="header__search-history-item">
                      <a href className="history-item__link">
                        Trứng gà
                      </a>
                    </li>
                    <li className="header__search-history-item">
                      <a href className="history-item__link">
                        Trứng gà
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <button className="header__search-btn">
                <i className="fas fa-search header__search-btn-icon" />
              </button>
            </form>
          </div>
          <div className="header__cart">
            <a href className="header__cart-link header__cart-link--toggle">
              <i className="fas fa-shopping-cart header__cart-link-icon" />
              <span className="header__cart-notice">3</span>
              {/* <div class="header__cart-list header__cart-list--no-cart">
        <img
          class="header__cart-list-img"
          src="../Asserts/Images/User/no-cart.png"
          alt="Cart"
        />
        <p class="header__cart-list-msg">Chưa có sản phẩm</p>
      </div> */}
              <div className="header__cart-list">
                <h4 className="header__cart-list-heading">Sản phẩm đã thêm</h4>
                <ul className="header__cart-list-item">
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
                          <span className="header__cart-item-price">
                            200.000 ₫
                          </span>
                          <span className="header__cart-item-multiply">x</span>
                          <span className="header__cart-item-quantity">1</span>
                        </div>
                      </div>
                      <div className="info-body">
                        <span className="header__cart-item-description">
                          Phân loại: điện tử
                        </span>
                        <button className="header__cart-item-remove">
                          Xóa
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="header__cart-item">
                    <img
                      src="../Asserts/Images/User/smart-watch.jfif"
                      alt="abc"
                      className="header__cart-item-img"
                    />
                    <div className="header__cart-item-info">
                      <div className="info-head">
                        <h5 className="header__cart-item-name">
                          Ổ cứng SSD Indilinx 120Gb |Chính hãng Ổ cứng SSD
                          Indilinx 120Gb |Chính hãng Ổ cứng SSD Indilinx 120Gb
                          |Chính hãng
                        </h5>
                        <div className="header__cart-item-total">
                          <span className="header__cart-item-price">
                            200.000 ₫
                          </span>
                          <span className="header__cart-item-multiply">x</span>
                          <span className="header__cart-item-quantity">1</span>
                        </div>
                      </div>
                      <div className="info-body">
                        <span className="header__cart-item-description">
                          Phân loại: điện tử
                        </span>
                        <button className="header__cart-item-remove">
                          Xóa
                        </button>
                      </div>
                    </div>
                  </li>
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
                          <span className="header__cart-item-price">
                            200.000 ₫
                          </span>
                          <span className="header__cart-item-multiply">x</span>
                          <span className="header__cart-item-quantity">1</span>
                        </div>
                      </div>
                      <div className="info-body">
                        <span className="header__cart-item-description">
                          Phân loại: điện tử
                        </span>
                        <button className="header__cart-item-remove">
                          Xóa
                        </button>
                      </div>
                    </div>
                  </li>
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
                          <span className="header__cart-item-price">
                            200.000 ₫
                          </span>
                          <span className="header__cart-item-multiply">x</span>
                          <span className="header__cart-item-quantity">1</span>
                        </div>
                      </div>
                      <div className="info-body">
                        <span className="header__cart-item-description">
                          Phân loại: điện tử
                        </span>
                        <button className="header__cart-item-remove">
                          Xóa
                        </button>
                      </div>
                    </div>
                  </li>
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
                          <span className="header__cart-item-price">
                            200.000 ₫
                          </span>
                          <span className="header__cart-item-multiply">x</span>
                          <span className="header__cart-item-quantity">1</span>
                        </div>
                      </div>
                      <div className="info-body">
                        <span className="header__cart-item-description">
                          Phân loại: điện tử
                        </span>
                        <button className="header__cart-item-remove">
                          Xóa
                        </button>
                      </div>
                    </div>
                  </li>
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
                          <span className="header__cart-item-price">
                            200.000 ₫
                          </span>
                          <span className="header__cart-item-multiply">x</span>
                          <span className="header__cart-item-quantity">1</span>
                        </div>
                      </div>
                      <div className="info-body">
                        <span className="header__cart-item-description">
                          Phân loại: điện tử
                        </span>
                        <button className="header__cart-item-remove">
                          Xóa
                        </button>
                      </div>
                    </div>
                  </li>
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
                          <span className="header__cart-item-price">
                            200.000 ₫
                          </span>
                          <span className="header__cart-item-multiply">x</span>
                          <span className="header__cart-item-quantity">1</span>
                        </div>
                      </div>
                      <div className="info-body">
                        <span className="header__cart-item-description">
                          Phân loại: điện tử
                        </span>
                        <button className="header__cart-item-remove">
                          Xóa
                        </button>
                      </div>
                    </div>
                  </li>
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
                          <span className="header__cart-item-price">
                            200.000 ₫
                          </span>
                          <span className="header__cart-item-multiply">x</span>
                          <span className="header__cart-item-quantity">1</span>
                        </div>
                      </div>
                      <div className="info-body">
                        <span className="header__cart-item-description">
                          Phân loại: điện tử
                        </span>
                        <button className="header__cart-item-remove">
                          Xóa
                        </button>
                      </div>
                    </div>
                  </li>
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
                          <span className="header__cart-item-price">
                            200.000 ₫
                          </span>
                          <span className="header__cart-item-multiply">x</span>
                          <span className="header__cart-item-quantity">1</span>
                        </div>
                      </div>
                      <div className="info-body">
                        <span className="header__cart-item-description">
                          Phân loại: điện tử
                        </span>
                        <button className="header__cart-item-remove">
                          Xóa
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
                <div className="header__cart-list-footer">
                  <div className="header__cart-total">
                    <p className="header__cart-total-item">
                      <span className="total-item__title">Tổng tiền :</span>
                      <span className="total-item__value">200.000 ₫</span>
                    </p>
                    <p className="header__cart-total-item">
                      <span className="total-item__title">Ví tích điểm</span>
                      <span className="total-item__value">+200.000 điểm</span>
                    </p>
                  </div>
                  <div className="header__cart-view-cart">
                    <button className="btn btn-primary view-cart__btn">
                      Xem giỏ hàng
                    </button>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
