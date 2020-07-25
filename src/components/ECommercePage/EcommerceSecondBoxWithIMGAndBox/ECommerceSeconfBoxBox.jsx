import React from "react";
import Styles from "./IMGWithRightBox.module.scss";
function ECommerceSeconfBoxBox(props) {
  return (
    <div className={Styles["ecommerce-second-box-box"]}>
      <div
        className={Styles["ecommerce-second-box-title"]}
        dangerouslySetInnerHTML={{ __html: props.title }}
      />
      <div
        className={Styles["ecommerce-second-box-text"]}
        dangerouslySetInnerHTML={{ __html: props.text }}
      />
    </div>
  );
}
export default ECommerceSeconfBoxBox;
