import React, { useEffect } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import * as Actions from "../../../Redux/Actions";

import RevenueStatistics from "../../../Components/Seller/RevenueStatistics";
import { accessToken } from "../../../Configuration";
import Product from "./Product";

const ProductManagePage = (props) => {
  let { products } = props;
  console.log(products);

  useEffect(() => {
    props.fetchProducts();
  }, []);

  let renderProduct = (products) => {
    return products.map((product, index) => {
      return (
        <Product
          key={index}
          index={index}
          product={product}
          onDeleteProduct={onDeleteProduct}
        />
      );
    });
  };

  let onDeleteProduct = (id) => {
    props.onDeleteProduct(id);
  };

  return (
    <>
      <main>
        <RevenueStatistics />
        <div className="seller-content">
          <div className="projects">
            <div className="card">
              <div className="card-header">
                <h3>Sản phẩm</h3>
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
                      <th>Thao tác</th>
                    </tr>
                  </thead>
                  <tbody>{renderProduct(products)}</tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.ProductReducer.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: () => {
      return dispatch(Actions.actionFetchProductsRequest());
    },
    onDeleteProduct: (id) => {
      return dispatch(Actions.actionDeleteProductRequest(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductManagePage);
