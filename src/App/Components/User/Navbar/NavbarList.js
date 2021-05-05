import React from "react";
import NavbarItem from "./NavbarItem";

const NavbarList = () => {
  return (
    <nav className="category">
      <h3 className="category__heading">
        <i className="fa fa-list-ul category__heading-icon" />
        Danh mục
      </h3>
      <ul className="category__list">
        <NavbarItem />
        <li className="category__item">
          <a href className="category__item-link">
            thịt, cá, trứng, rau
          </a>
        </li>
        <li className="category__item">
          <a href className="category__item-link">
            đồ uống các loại
          </a>
        </li>
        <li className="category__item">
          <a href className="category__item-link">
            sữa uống các loại
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarList;
