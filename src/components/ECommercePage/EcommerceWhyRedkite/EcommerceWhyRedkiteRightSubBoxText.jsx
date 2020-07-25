import React from "react";
import Styles from "./LargIMGWithRightBox.module.scss";
function EcommerceWhyRedkiteightSubBoxText(props) {
  return (
    <div className={Styles["ecommerce-why-redkite-right-subbox-text-box"]}>
      <div className={Styles["ecommerce-why-redkite-right-subbox-title"]}>
        {props.title}
      </div>
      <div className={Styles["ecommerce-why-redkite-right-subbox-text"]}>
        {props.text}
      </div>
    </div>
  );
}
export default EcommerceWhyRedkiteightSubBoxText;
