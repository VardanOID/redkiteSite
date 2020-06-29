import React from "react";
import MainHeaderItem from "./MainHeaderItem";
import MainHeaderCallButton from "./MainHeaderCallButton";
import { NavLink } from "react-router-dom";

function MainHeaderItemsBox() {
  return (
    <div className="main-header-items-box-box" >
      <NavLink exact activeClassName="active" to="" style={{textDecoration: "none"}}>
        <MainHeaderItem name="Solutions"  />
      </NavLink>
      <NavLink exact activeClassName="active" to="" style={{textDecoration: "none"}}>
        <MainHeaderItem name="Our Works" />
      </NavLink>

      <NavLink exact activeClassName="active" to="/ecommerce" style={{textDecoration: "none"}} >
        <MainHeaderItem name="E-Commerce" />
      </NavLink>
      <NavLink exact activeClassName="active" to="" style={{textDecoration: "none"}}>
        <MainHeaderItem name="Our Clients" />
      </NavLink>
      <NavLink exact activeClassName="active" to="" style={{textDecoration: "none"}}>
        <MainHeaderItem name="FAQ" />
      </NavLink>
      <NavLink exact activeClassName="active" to="" style={{textDecoration: "none"}}>
        <MainHeaderItem name="About US" />
      </NavLink>
      <NavLink exact activeClassName="active" to="" style={{textDecoration: "none"}}>
        <MainHeaderItem name="Contact Us" />
      </NavLink>
      <NavLink exact activeClassName="active" to="" style={{textDecoration: "none"}}>
        <MainHeaderCallButton />
      </NavLink>
    </div>
  );
}
export default MainHeaderItemsBox;
