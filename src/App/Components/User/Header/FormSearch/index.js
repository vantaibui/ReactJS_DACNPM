import React from "react";

const FormSearch = (props) => {
  return (
    <form>
      <div className="header__search-input-wrap">
        <input
          type="text"
          className="header__search-input"
          placeholder="Nhập để tìm kiếm sản phẩm"
        />
        <div className="header__search-history">
          <h3 className="header__search-history-heading">Lịch sử tìm kiếm</h3>
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
  );
};

export default FormSearch;
