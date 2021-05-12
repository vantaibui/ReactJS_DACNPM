import React from "react";

const TableHead = (props) => {
  return (
    <thead className="cart-table__head">
      <tr className="cart-table__head-row">
        <th className="cart-table__head-item">sản phẩm</th>
        <th className="cart-table__head-price">giá</th>
        <th className="cart-table__head-quantity">số lượng</th>
        <th className="cart-table__head-total">tổng</th>
        <th className="cart-table__head-action" />
      </tr>
    </thead>
  );
};

export default TableHead;
