import React from "react";
import Styles from "./LargIMGWithRightBox.module.scss";
function EcommerceWhyRedkiteightSubBoxButton({ thirdSectionButton }) {
  return (
    <div className={Styles["ecommerce-why-redkite-right-subbox-button-box"]}>
      <input
        type="button"
        value={thirdSectionButton}
        className={Styles["ecommerce-why-redkite-right-subbox-button"]}
      />
    </div>
  );
}
export default EcommerceWhyRedkiteightSubBoxButton;
