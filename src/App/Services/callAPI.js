import axios from "axios";
import { domain } from "../Configuration";

export const callAPI = (endpoint, method, body) => {
  return axios({
    url: `${domain}/${endpoint}`,
    method: method,
    data: body,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
