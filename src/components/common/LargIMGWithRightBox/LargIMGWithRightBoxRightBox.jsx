import React from "react";
import LargIMGWithRightSubBox from "./LargIMGWithRightSubBox";
import Styles from "./LargIMGWithRightBox.module.scss";
function LargIMGWithRightBoxRightBox({
  closingContentSectionHeading,
  closingContentSectionParagraph,
  closingContentSectionButton,
}) {
  return (
    <div className={Styles["ecommerce-why-redkite-right-box-box"]}>
      <LargIMGWithRightSubBox
        closingContentSectionHeading={closingContentSectionHeading}
        closingContentSectionParagraph={closingContentSectionParagraph}
        closingContentSectionButton={closingContentSectionButton}
      />
    </div>
  );
}
export default LargIMGWithRightBoxRightBox;
