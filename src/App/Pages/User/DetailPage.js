import React, { useEffect } from "react";
import { connect } from "react-redux";

// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import * as Actions from "../../Redux/Actions";
import * as Types from "../../Redux/Types/ActionType";

const Detail = (props) => {
  let { productDetail } = props;

  useEffect(() => {
    let value = props.match.params.id;
    props.onProductDetail(value);
  }, []);

  let onAddProductToCart = (product) => {
    props.onAddProductToCart(product);
    console.log(product);
  };

  return (
    <div style={{ marginTop: "140px" }}>
      <button
        onClick={() => {
          onAddProductToCart(productDetail);
        }}
      >
        Add product
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    productDetail: state.ProductReducer.productDetail || {
      name: "",
      price: 0,
      description: "",
    },
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onProductDetail: (value) => {
      return dispatch(Actions.actionFetchProductDetailRequest(value));
    },
    onAddProductToCart: (product) => {
      return dispatch(Actions.actionAddProductToCartRequest(product, 1));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
