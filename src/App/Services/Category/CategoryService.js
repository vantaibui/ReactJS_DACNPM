import axios from "axios";
import { accessToken, domain } from "../../Configuration";

export const fetchCategories = () => {
  return axios({
    url: `${domain}/categories`,
    method: "GET",
  });
};

export const fetchCategoryDetailById = (id) => {
  return axios({
    url: `${domain}/categories/${id}/products`,
    method: "GET",
  });
};

export const createCategory = (data) => {
  return axios({
    url: `${domain}/categories`,
    method: "POST",
    data: data,
    headers: {
      Authorization: "Bearer " + localStorage.getItem(accessToken),
    },
  });
};

export const deleteCategory = (value) => {
  return axios({
    url: `${domain}/${value}`,
    method: "DELETE",
    headers: {
      Authorization: "Bearer " + localStorage.getItem(accessToken),
    },
  });
};

export const editCategory = (value) => {
  return axios({
    url: `${domain}`,
    method: "PUT",
    headers: {
      Authorization: "Bearer " + localStorage.getItem(accessToken),
    },
  });
};
