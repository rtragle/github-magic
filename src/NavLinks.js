import React from "react";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";

const NavLinks = ({ match: { params: { userName } } }) => (
  <ul className="nav navbar-nav">
    <li className="nav-item">
      <NavLink exact to={`/${userName}`} className="nav-link">User Info</NavLink>
    </li>
    <li className="nav-item">
      <NavLink to={`/${userName}/followers`} className="nav-link">Followers</NavLink>
    </li>
  </ul>
);

export default withRouter(NavLinks);
