import React from "react";

const Category = (props) => {
  let { index, category } = props;
  let totalProduct = (products) => {
    let result = 0;
    for (const index in products) {
      result = parseInt(index) + 1;
    }
    return result;
  };
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{category?.name}</td>
      <td>{category?.description}</td>
      <td>
        <span className="status purple" />
        {totalProduct(category?.products)}{" "}
        <span className="unit">sản phẩm</span>
      </td>
    </tr>
  );
};

export default Category;
