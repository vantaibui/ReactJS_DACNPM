import * as Types from "../Types/ActionType";

let data = JSON.parse(localStorage.getItem("Cart"));

let initialState = data ? data : [];

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
    case Types.ADD_PRODUCT_TO_CART: {
      index = findProductInCart(action.param_1, state);
      if (index !== -1) {
        state[index].quantity += action.param_2;
      } else {
        state.push({
          product: action.param_1,
          quantity: action.param_2,
        });
      }
      localStorage.setItem("Cart", JSON.stringify(state));
      return [...state];
    }
    case Types.DELETE_PRODUCT_IN_CART: {
      index = findProductInCart(action.payload, state);
      if (index !== -1) {
        state.splice(index, 1);
      }
      localStorage.setItem("Cart", JSON.stringify(state));
      return [...state];
    }
    case Types.UPDATE_PRODUCT_IN_CART: {
      index = findProductInCart(action.param_1, state);
      if (index !== -1) {
        state[index].quantity = action.param_2;
      }
      localStorage.setItem("Cart", JSON.stringify(state));
      return [...state];
    }
    default:
      return [...state];
  }
};

export default CartReducer;
