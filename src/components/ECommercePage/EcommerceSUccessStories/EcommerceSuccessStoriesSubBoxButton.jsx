import React from "react";
import Styles from "./LeftAndRightSections.module.scss";
function EcommerceSuccessStoriesSubBoxButton() {
  return (
    <div className={Styles["ecommerce-success-stories-sub-box-button-box"]}>
      <input
        type="button"
        value="Read More"
        className={Styles["ecommerce-success-stories-sub-box-button"]}
      />
    </div>
  );
}
export default EcommerceSuccessStoriesSubBoxButton;
