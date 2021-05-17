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
  console.log(product);
  let formData = new FormData();
  formData.append("file", product.file);
  formData.append("name", product.name);
  formData.append("price", parseInt(product.price));
  formData.append("description", product.description);
  formData.append("evaluate", parseInt(product.evaluate));
  formData.append("exp", product.exp);
  formData.append("remain", parseInt(product.remain));
  formData.append("category", product.category);
  formData.append("active", parseInt(product.active));

  console.log(formData.getAll("active"));

  return axios({
    url: `${domain}/admin/products`,
    method: "POST",
    data: formData,
    headers: {
      "Content-Type": "multipart/form-data",
      // Accept: "application/json",
      // type: "formData",
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
