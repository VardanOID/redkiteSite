import React, { useState } from "react";
import MainHeaderLogo from "./MainHeaderLogo";
import MainHeaderItemsBox from "./MainHeaderItemsBox";
import { useLocation } from "react-router-dom";
import useWindowScrollPosition from "@rehooks/window-scroll-position";
import "../../styles/_index.scss";

function MainHeader() {
  const [change, setChange] = useState(false);
  const changePosition = 10;

  let position = useWindowScrollPosition();
  

  if (position.y > changePosition && !change) {
    setChange(true);
  }

  if (position.y <= changePosition && change) {
    setChange(false);
  }

  let style = {
    backgroundColor: useLocation().pathname === "/" && change ? "#0F0F0F" : "transparent",
    background: useLocation().pathname !== "/" ? "white" : "transparent",
    transition: "400ms ease",
    height: "110px",
boxShadow:useLocation().pathname === "/" && change ? "0px 15px 18px -1px rgba(0,0,0,0.75)": "none",
opacity: useLocation().pathname !== "/"  ? "0.9" : "1",
  };
  
  return (
    <div
      className="mainHeaderBox"
    
     style={style}
    >
      <MainHeaderLogo />
      <MainHeaderItemsBox />
    </div>
  );
}
export default MainHeader;
