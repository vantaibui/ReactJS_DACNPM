import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useFormik } from "formik";

import * as Actions from "../../../Redux/Actions";

import Product from "./Product";

const ProductManagePage = (props) => {
  let { products, isDisplayForm } = props;

  useEffect(() => {
    props.fetchProducts();
  }, []);

  const formik = useFormik({
    initialValues: {
      file: "",
      code: "",
      name: "",
      price: "",
      description: "",
      evaluate: "",
      exp: "",
      remain: "",
      category: "",
      active: 1,
    },
    onSubmit: (values) => {
      console.log(values);
      props.onCreateProduct(values);
    },
  });

  let renderProduct = (products) => {
    return products.map((product, index) => {
      return (
        <Product
          key={index}
          index={index}
          product={product}
          onDeleteProduct={onDeleteProduct}
        />
      );
    });
  };

  let renderForm = () => {
    return (
      <div className="form-manage form-product">
        <div className="form-manage__content">
          <div className="form-manage__wrapper">
            <div className="form-manage__inner">
              <form
                onSubmit={formik.handleSubmit}
                enctype="multipart/form-data"
              >
                <div className="manage-form">
                  <div className="manage-form__header">
                    <h3 className="manage-form__heading">Thêm danh mục mới</h3>
                  </div>
                  <div className="manage-form__form">
                    <div className="grid__row">
                      <div className="grid-column-6">
                        <div className="manage-form__group">
                          <input
                            type="text"
                            className="manage-form__input"
                            placeholder="Tên sản phẩm"
                            name="name"
                            onChange={formik.handleChange}
                            value={formik.values.name}
                          />
                        </div>
                      </div>
                      <div className="grid-column-6">
                        <div className="manage-form__group">
                          <input
                            type="text"
                            className="manage-form__input"
                            placeholder="Mã sản phẩm"
                            name="code"
                            onChange={formik.handleChange}
                            value={formik.values.code}
                          />
                          <div className="manage-form__check">
                            <i className="far fa-check-circle manage-form__check-icon" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid__row">
                      <div className="grid-column-6">
                        <div className="manage-form__group">
                          <input
                            type="text"
                            className="manage-form__input"
                            placeholder="Giá"
                            name="price"
                            onChange={formik.handleChange}
                            value={formik.values.price}
                          />
                          <div className="manage-form__check">
                            <i className="far fa-check-circle manage-form__check-icon" />
                          </div>
                        </div>
                      </div>
                      <div className="grid-column-6">
                        <div className="manage-form__group">
                          <input
                            type="text"
                            className="manage-form__input"
                            placeholder="Số lượng"
                            name="remain"
                            onChange={formik.handleChange}
                            value={formik.values.remain}
                          />
                          <div className="manage-form__check">
                            <i className="far fa-check-circle manage-form__check-icon" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="manage-form__group">
                      <input
                        type="date"
                        className="manage-form__input"
                        placeholder="Ngày sản xuất"
                        name="exp"
                        onChange={formik.handleChange}
                        value={formik.values.exp}
                      />
                      <div className="manage-form__check">
                        <i className="far fa-check-circle manage-form__check-icon" />
                      </div>
                    </div>
                    <div className="manage-form__group">
                      <input
                        type="text"
                        className="manage-form__input"
                        placeholder="Danh mục sản phẩm"
                        name="category"
                        onChange={formik.handleChange}
                        value={formik.values.category}
                      />
                      <div className="manage-form__check">
                        <i className="far fa-check-circle manage-form__check-icon" />
                      </div>
                    </div>
                    <div className="manage-form__group">
                      <input
                        type="file"
                        className="manage-form__input"
                        placeholder="Chọn ảnh cho sản phẩm"
                        name="file"
                        onChange={(event) => {
                          formik.setFieldValue("file", event.target.files[0]);
                        }}
                        value={formik.values.file}
                      />
                      <div className="manage-form__check">
                        <i className="far fa-check-circle manage-form__check-icon" />
                      </div>
                    </div>
                    <div className="manage-form__group">
                      <textarea
                        rows="10"
                        className="manage-form__input"
                        placeholder="Mô tả sản phẩm"
                        name="description"
                        onChange={formik.handleChange}
                        value={formik.values.description}
                      />
                      <div className="manage-form__check">
                        <i className="far fa-check-circle manage-form__check-icon" />
                      </div>
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

  let onDeleteProduct = (id) => {
    props.onDeleteProduct(id);
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
            <i className="fa fa-plus"></i>Thêm sản phẩm
          </button>

          <div className="grid__row">
            <div className="grid__full-width">
              {!isDisplayForm ? "" : renderForm()}
            </div>
            <div className="grid__full-width">
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
                            <th>Tên</th>
                            <th>Giá</th>
                            <th>Số lượng còn lại</th>
                            <th>Đánh giá</th>
                            <th>Kích hoạt</th>
                            <th>Thao tác</th>
                          </tr>
                        </thead>
                        <tbody>{renderProduct(products)}</tbody>
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
    products: state.ProductReducer.products,
    isDisplayForm: state.DisplayForm,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: () => {
      return dispatch(Actions.actionFetchProductsRequest());
    },
    onCreateProduct: (values) => {
      return dispatch(Actions.actionCreateProductRequest(values));
    },
    onDeleteProduct: (id) => {
      return dispatch(Actions.actionDeleteProductRequest(id));
    },
    onToggleForm: () => {
      return dispatch(Actions.actionToggleFormRequest());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductManagePage);
