import { CreateAction } from "../CreateAction";
import * as Types from "../../Types/ActionType";

export const actionFetchCategoriesRequest = () => {
  return CreateAction(Types.FETCH_CATEGORIES, "result");
};
