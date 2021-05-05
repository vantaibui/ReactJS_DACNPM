import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import Header from "../../Layouts/Seller/Header";
import Footer from "../../Layouts/User/Footer/Footer";

const SellerLayout = ({ ...props }) => {
  return (
    <Fragment>
      <Header />
      {props.children}
    </Fragment>
  );
};

const SellerTemplate = ({ Component, ...props }) => {
  return (
    <Route
      {...props}
      render={(propsComponent) => {
        return (
          <SellerLayout>
            <Component {...propsComponent} />
          </SellerLayout>
        );
      }}
    />
  );
};
export default SellerTemplate;
