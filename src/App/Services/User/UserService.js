import axios from "axios";
import { domain } from "../../Configuration";

export const signIn = (data) => {
  return axios({
    url: `${domain}/login`,
    method: "POST",
    data: data,
  });
};

export const signUp = (data) => {
  return axios({
    url: `${domain}/register`,
    method: "POST",
    data: data,
  });
};

export const confirmOTP = (data) => {
  return axios({
    url: `${domain}/otp`,
    method: "POST",
    data: data,
  });
};

export const forgotPassword = (data) => {
  return axios({
    url: `${domain}/forgot`,
    method: "POST",
    data: data,
  });
};
