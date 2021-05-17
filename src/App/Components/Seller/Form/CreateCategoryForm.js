import React from "react";
import { useFormik } from "formik";

const CreateCategoryForm = (props) => {
  let renderForm = () => {
    return (
      <>
        <div className="form-manage">
          <div className="form-manage__content">
            <div className="form-manage__wrapper">
              <div className="form-manage__inner">
                <form>
                  <div className="manage-form signUp">
                    <div className="manage-form__header">
                      <h3 className="manage-form__heading">
                        Thêm danh mục mới
                      </h3>
                    </div>
                    <div className="manage-form__form">
                      <div className="manage-form__group">
                        <input
                          type="text"
                          className="manage-form__input"
                          placeholder="Tên danh mục"
                        />
                        <div className="manage-form__check">
                          <i className="far fa-check-circle manage-form__check-icon" />
                        </div>
                      </div>
                      <div className="manage-form__group">
                        <input
                          type="password"
                          className="manage-form__input"
                          placeholder="Mô tả danh mục"
                        />
                      </div>
                      <button className="btn manage-form__btn">Thêm</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return renderForm();
};

export default CreateCategoryForm;
