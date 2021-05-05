import React from "react";

const RevenueStatistics = () => {
  return (
    <div className="cards">
      <div className="card-single">
        <div className="card-info">
          <h1>54</h1>
          <span>Customer</span>
        </div>
        <div className="card-icon">
          <i className="fa fa-users" />
        </div>
      </div>
      <div className="card-single">
        <div className="card-info">
          <h1>79</h1>
          <span>Projects</span>
        </div>
        <div className="card-icon">
          <i className="fa fa-clipboard-list" />
        </div>
      </div>
      <div className="card-single">
        <div className="card-info">
          <h1>124</h1>
          <span>Orders</span>
        </div>
        <div className="card-icon">
          <i className="fa fa-shopping-bag" />
        </div>
      </div>
      <div className="card-single">
        <div className="card-info">
          <h1>$6k</h1>
          <span>Income</span>
        </div>
        <div className="card-icon">
          <i className="fab fa-google-wallet" />
        </div>
      </div>
    </div>
  );
};

export default RevenueStatistics;
