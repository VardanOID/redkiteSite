import React from "react";
import EcommerceWhyRedkiteightRightBox from "./EcommerceWhyRedkiteRightBox";
import EcommerceWhyBg from "../../../img/EcommerceWhyBg.png";
import Styles from "./LargIMGWithRightBox.module.scss";
function EcommerceWhyRedkite({
  thirdSectionHeading,
  thirdSectionParagraph,
  thirdSectionButton,
}) {
  return (
    <div className={Styles["ecommerce-why-redkite-box"]}>
      <img
        src={EcommerceWhyBg}
        alt=""
        className={Styles["ecommerce-why-redkite-img"]}
      />
      <div className={Styles["ecommerce-why-redkite-right-section"]}>
        <EcommerceWhyRedkiteightRightBox
          thirdSectionHeading={thirdSectionHeading}
          thirdSectionParagraph={thirdSectionParagraph}
          thirdSectionButton={thirdSectionButton}
        />
      </div>
    </div>
  );
}
export default EcommerceWhyRedkite;
