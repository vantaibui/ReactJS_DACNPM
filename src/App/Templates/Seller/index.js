import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import Header from "../../Layouts/Seller/Header";
import Sidebar from "../../Layouts/Seller/Sidebar";

const SellerLayout = ({ ...props }) => {
  return (
    <Fragment>
      <Sidebar />
      <div className="main-content-seller">
        <Header />
        {props.children}
      </div>
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
