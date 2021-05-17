import React from "react";
import { NavLink } from "react-router-dom";

const NavbarItem = (props) => {
  let { category } = props;

  return (
    <li className="category__item">
      <NavLink
        exact
        to={`/products/category/${category.id}`}
        className="category__item-link"
      >
        {category?.name}
      </NavLink>
    </li>
  );
};

export default NavbarItem;
