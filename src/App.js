import React from "react";
import "./App/Sass/Main.scss";
import HomePage from "./App/Pages/User/HomePage";
import AdminPage from "./App/Pages/Admin/AdminPage";
import SellerPage from "./App/Pages/Seller/SellerPage";
import Detail from "./App/Pages/User/DetailPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Fragment } from "react";
import routes from "./App/Routes";

import HomeTemplate from "./App/Templates/User";
import SellerTemplate from "./App/Templates/Seller";
import AdminTemplate from "./App/Templates/Admin";

import LoginPage from "./App/Pages/User/LoginPage";
import RegisterPage from "./App/Pages/User/RegisterPage";
import ConfirmOTPPage from "./App/Pages/User/ConfirmOTPPage";
import ForgetPassPage from "./App/Pages/User/ForgetPassPage";
import ResetPassPage from "./App/Pages/User/ResetPassPage";

import CartPage from "./App/Pages/User/CartPage";
import PaymentPage from "./App/Pages/User/PaymentPage";
import CategoryPage from "./App/Pages/User/CategoryPage";

import ProductManagePage from "./App/Pages/Seller/Product/";
import CategoryManagePage from "./App/Pages/Seller/Category/";
import CreateCategoryForm from "./App/Components/Seller/Form/CreateCategoryForm";

const App = () => {
  let showRoutes = (routes) => {
    console.log(routes);
    let result;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        let template;
        if (route.path == "/") {
          template = (
            <HomeTemplate
              exact={route.exact}
              path={route.path}
              Component={route.main}
            />
          );
        } else if (route.path == "/admin") {
          template = (
            <AdminTemplate
              exact={route.exact}
              path={route.path}
              Component={route.main}
            />
          );
        } else if (route.path == "/seller") {
          template = (
            <SellerTemplate
              exact={route.exact}
              path={route.path}
              Component={route.main}
            />
          );
        } else {
          template = (
            <Route
              exact={route.exact}
              path={route.path}
              component={route.component}
            />
          );
        }
        return template;
      });
    }
    return result;
  };

  return (
    <BrowserRouter>
      <Fragment>
        <Switch>
          {/* Home */}
          <HomeTemplate exact path="/" Component={HomePage} />

          <HomeTemplate exact path="/products/id/:id" Component={Detail} />

          {/* <HomeTemplate exact path="/products/code/:code" Component={Detail} /> */}

          <HomeTemplate
            exact
            path="/products/category/:id"
            Component={CategoryPage}
          />

          <HomeTemplate exact path="/cart" Component={CartPage} />

          <HomeTemplate exact path="/payment" Component={PaymentPage} />

          {/* Seller */}
          <SellerTemplate exact path="/seller" Component={SellerPage} />

          <SellerTemplate
            exact
            path="/seller/categories"
            Component={CategoryManagePage}
          />

          <SellerTemplate
            exact
            path="/seller/products"
            Component={ProductManagePage}
          />

          <SellerTemplate
            exact
            path="/seller/create-category"
            Component={CreateCategoryForm}
          />

          <SellerTemplate
            exact
            path="/seller/create-product"
            Component={CreateCategoryForm}
          />

          {/* Admin */}
          <AdminTemplate exact path="/admin" Component={AdminPage} />

          {/* Authentication */}
          <Route exact path="/login" component={LoginPage} />

          <Route exact path="/register" component={RegisterPage} />

          <Route exact path="/confirmOTP" component={ConfirmOTPPage} />

          <Route exact path="/forgetPassword" component={ForgetPassPage} />

          <Route exact path="/resetPassword" component={ResetPassPage} />

          {/* {showRoutes(routes)} */}
        </Switch>
      </Fragment>
    </BrowserRouter>
  );
};

export default App;
