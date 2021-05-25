import React, { useEffect } from "react";
import { connect } from "react-redux";

import * as Actions from "../../Redux/Actions";

const OrderPage = (props) => {
  let { orders } = props;
  console.log(orders);

  useEffect(() => {
    let userID = props.match.params.userID;
    props.fetchOrders(userID);
  }, []);
  return <div></div>;
};

const mapStateToProps = (state) => {
  return {
    orders: state.UserReducer.orders,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchOrders: (userID) => {
      return dispatch(Actions.actionFetchOrderByUserID(userID));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderPage);
