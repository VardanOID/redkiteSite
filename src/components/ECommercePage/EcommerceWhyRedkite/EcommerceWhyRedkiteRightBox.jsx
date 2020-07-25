import React from "react";
import EcommerceWhyRedkiteightSubBox from "./EcommerceWhyRedkiteRightSubBox";
import Styles from "./LargIMGWithRightBox.module.scss";
function EcommerceWhyRedkiteightBox({
  thirdSectionHeading,
  thirdSectionParagraph,
  thirdSectionButton,
}) {
  return (
    <div className={Styles["ecommerce-why-redkite-right-box-box"]}>
      <EcommerceWhyRedkiteightSubBox
        thirdSectionHeading={thirdSectionHeading}
        thirdSectionParagraph={thirdSectionParagraph}
        thirdSectionButton={thirdSectionButton}
      />
    </div>
  );
}
export default EcommerceWhyRedkiteightBox;
