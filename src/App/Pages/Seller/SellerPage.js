import React, { useEffect } from "react";
import { connect } from "react-redux";

import * as Actions from "../../Redux/Actions";

import Header from "../../Layouts/Seller/Header";
import RevenueStatistics from "../../Components/Seller/RevenueStatistics";
import Categories from "../../Components/Seller/Category/Categories";
import Orders from "../../Components/Seller/Order/Orders";
import ProductList from "../../Components/Seller/Product/ProductList";
import CustomerList from "../../Components/Seller/Customer/CustomerList";

const SellerPage = (props) => {
  let { categories, products } = props;

  useEffect(() => {
    props.fetchCategories();
    props.fetchProducts();
  }, []);
  return (
    <>
      <main>
        <RevenueStatistics />
        <div className="recent-flex">
          <Categories categories={categories} />
          <CustomerList />
        </div>
        <div className="recent-flex">
          <ProductList products={products} />
          <Orders />
        </div>
      </main>
    </>
  );
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
    // fetchProducts: () => {
    //   return dispatch(Actions.actionFetchAllProductRequest());
    // },
    fetchProducts: () => {
      return dispatch(Actions.actionFetchProductsRequest());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SellerPage);
