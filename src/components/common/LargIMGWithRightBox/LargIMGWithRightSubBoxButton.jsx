import React from "react";
import Styles from "./LargIMGWithRightBox.module.scss";
function LargIMGWithRightSubBoxButton({ closingContentSectionButton }) {
  return (
    <div className={Styles["ecommerce-why-redkite-right-subbox-button-box"]}>
      <input
        type="button"
        value={closingContentSectionButton}
        className={Styles["ecommerce-why-redkite-right-subbox-button"]}
      />
    </div>
  );
}
export default LargIMGWithRightSubBoxButton;
