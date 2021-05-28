import React, { useEffect } from "react";
import { connect } from "react-redux";

import * as Actions from "../../Redux/Actions";

import RevenueStatistics from "../../Components/Seller/RevenueStatistics";
import Categories from "../../Components/Seller/Category/Categories";
import ProductList from "../../Components/Seller/Product/ProductList";
import CustomerList from "../../Components/Seller/Customer/CustomerList";
import { user_login } from "../../Configuration";
import { Redirect } from "react-router";

const SellerPage = (props) => {
  let { categories, products } = props;

  useEffect(() => {
    props.fetchCategories();
    props.fetchProducts();
  }, []);

  let renderUI = () => {
    return (
      <main>
        <RevenueStatistics />

        <div className="recent-flex">
          <Categories categories={categories} />
        </div>
        <div className="recent-flex">
          <ProductList products={products} />
        </div>
        <div className="recent-flex">
          <CustomerList />
        </div>
      </main>
    );
  };

  let role = JSON.parse(localStorage.getItem(user_login)).role;

  if (role !== "ROLE_SELLER") {
    return alert("Bạn không đủ quyền truy cập!"), (<Redirect to="/" />);
  }

  return renderUI();
};

const mapStateToProps = (state) => {
  return {
    categories: state.CategoryReducer.categories,
    products: state.ProductReducer.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCategories: () => {
      return dispatch(Actions.actionFetchCategoriesRequest());
    },
    fetchProducts: () => {
      return dispatch(Actions.actionFetchAllProductRequest());
    },
    // fetchProducts: () => {
    //   return dispatch(Actions.actionFetchProductsRequest());
    // },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SellerPage);
