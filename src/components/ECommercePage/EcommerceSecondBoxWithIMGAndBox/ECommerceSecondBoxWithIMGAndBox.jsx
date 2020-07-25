import React from "react";
import ECommerceSecondBoxIMG from "./ECommerceSecondBoxIMG";
import ECommerceSeconfBoxBox from "./ECommerceSeconfBoxBox";
import Styles from "./IMGWithRightBox.module.scss";
function ECommerceSecondBoxWithIMGAndBox({ firstSectionText }) {
  return (
    <div className={Styles["ecommerce-second-box-with-IMG-and-box-box"]}>
      <ECommerceSecondBoxIMG />
      <ECommerceSeconfBoxBox
        title={!!firstSectionText && firstSectionText[3].text}
        text={!!firstSectionText && firstSectionText[4].text}
      />
    </div>
  );
}
export default ECommerceSecondBoxWithIMGAndBox;
