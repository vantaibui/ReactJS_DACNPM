import axios from "axios";
import { domain } from "../../Configuration";

export const fetchProductInCartByUserId = (userID) => {
  return axios({
    url: `${domain}/user/${userID}/cart-items`,
    method: "GET",
  });
};

export const addProductToCartByUserId = (userID, data) => {
  return axios({
    url: `${domain}/user/${userID}/cart-items`,
    method: "POST",
    data: data,
  });
};

export const updateProductInCart = (values) => {
  let userID = values.userID;
  let productID = values.productID;
  let action = values.action;
  return axios({
    url: `${domain}/user/${userID}/cart-items/${productID}?action=${action}`,
    method: "PUT",
  });
};

export const removeProductFromCart = (values) => {
  let userID = values.userID;
  let productID = values.productID;
  return axios({
    url: `${domain}/user/${userID}/cart-items/${productID}`,
    method: "DELETE",
  });
};
