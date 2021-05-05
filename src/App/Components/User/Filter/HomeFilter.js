import React from "react";

const HomeFilter = () => {
  return (
    <div className="home-filter">
      <div className="home-filter__left">
        <span className="home-filter__label">Sắp xếp theo</span>
        <button className="btn home-filter-btn">Phổ biến</button>
        <button className="btn home-filter-btn home-filter-btn--primary">
          Mới nhất
        </button>
        <button className="btn home-filter-btn">Bán chạy</button>
        <div className="select-input">
          <span className="select-input__label">Giá</span>
          <i className="fas fa-angle-down select-input__icon" />
          {/* List option */}
          <ul className="select-input__list">
            <li className="select-input__item">
              <a href className="select-input__link">
                Giá: Thấp đến cao
              </a>
            </li>
            <li className="select-input__item">
              <a href className="select-input__link">
                Giá: Cao đến thấp
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="home-filter__paginate">
        <span className="home-filter__paginate-num">
          <span className="home-filter__paginate-current">1</span>/
          <span className="home-filter__paginate-total">14</span>
        </span>
        <div className="home-filter__paginate-control">
          <a
            href
            className="home-filter__paginate-btn home-filter__paginate-btn--disable"
          >
            <i className="fas fa-angle-left home-filter__paginate-icon" />
          </a>
          <a href className="home-filter__paginate-btn">
            <i className="fas fa-angle-right home-filter__paginate-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeFilter;
