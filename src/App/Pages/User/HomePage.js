import React, { useEffect } from "react";
import { connect } from "react-redux";

import "./Css/style.css";
import * as Actions from "../../Redux/Actions";

import ProductList from "../../Components/User/Product/Product/ProductList";
import PaginationList from "../../Components/User/Pagination/PaginationList";
import NavbarList from "../../Components/User/Navbar/NavbarList";
import HomeFilter from "../../Components/User/Filter/HomeFilter";
import SliderNotification from "../../Components/User/Slider/SliderNotification";

const HomePage = (props) => {
  let { products } = props;

  useEffect(() => {
    props.fetchProducts();
  }, []);

  return (
    <>
      <div className="app-container">
        <div className="grid">
          <div className="grid__row app-content">
            <div className="grid-column-2">
              <NavbarList />
            </div>
            <div className="grid-column-10">
              {/*Slick slider  */}
              <SliderNotification />
              {/* Home filter */}
              <HomeFilter />
              {/* List product */}
              <ProductList products={products} />
              {/* Pagination */}
              <PaginationList />
            </div>
          </div>
        </div>
      </div>
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
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
