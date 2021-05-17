import React from "react";
import Order from "./Order";

const Orders = () => {
  return (
    <div className="customers">
      <div className="card">
        <div className="card-header">
          <h3>New customer</h3>
          <button>
            See all <i className="fas fa-arrow-right" />
          </button>
        </div>
        <div className="card-body">
          <Order />
        </div>
      </div>
    </div>
  );
};

export default Orders;
