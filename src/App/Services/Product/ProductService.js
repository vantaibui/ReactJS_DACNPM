import axios from "axios";
import { accessToken, domain } from "../../Configuration";

export const fetchProducts = () => {
  return axios({
    url: `${domain}/products`,
    method: "GET",
  });
};

export const fetchProductDetailById = (value) => {
  return axios({
    url: `${domain}/products/id/${value}`,
    method: "GET",
  });
};

export const fetchProductDetailByCode = (value) => {
  return axios({
    url: `${domain}/products/code/${value}`,
    method: "GET",
  });
};

// Manage

export const fetchAllProduct = () => {
  return axios({
    url: `${domain}/admin/products`,
    method: "GET",
    headers: {
      Authorization: "Bearer " + localStorage.getItem(accessToken),
    },
  });
};

export const createProduct = (product) => {
  return axios({
    url: `${domain}/admin/products`,
    method: "POST",
    data: product,
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: "Bearer " + localStorage.getItem(accessToken),
    },
  });
};

export const editProduct = (id, value) => {
  return axios({
    url: `${domain}/admin/products/${id}`,
    method: "PUT",
    data: value,
    headers: {
      "Content-Type":
        "multipart/form-data; boundary=<calculated when request is sent>",
      Authorization: "Bearer " + localStorage.getItem(accessToken),
    },
  });
};

export const deleteProduct = (id) => {
  return axios({
    url: `${domain}/admin/products/${id}`,
    method: "DELETE",
    headers: {
      Authorization: "Bearer " + localStorage.getItem(accessToken),
    },
  });
};

export const fetchProductByName = (value) => {
  return axios({
    url: `${domain}/admin/products/name/${value}`,
    method: "GET",
  });
};

export const fetchProductByCode = (value) => {
  return axios({
    url: `${domain}/admin/products/code/${value}`,
    method: "GET",
  });
};
