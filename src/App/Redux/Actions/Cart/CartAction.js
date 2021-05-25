import * as Types from "../../Types/ActionType";
import * as Services from "../../../Services";
import { CreateAction } from "../CreateAction";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

const notify = (notify) => {
  switch (notify) {
    case "ADD_PRODUCT_TO_CART": {
      return toast.success("Đã thêm sản phẩm vào giỏ hàng!", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2200,
        pauseOnHover: false,
      });
    }
    case "PRODUCT_ALREADY_IN_CART": {
      return toast.info("Sản phẩm đã có trong giỏ hàng!", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1200,
        pauseOnHover: false,
      });
    }
    case "DELETE_PRODUCT_IN_CART": {
      return toast.success("Đã xóa sản phẩm ra khỏi giỏ hàng!", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2200,
        pauseOnHover: false,
      });
    }
    case "UPDATE_PRODUCT_IN_CART": {
      return toast.success("Giỏ hàng!", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2200,
        pauseOnHover: false,
      });
    }

    default:
      return notify;
  }
};

export const actionFetchProductInCartByUserID = (userID) => {
  return (dispatch) => {
    return Services.fetchProductInCartByUserId(userID)
      .then((result) => {
        dispatch(CreateAction(Types.FETCH_PRODUCT_IN_CART, result.data));
      })
      .catch((err) => {});
  };
};

export const actionAddProductToCartRequest = (userID, data) => {
  return (dispatch) => {
    return Services.addProductToCartByUserId(userID, data)
      .then((result) => {
        dispatch(CreateAction(Types.ADD_PRODUCT_TO_CART, result.data));
        notify("ADD_PRODUCT_TO_CART");
      })
      .catch((err) => {
        notify("PRODUCT_ALREADY_IN_CART");
      });
  };
};

export const actionUpdateProductInCartRequest = (values) => {
  return (dispatch) => {
    return Services.updateProductInCart(values)
      .then((result) => {
        console.log("Update: " + result);
        dispatch(CreateAction(Types.UPDATE_PRODUCT_IN_CART, result.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const actionDeleteProductInCartRequest = (values) => {
  return (dispatch) => {
    return Services.removeProductFromCart(values)
      .then((result) => {
        dispatch(CreateAction(Types.DELETE_PRODUCT_IN_CART, result.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
