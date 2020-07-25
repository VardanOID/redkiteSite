import React from "react";
// import Ecommerce3_bgPhoto from "../../../img/Ecommerce3_bgPhoto.png";
import Styles from "./IMGWithRightBox.module.scss";
function IMGBox({ leftImage }) {
  return (
    <div>
      <img
        // src={Ecommerce3_bgPhoto}
        src={leftImage}
        alt=""
        className={Styles["ecommerce-second-box-img"]}
      />
    </div>
  );
}
export default IMGBox;
