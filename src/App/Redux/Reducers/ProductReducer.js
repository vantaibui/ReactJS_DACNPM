// import * as Types from "../Types/ActionType";

import { FETCH_PRODUCTS } from "../Types/ActionType";

let initialState = [];

const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS: {
      state = action.payload;
      return [...state];
    }
    default:
      return [...state];
  }
};

export default ProductReducer;
