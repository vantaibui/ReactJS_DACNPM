import React from "react";

const Product = (props) => {
  let { index, product } = props;

  let onDeleteProduct = (id) => {
    props.onDeleteProduct(id);
  };

  return (
    <tr>
      <td>{index + 1}</td>
      <td>{product?.name}</td>
      <td>{product?.price} ₫</td>
      <td style={{ paddingLeft: "60px" }}>{product?.remain}</td>
      <td style={{ paddingLeft: "30px" }}>
        <span className="status">{product?.evaluate}</span>
        <i className="fas fa-star" style={{ color: "#ffce3e" }}></i>
      </td>
      <td style={{ paddingLeft: "40px" }}>
        <input
          type="checkbox"
          checked={product?.active ? "checked" : ""}
          checked
          readOnly
        />
      </td>
      <td>
        <button className="btn-action">
          <i className="fas fa-edit"></i>
          Sửa
        </button>
        <button
          onClick={() => {
            onDeleteProduct(product?.id);
          }}
          className="btn-action delete"
        >
          <i className="fas fa-trash-alt"></i>
          Xóa
        </button>
      </td>
    </tr>
  );
};

export default Product;
