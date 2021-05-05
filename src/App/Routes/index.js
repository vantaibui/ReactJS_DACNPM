import React from "react";

import HomePage from "../Pages/User/HomePage";
import AdminPage from "../Pages/Admin/AdminPage";
import SellerPage from "../Pages/Seller/SellerPage";
import Detail from "../Pages/User/DetailPage";

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
];

export default Routes;
