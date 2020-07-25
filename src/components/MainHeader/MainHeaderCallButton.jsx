import React from "react";
// import IconPhoneWhite from "../../img/Icon_Phone.svg";
// import IconPhoneBlack from "../../img/Icon_Phone_Black.png";
import { useLocation } from "react-router-dom";
function MainHeaderCallButton({ callIconWhite, callIconBlack }) {
  return (
    <div className="mainHeaderCallButtonBox">
      <img
        src={useLocation().pathname === "/" ? callIconWhite : callIconBlack}
        alt=""
      />
    </div>
  );
}
export default MainHeaderCallButton;
