import React from "react";
import CartItem from "./CartItem";

const TableBody = (props) => {
  let { products, onDeleteProductInCart, onUpdateProductInCart } = props;

  let renderCartItem = (products) => {
    return products.map((product, index) => {
      return (
        <CartItem
          key={index}
          product={product}
          onDeleteProductInCart={onDeleteProductInCart}
          onUpdateProductInCart={onUpdateProductInCart}
        />
      );
    });
  };

  return <tbody className="cart-table__body">{renderCartItem(products)}</tbody>;
};

export default TableBody;
