import React from "react";
import { NavLink } from "react-router-dom";
import BarChart from "../../../Components/Seller/Chart/BarChart";
import PieChart from "../../../Components/Seller/Chart/PieChart";

const RevenueStatistics = (props) => {
  const moment = require("moment");

  return (
    <main>
      <div className="revenue-statistics">
        <div className="card-to-do">
          <div className="title">
            Danh sách cần làm
            <p>Những việc bạn sẽ phải làm</p>
          </div>
          <div className="data-wrapper">
            <div className="to-do-box">
              <NavLink
                exact
                to="/seller/revenue-statistics/item"
                className="to-do-box-item"
              >
                <p className="item-title">0</p>
                <p className="item-desc">Chờ Xác Nhận</p>
              </NavLink>
              <NavLink
                exact
                to="/seller/revenue-statistics/item"
                className="to-do-box-item"
              >
                <p className="item-title">0</p>
                <p className="item-desc">Chờ Lấy Hàng</p>
              </NavLink>
              <NavLink
                exact
                to="/seller/revenue-statistics/item"
                className="to-do-box-item"
              >
                <p className="item-title">0</p>
                <p className="item-desc">Đã Xử Lý</p>
              </NavLink>
              <NavLink
                exact
                to="/seller/revenue-statistics/item"
                className="to-do-box-item to-do-box-item--separate"
              >
                <p className="item-title">0</p>
                <p className="item-desc">Đơn Hủy</p>
              </NavLink>
              <NavLink
                exact
                to="/seller/revenue-statistics/item"
                className="to-do-box-item"
              >
                <p className="item-title">0</p>
                <p className="item-desc">Trả Hàng / Hoàn Tiền Chờ Xử Lý</p>
              </NavLink>
              <NavLink
                exact
                to="/seller/revenue-statistics/item"
                className="to-do-box-item"
              >
                <p className="item-title">0</p>
                <p className="item-desc">Sản Phẩm Bị Tạm Khóa</p>
              </NavLink>
              <NavLink
                exact
                to="/seller/revenue-statistics/item"
                className="to-do-box-item "
              >
                <p className="item-title">0</p>
                <p className="item-desc">Sản Phẩm Hết Hàng</p>
              </NavLink>
              <NavLink
                exact
                to="/seller/revenue-statistics/item"
                className="to-do-box-item to-do-box-item--separate"
              >
                <p className="item-title">0</p>
                <p className="item-desc">Chương Trình Khuyến Mãi Chờ Xử Lý</p>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="card-to-do">
          <div className="title">
            Phân Tích Bán Hàng{" "}
            <span className="times">{moment().format("LL")}</span>
            <p>Dữ liệu tổng quan về các đơn đã đặt</p>
          </div>
          <PieChart />
        </div>
        <div className="card-to-do">
          <div className="title">
            Phân Tích Bán Hàng{" "}
            <span className="times">{moment().format("LL")}</span>
            <p>Dữ liệu tổng quan về các đơn đã đặt</p>
          </div>
          <BarChart />
        </div>
      </div>
    </main>
  );
};

export default RevenueStatistics;
