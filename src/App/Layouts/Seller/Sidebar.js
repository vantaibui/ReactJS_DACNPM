import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <input type="checkbox" name="sidebar-toggle" id="sidebar-toggle" />
      <div className="sidebar-seller">
        <div className="sidebar-brand">
          <h2>
            <i className="fab fa-accusoft" />
            <span>Accusoft</span>
          </h2>
        </div>
        <div className="sidebar-menu">
          <ul>
            <li>
              <NavLink exact to="/seller">
                <i className="fa fa-igloo" />
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/seller/customers">
                <i className="fa fa-users" />
                <span>Customer</span>
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/seller/categories">
                <i className="fa fa-clipboard-list" />
                <span>Category</span>
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/seller/products">
                <i className="fa fa-clipboard-list" />
                <span>Product</span>
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/seller/orders">
                <i className="fa fa-shopping-bag" />
                <span>Order</span>
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/seller/revenue-statistics">
                <i className="fa fa-receipt" />
                <span>Revenue Statistics</span>
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/seller/account">
                <i className="fa fa-user-circle" />
                <span>Accounts</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
