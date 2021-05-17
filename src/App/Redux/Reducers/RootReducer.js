import { combineReducers } from "redux";
import CartReducer from "./CartReducer";
import CategoryReducer from "./CategoryReducer";
import ProductReducer from "./ProductReducer";
import UserReducer from "./UserReducer";
import DisplayForm from "./DisplayForm";

const RootReducer = combineReducers({
  CategoryReducer: CategoryReducer,
  ProductReducer: ProductReducer,
  CartReducer: CartReducer,
  UserReducer: UserReducer,
  DisplayForm: DisplayForm,
});
export default RootReducer;
