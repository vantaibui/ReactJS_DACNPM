import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import Header from "../../Layouts/Admin/Header";

const AdminLayout = ({ ...props }) => {
  return (
    <Fragment>
      <Header />
      {props.children}
    </Fragment>
  );
};

const AdminTemplate = ({ Component, ...props }) => {
  return (
    <Route
      {...props}
      render={(propsComponent) => {
        return (
          <AdminLayout>
            <Component {...propsComponent} />
          </AdminLayout>
        );
      }}
    />
  );
};
export default AdminTemplate;
