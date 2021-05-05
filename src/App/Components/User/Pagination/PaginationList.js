import React from "react";
import "./style.css";

const PaginationList = () => {
  return (
    <ul className="home-pagination pagination">
      <li className="pagination-item">
        <a href className="pagination-item__link">
          <i className="fas fa-chevron-left pagination-item__icon" />
        </a>
      </li>
      <li className="pagination-item pagination-item--active">
        <a href className="pagination-item__link">
          {" "}
          1{" "}
        </a>
      </li>
      <li className="pagination-item">
        <a href className="pagination-item__link">
          {" "}
          2{" "}
        </a>
      </li>
      <li className="pagination-item">
        <a href className="pagination-item__link">
          3
        </a>
      </li>
      <li className="pagination-item">
        <a href className="pagination-item__link">
          4
        </a>
      </li>
      <li className="pagination-item">
        <a href className="pagination-item__link">
          ...
        </a>
      </li>
      <li className="pagination-item">
        <a href className="pagination-item__link">
          <i className="fas fa-chevron-right pagination-item__icon" />
        </a>
      </li>
    </ul>
  );
};

export default PaginationList;
