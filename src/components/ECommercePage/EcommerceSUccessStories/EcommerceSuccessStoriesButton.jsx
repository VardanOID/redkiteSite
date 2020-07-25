import React from "react";
import Styles from "./LeftAndRightSections.module.scss";
function EcommerceSuccessStoriesButton() {
  return (
    <div className={Styles["ecommerce-success-stories-button-box"]}>
      <input
        type="button"
        value="EXPLORE ALL STORIES"
        className={Styles["ecommerce-success-stories-button-text"]}
      />
    </div>
  );
}
export default EcommerceSuccessStoriesButton;
