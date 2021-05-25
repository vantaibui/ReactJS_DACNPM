import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useFormik } from "formik";

import * as Actions from "../../../Redux/Actions";

import Category from "./Category";

const CategoryManagePage = (props) => {
  let { categories, isDisplayForm } = props;

  useEffect(() => {
    props.fetchCategories();
  }, []);

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
    },
    onSubmit: (values) => {
      props.onCreateCategory(values);
    },
  });

  let renderCategory = (categories) => {
    return categories.map((category, index) => {
      return (
        <Category
          key={index}
          index={index}
          category={category}
          onDeleteCategory={onDeleteCategory}
        />
      );
    });
  };

  let renderForm = () => {
    return (
      <div className="form-manage">
        <div className="form-manage__content">
          <div className="form-manage__wrapper">
            <div className="form-manage__inner">
              <form onSubmit={formik.handleSubmit}>
                <div className="manage-form">
                  <div className="manage-form__header">
                    <h3 className="manage-form__heading">Thêm danh mục mới</h3>
                  </div>
                  <div className="manage-form__form">
                    <div className="manage-form__group">
                      <input
                        type="text"
                        className="manage-form__input"
                        placeholder="Tên danh mục"
                        name="name"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                      />
                      <div className="manage-form__check">
                        <i className="far fa-check-circle manage-form__check-icon" />
                      </div>
                    </div>
                    <div className="manage-form__group">
                      <input
                        type="text"
                        className="manage-form__input"
                        placeholder="Mô tả danh mục"
                        name="description"
                        onChange={formik.handleChange}
                        value={formik.values.description}
                      />
                    </div>
                    <button type="submit" className="btn manage-form__btn">
                      Thêm
                    </button>
                    <button
                      onClick={formik.handleReset}
                      type="reset"
                      id="btn-reset"
                      className="btn btn-reset"
                    >
                      Reset
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  };

  let onDeleteCategory = (id) => {
    props.onDeleteCategory(id);
  };

  let onToggleForm = () => {
    props.onToggleForm();
  };

  return (
    <>
      <main>
        <div className="seller-management">
          <button
            className="btn-create"
            onClick={() => {
              onToggleForm();
            }}
          >
            <i className="fa fa-plus"></i>Thêm danh mục
          </button>
          <div className="grid__row">
            <div
              className={isDisplayForm === false ? "" : "grid-column-4-real"}
            >
              {isDisplayForm === false ? "" : renderForm()}
            </div>
            <div
              className={
                isDisplayForm === false
                  ? "grid__full-width"
                  : "grid-column-8-real"
              }
            >
              <div className="seller-content">
                <div className="projects">
                  <div className="card">
                    <div className="card-header">
                      <h3>Sản phẩm</h3>
                    </div>
                    <div className="card-body">
                      <table>
                        <thead>
                          <tr>
                            <th>Stt</th>
                            <th>Tên danh mục</th>
                            <th>Mô tả</th>
                            <th>Thao tác</th>
                          </tr>
                        </thead>
                        <tbody>{renderCategory(categories)}</tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    categories: state.CategoryReducer.categories,
    isDisplayForm: state.DisplayForm,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCategories: () => {
      return dispatch(Actions.actionFetchCategoriesRequest());
    },
    onCreateCategory: (values) => {
      return dispatch(Actions.actionCreateCategoryRequest(values));
    },
    onDeleteCategory: (id) => {
      return dispatch(Actions.actionDeleteCategoryRequest(id));
    },
    onToggleForm: () => {
      return dispatch(Actions.actionToggleFormRequest());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryManagePage);
