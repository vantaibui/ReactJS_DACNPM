import React from "react";
import Card from "../../Components/Admin/Card/Card";
import CustomerList from "../../Components/Admin/Customer/CustomerList";
import Sidebar from "../../Layouts/Admin/Sidebar";

const AdminPage = () => {
  return (
    <>
      <Sidebar />
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
            {/* <div className="card-chart danger">
              <span className="fa fa-chart-line" />
            </div>
            <div className="card-chart yellow">
              <span className="fa fa-chart-line" />
            </div> */}
            <Card />
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
