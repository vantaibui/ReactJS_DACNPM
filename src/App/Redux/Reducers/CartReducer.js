import * as Types from "../Types/ActionType";

let initialState = [];

let findProductInCart = (product, cart) => {
  let result = -1;
  if (cart.length > 0) {
    for (const i in cart) {
      if (cart[i].product.id === product.id) {
        result = i;
      }
    }
  }
  return result;
};

const CartReducer = (state = initialState, action) => {
  let index = -1;
  switch (action.type) {
    case Types.FETCH_PRODUCT_IN_CART: {
      state = action.payload;
      return [...state];
    }
    case Types.ADD_PRODUCT_TO_CART: {
      console.log(action);
      return [...state];
    }
    case Types.DELETE_PRODUCT_IN_CART: {
      let { payload } = action;
      console.log(payload);
      return [...state];
    }
    case Types.UPDATE_PRODUCT_IN_CART: {
      console.log(action.payload);
      return [...state];
    }

    default:
      return [...state];
  }
};

export default CartReducer;
