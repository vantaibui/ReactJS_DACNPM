import { combineReducers } from "redux";
import CartReducer from "./CartReducer";
import CategoryReducer from "./CategoryReducer";
import ProductReducer from "./ProductReducer";
import UserReducer from "./UserReducer";

const RootReducer = combineReducers({
  CategoryReducer: CategoryReducer,
  ProductReducer: ProductReducer,
  CartReducer: CartReducer,
  UserReducer: UserReducer,
});
export default RootReducer;
