import React, { useEffect } from "react";
import MainHeaderLogo from "./MainHeaderLogo";
import MainHeaderItemsBox from "./MainHeaderItemsBox";
import { useLocation } from "react-router-dom";
import "../../styles/_index.scss";
// if ( window.scrollY < 1) {
//   alert(12)
// }
function MainHeader() {

  
  return (
    <div
      className="mainHeaderBox"
      style={{
        background: useLocation().pathname !== "/" ? "white" : "transparent",
       
      }}
     
    >
      <MainHeaderLogo />
      <MainHeaderItemsBox />
    </div>
  );
}
export default MainHeader;
