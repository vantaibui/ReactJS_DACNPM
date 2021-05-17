import React from "react";

const Sidebar = (props) => {
  return (
    <>
      <input type="checkbox" id="sidebar-toggle" />
      <div className="sidebar">
        <div className="sidebar-brand">
          <div className="brand-flex">
            <img
              width="40px"
              src="../Asserts/Images/Admin/admin.jpg"
              alt="admin"
            />
            <div className="brand-ions">
              <span className="fa fa-bell"> </span>
              <span className="fa fa-user-circle" />
            </div>
          </div>
        </div>
        <div className="sidebar-main">
          <div className="sidebar-user">
            <img src="../Asserts/Images/Admin/user.png" alt="user" />
            <div className="info">
              <h3>Adam Johnson</h3>
              <span>vantaibui92@gmail.com</span>
            </div>
          </div>
          <div className="sidebar-menu">
            {/* Dashboard */}
            <div className="menu-head">
              <span className="heading">Dashboard</span>
            </div>
            <ul>
              <li>
                <a href>
                  {" "}
                  <span className="fa fa-balance-scale" />
                  Finance{" "}
                </a>
              </li>
              <li>
                <a href>
                  {" "}
                  <span className="fa fa-chart-pie" />
                  Analytics{" "}
                </a>
              </li>
            </ul>
            {/* Application */}
            <div className="menu-head">
              <span className="heading">Application</span>
            </div>
            <ul>
              <li>
                <a href>
                  {" "}
                  <span className="fa fa-user-clock" />
                  Manage user{" "}
                </a>
              </li>
              <li>
                <a href>
                  {" "}
                  <span className="fa fa-list" />
                  Manage category{" "}
                </a>
              </li>
              <li>
                <a href>
                  {" "}
                  <span className="fa fa-gift" />
                  Manage product{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
