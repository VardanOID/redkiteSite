import React from "react";
import Styles from "./IMGWithRightBox.module.scss";
// import Ecommerce3_bgPhoto from "../../../img/greyBG.png";
function BoxBox({ heading, paragraph, rightImage }) {
  return (
    <div
      className={Styles["ecommerce-second-box-box"]}
      style={{ backgroundImage: `url(${rightImage})` }}
    >
      <div
        className={Styles["ecommerce-second-box-title"]}
        dangerouslySetInnerHTML={{ __html: heading }}
      />
      <div
        className={Styles["ecommerce-second-box-text"]}
        dangerouslySetInnerHTML={{ __html: paragraph }}
      />
    </div>
  );
}
export default BoxBox;
