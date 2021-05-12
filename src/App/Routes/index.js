import React from "react";

import HomePage from "../Pages/User/HomePage";
import LoginPage from "../Pages/User/LoginPage";
import RegisterPage from "../Pages/User/RegisterPage";
import ConfirmOTPPage from "../Pages/User/ConfirmOTPPage";
import AdminPage from "../Pages/Admin/AdminPage";
import SellerPage from "../Pages/Seller/SellerPage";
import NotFoundPage from "../Pages/NotFoundPage";
import DetailPage from "../Pages/User/DetailPage";
import CartPage from "../Pages/User/CartPage";
import PaymentPage from "../Pages/User/PaymentPage";

const Routes = [
  {
    exact: true,
    path: "/",
    main: () => {
      return <HomePage />;
    },
  },
  {
    exact: false,
    path: "/products/:id",
    main: () => {
      return <DetailPage />;
    },
  },
  {
    exact: false,
    path: "/cart",
    main: () => {
      return <CartPage />;
    },
  },
  {
    exact: false,
    path: "/payment",
    main: () => {
      return <PaymentPage />;
    },
  },
  {
    exact: false,
    path: "/login",
    main: () => {
      return <LoginPage />;
    },
  },
  {
    exact: false,
    path: "/register",
    main: () => {
      return <RegisterPage />;
    },
  },
  {
    exact: false,
    path: "/confirmOTP",
    main: () => {
      return <ConfirmOTPPage />;
    },
  },
  {
    exact: false,
    path: "/admin",
    main: () => {
      return <AdminPage />;
    },
  },
  {
    exact: false,
    path: "/seller",
    main: () => {
      return <SellerPage />;
    },
  },
  {
    exact: false,
    path: "",
    main: () => {
      return <NotFoundPage />;
    },
  },
];

export default Routes;
