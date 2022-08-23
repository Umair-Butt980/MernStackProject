import React from "react";
import { NavLink } from "react-router-dom";

import "./NavLinks.css";
const NavLinks = (props) => {
  <li>
    <NavLink to="/" exact>
      All Users
    </NavLink>
    <NavLink to="/" exact>
      My Places
    </NavLink>
    <NavLink to="/" exact>
      Places
    </NavLink>
    <NavLink to="/" exact>
      Authentication
    </NavLink>
  </li>;
};
export default NavLinks;
