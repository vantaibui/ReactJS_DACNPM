import React from "react";
import { NavLink } from "react-router-dom";
import ProductItem from "./ProductItem";

const ProductList = (props) => {
  let { products } = props;

  let renderProduct = (products) => {
    let result;
    result = products.map((product, index) => {
      return <ProductItem key={index} index={index} product={product} />;
    });
    return result;
  };

  return (
    <div className="projects">
      <div className="card">
        <div className="card-header">
          <h3>Sản phẩm</h3>
          <NavLink exact to="/seller/products" className="btn-link">
            Xem thêm <i className="fa fa-arrow-right" />
          </NavLink>
        </div>
        <div className="card-body">
          <table>
            <thead>
              <tr>
                <th>Stt</th>
                <th>Tên</th>
                <th>Giá</th>
                <th>Số lượng còn lại</th>
                <th>Đánh giá</th>
                <th>Kích hoạt</th>
              </tr>
            </thead>
            <tbody>{renderProduct(products)}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
