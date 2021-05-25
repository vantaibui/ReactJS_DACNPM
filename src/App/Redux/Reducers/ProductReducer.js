import * as Types from "../Types/ActionType";

let initialState = {
  products: [],
  productDetail: null,
};

let findIndex = (id, list) => {
  let result = -1;
  for (let index in list) {
    if (list[index].id === id) {
      result = index;
    }
  }
  return result;
};

const ProductReducer = (state = initialState, action) => {
  let index = -1;

  switch (action.type) {
    case Types.FETCH_PRODUCTS: {
      state.products = action.payload;
      return { ...state };
    }
    case Types.FETCH_PRODUCT_DETAIL: {
      state.productDetail = action.payload;
      return { ...state };
    }
    case Types.CREATE_PRODUCT: {
      console.log(action.payload);
      state.products.push(action.payload);
      return { ...state };
    }
    case Types.DELETE_PRODUCT: {
      let { product } = action.payload;
      console.log(action.payload);
      index = findIndex(product.id, state.products);
      if (index !== -1) {
        state.products.splice(index, 1);
      }
      return { ...state };
    }
    default:
      return state;
  }
};

export default ProductReducer;
