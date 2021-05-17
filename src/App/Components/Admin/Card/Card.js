import React from "react";

const Card = () => {
  return (
    <div className="card-single">
      <div className="card-flex">
        <div className="card-info">
          <div className="card-head">
            <span>Purchase</span>
            <small>Number of purchase</small>
          </div>
          <h2>17.663</h2>
          <small>2% less purchase</small>
        </div>
        <div className="card-chart success">
          <span className="fa fa-chart-line" />
        </div>
      </div>
    </div>
  );
};

export default Card;
