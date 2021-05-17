import * as Types from "../Types/ActionType";

let initialState = {
  categories: [],
  products: [],
};

const CategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.FETCH_CATEGORIES: {
      state.categories = action.payload;
      return { ...state };
    }
    case Types.FETCH_CATEGORY_DETAIL: {
      console.log(action.payload);
      state.products = action.payload;
      return { ...state };
    }
    case Types.CREATE_CATEGORY: {
      console.log(action.payload);
      state.categories.push(action.payload);
      return { ...state };
    }

    default:
      return state;
  }
};

export default CategoryReducer;
