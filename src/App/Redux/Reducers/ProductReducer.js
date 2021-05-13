import * as Types from "../Types/ActionType";

let initialState = {
  products: [],
  productDetail: null,
};

const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.FETCH_PRODUCTS: {
      state.products = action.payload;
      return { ...state };
    }
    case Types.FETCH_PRODUCT_DETAIL: {
      state.productDetail = action.payload;
      return { ...state };
    }
    default:
      return state;
  }
};

export default ProductReducer;
