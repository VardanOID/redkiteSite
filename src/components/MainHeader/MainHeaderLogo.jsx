import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./MainHeader.module.scss";
function MainHeaderLogo({
  logoWhite,
  logoBlack,
  // hide, hideLogo
}) {
  // const logoWrapperClass = hide ? styles.logoWrapperClass : "";
  return (
    <div
      className={`${styles.mainHeaderLogoBox} 
   
    `}
    >
      <NavLink exact to="/">
        <img
          src={useLocation().pathname === "/" ? logoWhite : logoBlack}
          alt=""
          className={styles.mainHeaderLogo}
        />
      </NavLink>
    </div>
  );
}
export default MainHeaderLogo;
