import axios from "axios";
import { domain } from "../../Configuration";

export const createOrder = (data) => {
  return axios({
    url: `${domain}/order`,
    method: "POST",
    data: data,
  });
};

export const fetchOrderByUserId = (id) => {
  return axios({
    url: `${domain}/order/${id}`,
    method: "GET",
  });
};
