import React from "react";
import Styles from "./LargIMGWithRightBox.module.scss";
function LargIMGWithRightSubBoxText({
  closingContentSectionHeading,
  closingContentSectionParagraph,
}) {
  return (
    <div className={Styles["ecommerce-why-redkite-right-subbox-text-box"]}>
      <div className={Styles["ecommerce-why-redkite-right-subbox-title"]}>
        {closingContentSectionHeading}
      </div>
      <div className={Styles["ecommerce-why-redkite-right-subbox-text"]}>
        {closingContentSectionParagraph}
      </div>
    </div>
  );
}
export default LargIMGWithRightSubBoxText;
