import { CreateAction } from "../CreateAction";
import * as Types from "../../Types/ActionType";
import * as Services from "../../../Services";

const resetForm = () => {
  document.getElementById("btn-reset").click();
};

export const actionFetchCategoriesRequest = () => {
  // return CreateAction(Types.FETCH_CATEGORIES, "result");
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
        console.log(result.data);
        dispatch(CreateAction(Types.CREATE_CATEGORY, result.data));
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
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
