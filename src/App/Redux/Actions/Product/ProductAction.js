import * as Types from "../../Types/ActionType";
import { CreateAction, CreateActionParams } from "../CreateAction";
import * as Services from "../../../Services";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

const notify = (notify) => {
  switch (notify) {
    case "ADD_PRODUCT": {
      return toast.success("Sản phẩm được thêm thành công!", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2200,
        pauseOnHover: false,
      });
    }
    case "EDIT_PRODUCT": {
      return toast.info("Sản phẩm đã được sửa thành công!", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2200,
        pauseOnHover: false,
      });
    }
    case "DELETE_PRODUCT": {
      return toast.success("Sản phẩm đã được xóa thành công!", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2200,
        pauseOnHover: false,
      });
    }
    case "ADD_PRODUCT_TO_CART": {
      return toast.success("Đã thêm sản phẩm vào giỏ hàng!", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2200,
        pauseOnHover: false,
      });
    }
    case "REMOVE_PRODUCT_FROM_CART": {
      return toast.success("Đã xóa sản phẩm ra khỏi giỏ hàng!", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2200,
        pauseOnHover: false,
      });
    }
    default:
      return notify;
  }
};

const resetForm = () => {
  document.getElementById("btn-reset").click();
};
const closeForm = () => {
  document.getElementById("btn-close").click();
};

export const actionFetchProductsRequest = () => {
  return (dispatch) => {
    return Services.fetchProducts()
      .then((result) => {
        dispatch(CreateAction(Types.FETCH_PRODUCTS, result.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const actionFetchProductDetailByIdRequest = (value) => {
  return (dispatch) => {
    return Services.fetchProductDetailById(value)
      .then((result) => {
        dispatch(CreateAction(Types.FETCH_PRODUCT_DETAIL, result.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const actionFetchProductDetailByCodeRequest = (value) => {
  return (dispatch) => {
    return Services.fetchProductDetailByCode(value)
      .then((result) => {
        dispatch(CreateAction(Types.FETCH_PRODUCT_DETAIL, result.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

// Cart

// export const actionAddProductToCartRequest = (product, quantity) => {
//   return (dispatch) => {
//     return dispatch(
//       CreateActionParams(Types.ADD_PRODUCT_TO_CART, product, quantity),
//       notify("ADD_PRODUCT_TO_CART")
//     );
//   };
// };

// export const actionDeleteProductInCartRequest = (product) => {
//   return (dispatch) => {
//     return dispatch(
//       CreateAction(Types.DELETE_PRODUCT_IN_CART, product),
//       notify("DELETE_PRODUCT_FROM_CART")
//     );
//   };
// };

// export const actionUpdateProductInCartRequest = (product, quantity) => {
//   return (dispatch) => {
//     return dispatch(
//       CreateActionParams(Types.UPDATE_PRODUCT_IN_CART, product, quantity)
//     );
//   };
// };

// Manage

export const actionFetchAllProductRequest = () => {
  return (dispatch) => {
    return Services.fetchAllProduct()
      .then((result) => {
        dispatch(CreateAction(Types.FETCH_PRODUCTS, result.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const actionCreateProductRequest = (values) => {
  console.log(values);
  return (dispatch) => {
    return Services.createProduct(values)
      .then((result) => {
        dispatch(CreateAction(Types.CREATE_PRODUCT, result.data));
        notify("ADD_PRODUCT");
        setTimeout(() => {
          resetForm();
          closeForm();
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const actionDeleteProductRequest = (id) => {
  return (dispatch) => {
    return Services.deleteProduct(id)
      .then((result) => {
        console.log(result.data);
        dispatch(CreateAction(Types.DELETE_PRODUCT, result.data));
        notify("DELETE_PRODUCT");
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
