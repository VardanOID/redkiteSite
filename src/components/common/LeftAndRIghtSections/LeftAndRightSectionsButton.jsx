import React from "react";
import Styles from "./LeftAndRightSections.module.scss";
function LeftAndRightSectionsButton({ button }) {
  return (
    <div className={Styles["ecommerce-success-stories-sub-box-button-box"]}>
      <input
        type="button"
        value={button}
        className={Styles["ecommerce-success-stories-sub-box-button"]}
      />
    </div>
  );
}
export default LeftAndRightSectionsButton;
