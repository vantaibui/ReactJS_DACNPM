import React from "react";
import Customer from "./Customer";

const CustomerList = () => {
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
          <Customer />
        </div>
      </div>
    </div>
  );
};

export default CustomerList;
