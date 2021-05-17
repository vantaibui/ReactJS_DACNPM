import React, { useEffect } from "react";
import { connect } from "react-redux";

import * as Actions from "../../Redux/Actions";

import HomeFilter from "../../Components/User/Filter/HomeFilter";
import NavbarList from "../../Components/User/Navbar/NavbarList";
import SliderCategory from "../../Components/User/Slider/SliderCategory";
import ProductList from "../../Components/User/Product/Product/ProductList";
import PaginationList from "../../Components/User/Pagination/PaginationList";

const CategoryPage = (props) => {
  let { categories, products } = props;

  useEffect(() => {
    let id = props.match.params.id;
    props.fetchProductInCategory(id);
  }, []);

  return (
    <>
      <section className="section-category">
        <div className="grid">
          <div className="grid__row app-content">
            <div className="grid__full-width">
              <SliderCategory />
              <HomeFilter />
              <div className="grid__row">
                <div className="grid-column-2">
                  <NavbarList categories={categories} />
                </div>
                <div className="grid-column-8" style={{ flex: 1 }}>
                  {/* List product */}
                  <ProductList products={products} />
                </div>
              </div>
              {/* Pagination */}
              <PaginationList />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    categories: state.CategoryReducer.categories,
    products: state.CategoryReducer.products || [
      { name: "", description: "", price: "" },
    ],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCategories: () => {
      return dispatch(Actions.actionFetchCategoriesRequest());
    },
    fetchProductInCategory: (id) => {
      return dispatch(Actions.actionFetchCategoryDetailByIdRequest(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);
