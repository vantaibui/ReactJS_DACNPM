import axios from "axios";
import { domain } from "../../Configuration";

export const login = (data) => {
  return axios({
    url: `${domain}/login`,
    method: "POST",
    data: data,
  });
};

export const register = (data) => {
  return axios({
    url: `${domain}/register`,
    method: "POST",
    data: data,
  });
};

export const confirmOTP = (otp) => {
  let Info = JSON.parse(localStorage.getItem("Register"));
  // console.log(JSON.parse(data).active === true);
  let data = {
    username: Info.username,
    email: Info.email,
    password: Info.password,
    phone: Info.phone,
    address: Info.address,
    active: 1,
    role: Info.role,
  };
  return axios({
    url: `${domain}/register/validate?otpnum=${otp}`,
    method: "POST",
    data: data,
  });
};

// Forget password
export const checkEmail = (email) => {
  return axios({
    url: `${domain}/forget`,
    method: "POST",
    data: email,
  });
};

export const resetPassword = (pass) => {
  return axios({
    url: `${domain}/reset`,
    method: "POST",
    data: pass,
  });
};

export const checkout = (values) => {
  return axios({
    url: `${domain}/checkout`,
    method: "POST",
    data: values,
  });
};
