import * as Types from "../../Types/ActionType";
import * as Services from "../../../Services";
import { CreateAction } from "../CreateAction";

export const actionFetchRevenueStatisticsRequest = () => {
  return (dispatch) => {
    return Services.fetchRevenueStatistics()
      .then((result) => {
        dispatch(CreateAction(Types.FETCH_REVENUE_STATISTICS, result.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const actionAddRevenueStatisticsRequest = (date) => {
  console.log(date);
  return (dispatch) => {
    return Services.addRevenueStatistics(date)
      .then((result) => {
        console.log(result.data);
        dispatch(CreateAction(Types.ADD_REVENUE_STATISTICS, result.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
