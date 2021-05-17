import * as Types from "../Types/ActionType";

let initialState = false;

const DisplayForm = (state = initialState, action) => {
  switch (action.type) {
    case Types.TOGGLE_FORM: {
      return !state;
    }
    case Types.CLOSE_FORM: {
      state = false;
      return state;
    }
    case Types.OPEN_FORM: {
      state = true;
      return state;
    }
    default:
      return state;
  }
};

export default DisplayForm;
