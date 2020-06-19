import React from "react";
import MainHeaderLogo from "./MainHeaderLogo";
import MainHeaderItemsBox from "./MainHeaderItemsBox";

import "../../styles/_index.scss";

function MainHeader() {
  return (
    <div className="mainHeaderBox">
      <MainHeaderLogo />
      <MainHeaderItemsBox />
    </div>
  );
}
export default MainHeader;
