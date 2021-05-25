import React from "react";
import { NavLink } from "react-router-dom";
import Category from "./Category";

const Categories = (props) => {
  let { categories } = props;

  let renderCategory = (categories) => {
    let result;
    result = categories.map((category, index) => {
      return <Category key={index} index={index} category={category} />;
    });
    return result;
  };

  return (
    <div className="projects">
      <div className="card">
        <div className="card-header">
          <h3>Danh mục sản phẩm</h3>
          <NavLink exact to="/seller/categories" className="btn-link">
            Xem thêm <i className="fa fa-arrow-right" />
          </NavLink>
        </div>
        <div className="card-body">
          <table>
            <thead>
              <tr>
                <th>Stt</th>
                <th>Tên danh mục</th>
                <th>Mô tả</th>
                <th>Tổng sản phẩm</th>
              </tr>
            </thead>
            <tbody>{renderCategory(categories)}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Categories;
