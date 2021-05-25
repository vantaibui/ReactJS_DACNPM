import React from "react";

const CartItem = (props) => {
  let { product } = props;

  let onUpdateProductInCart = (productID, action) => {
    props.onUpdateProductInCart(productID, action);
  };

  let onDeleteProductInCart = (productID) => {
    props.onDeleteProductInCart(productID);
  };

  return (
    <tr className="cart-table__body-row">
      <td className="cart-table__body-item">
        <img src={product?.productImage} alt="img" className="item__img" />
        <h5 className="item__name">{product?.productName}</h5>
      </td>
      <td className="cart-table__body-price">
        {product?.productPrice}
        <span className="cart-table__body-currency">₫</span>
      </td>
      <td className="cart-table__body-quantity">
        <div className="quantity">
          <div className="quantity__inner">
            <span
              onClick={() => {
                onUpdateProductInCart(product?.productID, "decrease");
              }}
              className="quantity__btn"
            >
              {" "}
              -{" "}
            </span>
            <span className="quantity__value"> {product?.quantity} </span>
            <span
              onClick={() => {
                onUpdateProductInCart(product?.productID, "increase");
              }}
              className="quantity__btn"
            >
              {" "}
              +{" "}
            </span>
          </div>
        </div>
      </td>
      <td className="cart-table__body-total">
        {product?.productPrice * product?.quantity}
        <span className="cart-table__body-currency">₫</span>
      </td>
      <td className="cart-table__body-delete">
        <i
          onClick={() => {
            onDeleteProductInCart(product?.productID);
          }}
          className="fa fa-times cart-table__body-icon"
        />
      </td>
    </tr>
  );
};

export default CartItem;
