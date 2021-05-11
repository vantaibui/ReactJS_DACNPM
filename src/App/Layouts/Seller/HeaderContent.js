import React from "react";

const HeaderContent = () => {
  return (
    <header>
      <h2>
        <label className="label" htmlFor="sidebar-toggle">
          <span className="fa fa-bars" />
        </label>
        Dashboard
      </h2>
      <div className="search-wrapper">
        <i className="fa fa-search" />
        <input type="search" placeholder="Search here" />
      </div>
      <div className="user-wrapper">
        <img src="../Asserts/Images/Admin/admin.jpg" alt="img" />
        <div className="info">
          <h4>John Doe</h4>
          <small>Super admin</small>
        </div>
      </div>
    </header>
  );
};

export default HeaderContent;
