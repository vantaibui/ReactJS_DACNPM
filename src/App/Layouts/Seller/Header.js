import React from "react";

const Header = () => {
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
              <a className="active" href>
                <i className="fa fa-igloo" />
                <span>Dashboard</span>
              </a>
            </li>
            <li>
              <a href>
                <i className="fa fa-users" />
                <span>Customer</span>
              </a>
            </li>
            <li>
              <a href>
                <i className="fa fa-clipboard-list" />
                <span>Projects</span>
              </a>
            </li>
            <li>
              <a className="active" href>
                <i className="fa fa-shopping-bag" />
                <span>Orders</span>
              </a>
            </li>
            <li>
              <a href>
                <i className="fa fa-receipt" />
                <span>Inventory</span>
              </a>
            </li>
            <li>
              <a href>
                <i className="fa fa-user-circle" />
                <span>Accounts</span>
              </a>
            </li>
            <li>
              <a href>
                <i className="fa fa-clipboard-list" />
                <span>Tasks</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
