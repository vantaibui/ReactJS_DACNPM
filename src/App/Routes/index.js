import React from "react";

import HomePage from "../Pages/User/HomePage";
import Detail from "../Pages/User/DetailPage";
import LoginPage from "../Pages/User/LoginPage";
import RegisterPage from "../Pages/User/RegisterPage";
import AdminPage from "../Pages/Admin/AdminPage";
import SellerPage from "../Pages/Seller/SellerPage";
import NotFoundPage from "../Pages/NotFoundPage";

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
    path: "/detail/:id",
    main: () => {
      return <Detail />;
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
    path: "/signup",
    main: () => {
      return <RegisterPage />;
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
