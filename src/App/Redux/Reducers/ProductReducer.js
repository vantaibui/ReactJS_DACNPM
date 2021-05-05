// import * as Types from "../Types/ActionType";

import { FETCH_PRODUCTS } from "../Types/ActionType";

let initialState = [
  { id: 1, name: "abc", price: 2000 },
  { id: 2, name: "abc", price: 2000 },
];

const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS: {
      return [...state];
    }
    default:
      return [...state];
  }
};

export default ProductReducer;
