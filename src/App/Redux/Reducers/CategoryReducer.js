import * as Types from "../Types/ActionType";

let initialState = [];

const CategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.FETCH_CATEGORIES:

    default:
      return [...state];
  }
};

export default CategoryReducer;
