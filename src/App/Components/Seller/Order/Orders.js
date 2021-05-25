import React from "react";
import { NavLink } from "react-router-dom";
import Order from "./Order";

const Orders = () => {
  return (
    <div className="customers">
      <div className="card">
        <div className="card-header">
          <h3>New customer</h3>
          <NavLink exact to="/seller/orders" className="btn-link">
            Xem thêm <i className="fa fa-arrow-right" />
          </NavLink>
        </div>
        <div className="card-body">
          <Order />
        </div>
      </div>
    </div>
  );
};

export default Orders;
