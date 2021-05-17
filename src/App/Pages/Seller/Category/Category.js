import React from "react";

const Category = (props) => {
  let { index, category } = props;

  let onDeleteCategory = (id) => {
    props.onDeleteCategory(id);
  };

  return (
    <tr>
      <td>{index + 1}</td>
      <td>{category?.name}</td>
      <td>{category?.description}</td>
      <td>
        <button className="btn-action">
          <i className="fas fa-edit"></i>
          Sửa
        </button>
        <button
          onClick={() => {
            onDeleteCategory(category?.id);
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

export default Category;
