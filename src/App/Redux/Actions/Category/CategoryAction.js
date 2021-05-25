import { CreateAction } from "../CreateAction";
import * as Types from "../../Types/ActionType";
import * as Services from "../../../Services";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

const notify = (notify) => {
  switch (notify) {
    case "ADD_CATEGORY": {
      return toast.success("Danh mục được thêm thành công!", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2200,
        pauseOnHover: false,
      });
    }
    case "EDIT_CATEGORY": {
      return toast.info("Danh mục đã được sửa thành công!", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2200,
        pauseOnHover: false,
      });
    }
    case "DELETE_CATEGORY": {
      return toast.success("Danh mục đã được xóa thành công!", {
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

export const actionFetchCategoriesRequest = () => {
  return (dispatch) => {
    return Services.fetchCategories()
      .then((result) => {
        dispatch(CreateAction(Types.FETCH_CATEGORIES, result.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const actionFetchCategoryDetailByIdRequest = (id) => {
  return (dispatch) => {
    return Services.fetchCategoryDetailById(id)
      .then((result) => {
        dispatch(CreateAction(Types.FETCH_CATEGORY_DETAIL, result.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const actionCreateCategoryRequest = (values) => {
  return (dispatch) => {
    return Services.createCategory(values)
      .then((result) => {
        dispatch(CreateAction(Types.CREATE_CATEGORY, result.data));
        notify("ADD_CATEGORY");
        setTimeout(() => {
          resetForm();
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const actionDeleteCategoryRequest = (id) => {
  return (dispatch) => {
    return Services.deleteCategory(id)
      .then((result) => {
        dispatch(CreateAction(Types.DELETE_CATEGORY, result.data));
        notify("DELETE_CATEGORY");
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
