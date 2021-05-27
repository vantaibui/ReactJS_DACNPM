import React, { Fragment, Suspense, lazy } from "react";
import "./App/Sass/Main.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Loading from "./App/Components/Loading";

const HomeTemplate = lazy(() => import("./App/Templates/User"));
const SellerTemplate = lazy(() => import("./App/Templates/Seller"));
const AdminTemplate = lazy(() => import("./App/Templates/Admin"));

const LoginPage = lazy(() => import("./App/Pages/User/LoginPage"));
const RegisterPage = lazy(() => import("./App/Pages/User/RegisterPage"));
const ConfirmOTPPage = lazy(() => import("./App/Pages/User/ConfirmOTPPage"));
const ForgetPassPage = lazy(() => import("./App/Pages/User/ForgetPassPage"));
const ResetPassPage = lazy(() => import("./App/Pages/User/ResetPassPage"));

const HomePage = lazy(() => import("./App/Pages/User/HomePage"));
const AdminPage = lazy(() => import("./App/Pages/Admin/AdminPage"));
const SellerPage = lazy(() => import("./App/Pages/Seller/SellerPage"));

const DetailPage = lazy(() => import("./App/Pages/User/DetailPage"));
const CategoryPage = lazy(() => import("./App/Pages/User/CategoryPage"));

const CartPage = lazy(() => import("./App/Pages/User/CartPage"));
const PaymentPage = lazy(() => import("./App/Pages/User/PaymentPage"));
const OrderPage = lazy(() => import("./App/Pages/User/OrderPage"));

const ProductManagePage = lazy(() => import("./App/Pages/Seller/Product/"));
const CategoryManagePage = lazy(() => import("./App/Pages/Seller/Category/"));
const RevenueStatistics = lazy(() =>
  import("./App/Pages/Seller/Revenue-Statistics")
);

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Fragment>
          <Switch>
            {/* Home */}
            <HomeTemplate exact path="/" Component={HomePage} />

            <HomeTemplate
              exact
              path="/products/id/:id"
              Component={DetailPage}
            />

            {/* <HomeTemplate exact path="/products/code/:code" Component={DetailPage} /> */}

            <HomeTemplate
              exact
              path="/products/category/:id"
              Component={CategoryPage}
            />

            <HomeTemplate exact path="/cart" Component={CartPage} />

            <HomeTemplate exact path="/payment" Component={PaymentPage} />

            <HomeTemplate
              exact
              path="/user/:userID/orders"
              Component={OrderPage}
            />

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
              path="/seller/revenue-statistics"
              Component={RevenueStatistics}
            />

            {/* Admin */}
            <AdminTemplate exact path="/admin" Component={AdminPage} />

            {/* Authentication */}
            <Route exact path="/login" component={LoginPage} />

            <Route exact path="/register" component={RegisterPage} />

            <Route exact path="/confirmOTP" component={ConfirmOTPPage} />

            <Route exact path="/forgetPassword" component={ForgetPassPage} />

            <Route exact path="/resetPassword" component={ResetPassPage} />
          </Switch>
        </Fragment>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
