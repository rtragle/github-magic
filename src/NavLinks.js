import React from "react";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";

const NavLinks = ({ match: { params: { userName } } }) => (
  <ul>
    <li><NavLink to={`/${userName}`}>User Info</NavLink></li>
    <li><NavLink to={`/${userName}/followers`}>Follwers</NavLink></li>
  </ul>
);

export default withRouter(NavLinks);
