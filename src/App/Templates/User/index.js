import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import Header from "../../Layouts/User/Header/Header";
import Footer from "../../Layouts/User/Footer//Footer";

const HomeLayout = ({ ...props }) => {
  return (
    <Fragment>
      <Header />
      {props.children}
      <Footer />
    </Fragment>
  );
};

const HomeTemplate = ({ Component, ...props }) => {
  return (
    <Route
      {...props}
      render={(propsComponent) => {
        return (
          <HomeLayout>
            <Component {...propsComponent} />
          </HomeLayout>
        );
      }}
    />
  );
};
export default HomeTemplate;
