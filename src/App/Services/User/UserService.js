import axios from "axios";
import * as yup from "yup";
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

export const fetchOrderByUserID = (userID) => {
  return axios({
    url: `${domain}/user/${userID}/orders`,
    method: "GET",
  });
};

export const signUpSchema = yup.object().shape({
  username: yup.string().required("Tên tài khoản không được bỏ trống!"),
  email: yup
    .string()
    .email("Email không hợp lệ!")
    .required("Email không được bỏ trống!"),
  password: yup.string().required("Không được bỏ trống!"),
  address: "",
  phone: yup.string().length(10).required("Không được để trống!"),
});
