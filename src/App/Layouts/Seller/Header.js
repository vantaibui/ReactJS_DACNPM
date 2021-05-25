import React from "react";
import { connect } from "react-redux";
import ImgAdmin from "../../Assets/Images/User/avatar.png";

const Header = (props) => {
  let { credentials } = props;

  return (
    <header>
      <h2>
        <label className="label" htmlFor="sidebar-toggle">
          <span className="fa fa-bars" />
        </label>
        Dashboard
      </h2>
      <div className="search-wrapper">
        <i className="fa fa-search" />
        <input type="search" placeholder="Search here" />
      </div>
      <div className="user-wrapper">
        <img src={ImgAdmin} alt="img" />
        <div className="info">
          <h4>{credentials?.username}</h4>
          <small>
            {credentials?.roles.map((role) => {
              return role.slice(5);
            })}
          </small>
        </div>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    credentials: state.UserReducer.credentials,
  };
};

export default connect(mapStateToProps, null)(Header);
