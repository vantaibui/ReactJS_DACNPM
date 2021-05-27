import * as Types from "../Types/ActionType";

let initialState = [];

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.FETCH_PRODUCT_IN_CART: {
      state = action.payload;
      return [...state];
    }
    case Types.ADD_PRODUCT_TO_CART: {
      return [...state];
    }
    case Types.DELETE_PRODUCT_IN_CART: {
      return [...state];
    }
    case Types.UPDATE_PRODUCT_IN_CART: {
      return [...state];
    }

    default:
      return [...state];
  }
};

export default CartReducer;
