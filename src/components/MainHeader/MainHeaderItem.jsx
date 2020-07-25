import React from "react";
import styles from "./MainHeader.module.scss";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
function MainHeaderItem(props) {
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
export default MainHeaderItem;
