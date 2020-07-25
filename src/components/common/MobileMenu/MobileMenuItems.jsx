import React from "react";

import { useLocation, NavLink } from "react-router-dom";

import styles from "./MobileMenu.module.scss";
function MobileMenuItems(props) {
  return (
    <div className={styles["main-header-item"]}>
      <NavLink
        exact
        activeClassName="active"
        to={props.itemLink}
        className={styles["inactive"]}
        style={{
          color: useLocation().pathname === "/" ? "white" : "black",
        }}
      >
        {props.menuItem}
      </NavLink>
    </div>
  );
}
export default MobileMenuItems;
