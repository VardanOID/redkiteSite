import React from "react";
import Ecommerce3_bgPhoto from "../../../img/Ecommerce3_bgPhoto.png";
import Styles from "./IMGWithRightBox.module.scss";
function ECommerceSecondBoxIMG() {
  return (
    <div>
      <img
        src={Ecommerce3_bgPhoto}
        alt=""
        className={Styles["ecommerce-second-box-img"]}
      />
    </div>
  );
}
export default ECommerceSecondBoxIMG;
