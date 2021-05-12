import * as Types from "../Types/ActionType";

let initialState = {
  credentials: null,
  orders: [],
  accessToken: null,
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.LOGIN: {
      state.credentials = action.payload;
      return { ...state };
    }
    case Types.REGISTER: {
      return { ...state };
    }
    case Types.FORGOT_PASSWORD: {
      state.accessToken = action.payload;
      return { ...state };
    }

    default:
      return state;
  }
};

export default UserReducer;
