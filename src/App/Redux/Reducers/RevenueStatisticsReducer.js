import * as Types from "../Types/ActionType";

let initialState = [];

let findIndex = (date, list) => {
  let result = -1;
  for (let index in list) {
    if (list[index].date === date) {
      result = index;
    }
  }
  return result;
};

const RevenueStatisticsReducer = (state = initialState, action) => {
  let index = -1;
  switch (action.type) {
    case Types.FETCH_REVENUE_STATISTICS: {
      state = action.payload;
      return [...state];
    }
    case Types.ADD_REVENUE_STATISTICS: {
      let { payload } = action;
      console.log(payload);
      index = findIndex(payload.date, state);
      if (index !== -1) {
        state.push(payload);
      }
      return [...state];
    }

    default:
      return [...state];
  }
};

export default RevenueStatisticsReducer;
