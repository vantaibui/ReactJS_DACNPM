import React from "react";

const ProductItem = (props) => {
  let { index, product } = props;

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
          readOnly
        />
      </td>
    </tr>
  );
};

export default ProductItem;
