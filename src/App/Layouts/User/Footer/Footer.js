import React from "react";
import "./style.css";

import QR from "../../../Assets/Images/User/QR.png";
import AppStore from "../../../Assets/Images/User/AppStore.png";
import GooglePlay from "../../../Assets/Images/User/GooglePlay.png";
import AppGallery from "../../../Assets/Images/User/AppGallery.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="grid">
          <div className="grid__row">
            <div className="grid-column-2-4">
              <div className="footer-item">
                <h3 className="footer-item__heading">CHĂM SÓC KHÁCH HÀNG</h3>
                <ul className="footer-item__list">
                  <li className="footer-item__list-item">
                    <a href className="footer-item__list-link">
                      trung tâm trợ giúp
                    </a>
                  </li>
                  <li className="footer-item__list-item">
                    <a href className="footer-item__list-link">
                      {" "}
                      Shopee blog{" "}
                    </a>
                  </li>
                  <li className="footer-item__list-item">
                    <a href className="footer-item__list-link">
                      {" "}
                      Shpee mall{" "}
                    </a>
                  </li>
                  <li className="footer-item__list-item">
                    <a href className="footer-item__list-link">
                      Hướng dẫn mua hàng
                    </a>
                  </li>
                  <li className="footer-item__list-item">
                    <a href className="footer-item__list-link">
                      hướng dẫn bán hàng
                    </a>
                  </li>
                  <li className="footer-item__list-item">
                    <a href className="footer-item__list-link">
                      {" "}
                      thanh toán{" "}
                    </a>
                  </li>
                  <li className="footer-item__list-item">
                    <a href className="footer-item__list-link">
                      {" "}
                      shopee xu{" "}
                    </a>
                  </li>
                  <li className="footer-item__list-item">
                    <a href className="footer-item__list-link">
                      {" "}
                      vận chuyển{" "}
                    </a>
                  </li>
                  <li className="footer-item__list-item">
                    <a href className="footer-item__list-link">
                      trả hàng &amp; hoàn tiền
                    </a>
                  </li>
                  <li className="footer-item__list-item">
                    <a href className="footer-item__list-link">
                      chăm sóc khách hàng
                    </a>
                  </li>
                  <li className="footer-item__list-item">
                    <a href className="footer-item__list-link">
                      chính sách bảo hành
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid-column-2-4">
              <div className="footer-item">
                <h3 className="footer-item__heading">VỀ SHOPEE</h3>
                <ul className="footer-item__list">
                  <li className="footer-item__list-item">
                    <a href className="footer-item__list-link">
                      giới thiệu về shpee việt nam
                    </a>
                  </li>
                  <li className="footer-item__list-item">
                    <a href className="footer-item__list-link">
                      tuyển dụng
                    </a>
                  </li>
                  <li className="footer-item__list-item">
                    <a href className="footer-item__list-link">
                      điều khoản shopee
                    </a>
                  </li>
                  <li className="footer-item__list-item">
                    <a href className="footer-item__list-link">
                      chính sách bảo mật
                    </a>
                  </li>
                  <li className="footer-item__list-item">
                    <a href className="footer-item__list-link">
                      chính hãng
                    </a>
                  </li>
                  <li className="footer-item__list-item">
                    <a href className="footer-item__list-link">
                      kênh người bán
                    </a>
                  </li>
                  <li className="footer-item__list-item">
                    <a href className="footer-item__list-link">
                      flash sales
                    </a>
                  </li>
                  <li className="footer-item__list-item">
                    <a href className="footer-item__list-link">
                      chương trình tiếp thị liên kết shopee
                    </a>
                  </li>
                  <li className="footer-item__list-item">
                    <a href className="footer-item__list-link">
                      liên hệ với truyền thông
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid-column-2-4">
              <div className="footer-item">
                <h3 className="footer-item__heading">THANH TOÁN</h3>
              </div>
            </div>
            <div className="grid-column-2-4">
              <div className="footer-item">
                <h3 className="footer-item__heading">
                  THEO DÕI CHÚNG TÔI TRÊN
                </h3>
                <ul className="footer-item__list">
                  <li className="footer-item__list-item">
                    <a href className="footer-item__list-link">
                      <i className="fab fa-facebook footer-item__icon" />
                      Facebook
                    </a>
                  </li>
                  <li className="footer-item__list-item">
                    <a href className="footer-item__list-link">
                      <i className="fab fa-instagram-square footer-item__icon" />
                      Instagram
                    </a>
                  </li>
                  <li className="footer-item__list-item">
                    <a href className="footer-item__list-link">
                      <i className="fab fa-linkedin footer-item__icon" />
                      Linked in
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid-column-2-4">
              <div className="footer-item">
                <h3 className="footer-item__heading">
                  TẢI ỨNG DỤNG SHOPEE NGAY THÔI
                </h3>
                <div className="footer-item__app">
                  <a href className="footer-item__qr">
                    <img src={QR} alt="img" className="footer-item__qr-img" />
                  </a>
                  <ul className="footer-item__list">
                    <li className="footer-item__list-item">
                      <a href className="footer-item__list-link">
                        <img
                          src={AppStore}
                          alt="app"
                          className="footer-item__list-img"
                        />
                      </a>
                    </li>
                    <li className="footer-item__list-item">
                      <a href className="footer-item__list-link">
                        <img
                          src={GooglePlay}
                          alt="app"
                          className="footer-item__list-img"
                        />
                      </a>
                    </li>
                    <li className="footer-item__list-item">
                      <a href className="footer-item__list-link">
                        <img
                          src={AppGallery}
                          alt="app"
                          className="footer-item__list-img"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="grid">
          <div className="footer-text">
            <p className="footer-text__item">
              © 2021 Shopee. Tất cả các quyền được bảo lưu.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
