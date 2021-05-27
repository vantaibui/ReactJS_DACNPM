import { combineReducers } from "redux";
import CategoryReducer from "./CategoryReducer";
import ProductReducer from "./ProductReducer";
import CartReducer from "./CartReducer";
import RevenueStatisticsReducer from "./RevenueStatisticsReducer";
import UserReducer from "./UserReducer";
import DisplayForm from "./DisplayForm";

const RootReducer = combineReducers({
  CategoryReducer: CategoryReducer,
  ProductReducer: ProductReducer,
  CartReducer: CartReducer,
  RevenueStatisticsReducer: RevenueStatisticsReducer,
  UserReducer: UserReducer,
  DisplayForm: DisplayForm,
});
export default RootReducer;
