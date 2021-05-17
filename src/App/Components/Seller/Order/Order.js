import React from "react";

const Order = () => {
  return (
    <div className="customer">
      <div className="customer__info">
        <div className="avatar">
          <img src="../Asserts/Images/Admin/user.png" alt="user" />
        </div>
        <div className="info">
          <h4>Lewis S. Cunningham</h4>
          <small>CEO Excerpt</small>
        </div>
      </div>
      <div className="customer__contact">
        <i className="fas fa-user-circle" />
        <i className="fas fa-comment" />
        <i className="fas fa-phone" />
      </div>
    </div>
  );
};

export default Order;
