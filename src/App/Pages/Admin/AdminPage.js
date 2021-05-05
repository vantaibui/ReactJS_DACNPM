import React from "react";
import CustomerList from "../../Components/Admin/Customer/CustomerList";

const AdminPage = () => {
  return (
    <>
      <input type="checkbox" id="sidebar-toggle" />
      {/* Sidebar */}
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
      {/* content */}
      <div className="main-content">
        <header>
          <div className="menu-toggle">
            <label htmlFor="sidebar-toggle">
              <span id="search" className="fa fa-bars" />
            </label>
          </div>
          <div className="header-icons">
            <span className="fa fa-search" />
            <span className="fa fa-bookmark" />
            <span className="fa fa-sms" />
          </div>
        </header>
        <main>
          <div className="page-header">
            <div className="heading">
              <h1>Analytics Dashboard</h1>
              <small>
                Monitor key metrics. Check reporting and review insights
              </small>
            </div>
            <div className="header-actions">
              <button>
                <span className="fa fa-file-export">Export</span>
              </button>
              <button>
                <span className="fa fa-tools">Setting</span>
              </button>
            </div>
          </div>
          {/* Cards */}
          <div className="cards">
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
            <div className="card-single">
              <div className="card-flex">
                <div className="card-info">
                  <div className="card-head">
                    <span>Unique visitors</span>
                    <small>Number of visitors</small>
                  </div>
                  <h2>17.663</h2>
                  <small>2% less visitor</small>
                </div>
                <div className="card-chart danger">
                  <span className="fa fa-chart-line" />
                </div>
              </div>
            </div>
            <div className="card-single">
              <div className="card-flex">
                <div className="card-info">
                  <div className="card-head">
                    <span>Refunds</span>
                    <small>Value of refund orders</small>
                  </div>
                  <h2>$4, 523.11</h2>
                  <small>2% less refund</small>
                </div>
                <div className="card-chart yellow">
                  <span className="fa fa-chart-line" />
                </div>
              </div>
            </div>
          </div>
          {/* product-grid */}
          <div className="product-grid">
            <div className="analytics-card">
              <div className="analytics-head">
                <h2>Actions needed</h2>
                <span className="fa fa-ellipsis-h" />
              </div>
              <div className="analytics-chart">
                <div className="chart-circle">
                  <h1>74%</h1>
                </div>
                <div className="analytics-note">
                  <small>
                    Note: Current sprint requires stakeholders meeting to reach
                    conclusion
                  </small>
                </div>
                <div className="analytics-btn">
                  <button>Generate report</button>
                </div>
              </div>
            </div>
            <CustomerList />
          </div>
        </main>
      </div>
    </>
  );
};

export default AdminPage;
