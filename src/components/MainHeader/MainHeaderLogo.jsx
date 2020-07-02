import React from "react";
// import RedkiteMainLogo from "../../img/Logo.svg";
import RedkiteMainLogoWhite from "../../img/LogoWhite.png";
import RedkiteMainLogoBlack from "../../img/Logo.png";
import { NavLink, useLocation } from "react-router-dom";

function MainHeaderLogo() {
  // if (useLocation().pathname == "/") {
  //   var Logo = { RedkiteMainLogo };
  // } else {
  //   var Logo = { RedkiteMainLogoBlack };
  // }
  return (
    <div className="mainHeaderLogoBox">
      <NavLink exact to="/">
      <img src={useLocation().pathname === "/" ? RedkiteMainLogoWhite : RedkiteMainLogoBlack} alt="" />
      </NavLink>
    </div>
  );
}
export default MainHeaderLogo;
