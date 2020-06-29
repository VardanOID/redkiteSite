import React from "react";
import { useLocation } from "react-router-dom";

function MainHeaderItem(props) {
  return <div className="mainHeaderItemBox" >
      <div className="main-header-item"  style={{
     color: useLocation().pathname == "/" ? "white" : "black",
      }}>{props.name}</div>
  </div>;
}
export default MainHeaderItem;
