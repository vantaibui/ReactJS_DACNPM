import React from "react";

const CartItem = (props) => {
  let { product } = props;

  let onDeleteProductInCart = (product) => {
    props.onDeleteProductInCart(product);
  };

  let onUpdateProductInCart = (product, quantity) => {
    if (quantity > 0) {
      props.onUpdateProductInCart(product, quantity);
    }
  };

  return (
    <tr className="cart-table__body-row">
      <td className="cart-table__body-item">
        <img
          src="../Assets/Images/User/product-details-1.jpg"
          alt="img"
          className="item__img"
        />
        <h5 className="item__name">{product?.product.name}</h5>
      </td>
      <td className="cart-table__body-price">
        {product.product.price}
        <span className="cart-table__body-currency">₫</span>
      </td>
      <td className="cart-table__body-quantity">
        <div className="quantity">
          <div className="quantity__inner">
            <span
              onClick={() => {
                onUpdateProductInCart(product.product, product?.quantity - 1);
              }}
              className="quantity__btn"
            >
              {" "}
              -{" "}
            </span>
            <span className="quantity__value"> {product?.quantity} </span>
            <span
              onClick={() => {
                onUpdateProductInCart(product.product, product?.quantity + 1);
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
        {product?.product.price * product?.quantity}
        <span className="cart-table__body-currency">₫</span>
      </td>
      <td className="cart-table__body-delete">
        <i
          onClick={() => {
            onDeleteProductInCart(product?.product);
          }}
          className="fa fa-times cart-table__body-icon"
        />
      </td>
    </tr>
  );
};

export default CartItem;
