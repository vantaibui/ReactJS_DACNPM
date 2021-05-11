import React from "react";
import "./Css/style.css";
import { connect } from "react-redux";

import ProductList from "../../Components/User/Product/Product/ProductList";
import PaginationList from "../../Components/User/Pagination/PaginationList";
import Header from "../../Layouts/User/Header/Header";
import Footer from "../../Layouts/User/Footer/Footer";
import NavbarList from "../../Components/User/Navbar/NavbarList";
import HomeFilter from "../../Components/User/Filter/HomeFilter";
import SliderNotification from "../../Components/User/Slider/SliderNotification";

const HomePage = (props) => {
  let { products } = props;
  console.log(products);
  return (
    <>
      {/* <Header /> */}

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
              <ProductList />
              {/* Pagination */}
              <PaginationList />
            </div>
          </div>
        </div>
      </div>

      {/* <Footer /> */}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.ProductReducer,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
