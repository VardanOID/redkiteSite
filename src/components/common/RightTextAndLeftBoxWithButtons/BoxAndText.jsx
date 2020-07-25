import React from "react";
import BoxWithButtons from "./BoxWithButtons";
import RightText from "./RightText";
import Styles from "./RightTextAndLeftBoxWithButtons.module.scss";
function BoxAndText({
  bigText,
  smallText,
  firstButtonText,
  secondButtonText,
  firstButtonLink,
  secondButtonLink,
}) {
  return (
    <div className={Styles["ecommerce-page-box-for-box-and-text"]}>
      <BoxWithButtons
        bigText={bigText}
        firstButtonText={firstButtonText}
        secondButtonText={secondButtonText}
        firstButtonLink={firstButtonLink}
        secondButtonLink={secondButtonLink}
      />
      <RightText smallText={smallText} />
    </div>
  );
}
export default BoxAndText;
