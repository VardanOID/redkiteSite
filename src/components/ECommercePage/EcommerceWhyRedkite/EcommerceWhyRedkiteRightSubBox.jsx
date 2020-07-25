import React from "react";
import EcommerceWhyRedkiteightSubBoxText from "./EcommerceWhyRedkiteRightSubBoxText";
import EcommerceWhyRedkiteightSubBoxButton from "./EcommerceWhyRedkiteRightSubBoxButton";
import Styles from "./LargIMGWithRightBox.module.scss";
function EcommerceWhyRedkiteightSubBox({
  thirdSectionHeading,
  thirdSectionParagraph,
  thirdSectionButton,
}) {
  return (
    <div className={Styles["ecommerce-why-redkite-right-subbox-box"]}>
      <EcommerceWhyRedkiteightSubBoxText
        title={thirdSectionHeading}
        text={thirdSectionParagraph}
      />
      <EcommerceWhyRedkiteightSubBoxButton
        thirdSectionButton={thirdSectionButton}
      />
    </div>
  );
}
export default EcommerceWhyRedkiteightSubBox;
