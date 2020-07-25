import React from "react";
import LargIMGWithRightBoxRightBox from "./LargIMGWithRightBoxRightBox";
// import EcommerceWhyBg from "../../../img/EcommerceWhyBg.png";
import Styles from "./LargIMGWithRightBox.module.scss";
function LargIMGWithRightBox({
  closingContentSectionHeading,
  closingContentSectionParagraph,
  closingContentSectionImage,
  closingContentSectionButton,
}) {
  return (
    <div className={Styles["ecommerce-why-redkite-box"]}>
      <img
        src={closingContentSectionImage}
        alt=""
        className={Styles["ecommerce-why-redkite-img"]}
      />
      <div className={Styles["ecommerce-why-redkite-right-section"]}>
        <LargIMGWithRightBoxRightBox
          closingContentSectionHeading={closingContentSectionHeading}
          closingContentSectionParagraph={closingContentSectionParagraph}
          closingContentSectionButton={closingContentSectionButton}
        />
      </div>
    </div>
  );
}
export default LargIMGWithRightBox;
