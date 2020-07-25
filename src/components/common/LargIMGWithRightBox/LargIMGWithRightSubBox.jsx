import React from "react";
import LargIMGWithRightSubBoxText from "./LargIMGWithRightSubBoxText";
import LargIMGWithRightSubBoxButton from "./LargIMGWithRightSubBoxButton";
import Styles from "./LargIMGWithRightBox.module.scss";
function LargIMGWithRightSubBox({
  closingContentSectionHeading,
  closingContentSectionParagraph,
  closingContentSectionButton,
}) {
  return (
    <div className={Styles["ecommerce-why-redkite-right-subbox-box"]}>
      <LargIMGWithRightSubBoxText
        closingContentSectionHeading={closingContentSectionHeading}
        closingContentSectionParagraph={closingContentSectionParagraph}
      />
      <LargIMGWithRightSubBoxButton
        closingContentSectionButton={closingContentSectionButton}
      />
    </div>
  );
}
export default LargIMGWithRightSubBox;
