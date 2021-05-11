import React from "react";
import "./App/Sass/Main.scss";
import HomePage from "./App/Pages/User/HomePage";
import AdminPage from "./App/Pages/Admin/AdminPage";
import SellerPage from "./App/Pages/Seller/SellerPage";
import Detail from "./App/Pages/User/DetailPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Fragment } from "react";
import HomeTemplate from "./App/Templates/User";
import SellerTemplate from "./App/Templates/Seller";
import AdminTemplate from "./App/Templates/Admin";

import routes from "./App/Routes";
import LoginPage from "./App/Pages/User/LoginPage";

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
    // <div>
    //   <Detail />
    //   {/* <HomePage /> */}
    //   {/* <AdminPage /> */}
    //   {/* <SellerPage /> */}
    // </div>

    <BrowserRouter>
      <Fragment>
        <Switch>
          <Route exact path="/" component={HomePage} />

          <HomeTemplate exact path="/detail/:id" Component={Detail} />

          <SellerTemplate exact path="/seller" Component={SellerPage} />

          <AdminTemplate exact path="/admin" Component={AdminPage} />

          <Route exact path="/login" component={LoginPage} />

          {/* {showRoutes(routes)} */}
        </Switch>
      </Fragment>
    </BrowserRouter>
  );
};

export default App;

// import React, { useEffect } from "react";
// import { connect } from "react-redux";
// import LoginPage from "./App/Pages/User/LoginPage";

// import { actionFetchProductsRequest } from "./App/Redux/Actions/index";
// import "./App/Sass/Main.scss";

// const App = (props) => {
//   console.log(props.productReducer);

//   useEffect(() => {
//     props.fetchProducts();
//   }, []);
//   return (
//     <div>
//       <LoginPage />
//     </div>
//   );
// };

// const mapStateToProps = (state) => {
//   return {
//     productReducer: state.ProductReducer,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchProducts: () => {
//       return dispatch(actionFetchProductsRequest());
//     },
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);
