import React from "react";
import ECommerceIMG from "../../../img/Ecommerce_img.png";
import ECommercePageCoverBoxText from "./ECommercePageCoverBoxText";
import Styles from "./Cover.module.scss";
function ECommercePageCoverBox({ firstSectionHeading, firstSectionText }) {
  return (
    <div>
      <img
        src={ECommerceIMG}
        alt=""
        className={Styles["ecommerce-page-cover-box"]}
      />
      <ECommercePageCoverBoxText
        firstSectionHeading={firstSectionHeading}
        firstSectionText={firstSectionText}
      />
    </div>
  );
}
export default ECommercePageCoverBox;
