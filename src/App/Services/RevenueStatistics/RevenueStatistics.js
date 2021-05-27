import axios from "axios";
import { domain } from "../../Configuration";

export const fetchRevenueStatistics = () => {
  return axios({
    url: `${domain}/revenue`,
    method: "GET",
  });
};

export const addRevenueStatistics = (date) => {
  return axios({
    url: `${domain}//revenue?date=${date}`,
    method: "PUT",
  });
};
