import * as Types from "../../Types/ActionType";
import { CreateAction, CreateActionParams } from "../CreateAction";
import * as Services from "../../../Services";

export const actionFetchProductsRequest = () => {
  return (dispatch) => {
    // return axios({
    //   url: `${domain}/products`,
    //   method: "GET",
    // })
    //   .then((result) => {
    //     console.log(result.data);
    //     dispatch(CreateAction(Types.FETCH_PRODUCTS, result.data));
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });]

    // return productService
    //   .fetchProducts()
    //   .then((result) => {
    //     dispatch(CreateAction(Types.FETCH_PRODUCTS, result.data));
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    return Services.fetchProducts()
      .then((result) => {
        console.log(result.data);
        dispatch(CreateAction(Types.FETCH_PRODUCTS, result.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const actionFetchProductDetailRequest = (value) => {
  return (dispatch) => {
    return Services.fetchProductDetail(value)
      .then((result) => {
        dispatch(CreateAction(Types.FETCH_PRODUCT_DETAIL, result.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const actionFetchProductDetailByCodeRequest = (value) => {
  return (dispatch) => {
    return Services.fetchProductDetailByCode(value)
      .then((result) => {
        dispatch(CreateAction(Types.FETCH_PRODUCT_DETAIL, result.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

// Cart
export const actionAddProductToCartRequest = (product, quantity) => {
  return (dispatch) => {
    return dispatch(
      CreateActionParams(Types.ADD_PRODUCT_TO_CART, product, quantity)
    );
  };
};

export const actionDeleteProductInCartRequest = (product) => {
  return (dispatch) => {
    return dispatch(CreateAction(Types.DELETE_PRODUCT_IN_CART, product));
  };
};

export const actionUpdateProductInCartRequest = (product, quantity) => {
  return (dispatch) => {
    return dispatch(
      CreateActionParams(Types.UPDATE_PRODUCT_IN_CART, product, quantity)
    );
  };
};
