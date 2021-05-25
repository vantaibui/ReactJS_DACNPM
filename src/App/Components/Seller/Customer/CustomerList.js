import React from "react";
import { NavLink } from "react-router-dom";
import Customer from "./Customer";

const CustomerList = () => {
  return (
    <div className="customers">
      <div className="card">
        <div className="card-header">
          <h3>Khách hàng</h3>
          <NavLink exact to="/seller/customers" className="btn-link">
            Xem thêm <i className="fa fa-arrow-right" />
          </NavLink>
        </div>
        <div className="card-body">
          <Customer />
        </div>
      </div>
    </div>
  );
};

export default CustomerList;
