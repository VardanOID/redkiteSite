import React from "react";
import Styles from "./LeftAndRightSections.module.scss";
function LeftAndRightSectionsMainButton({
  customerCasesSectionButton,
  setShow,
  isShown,
}) {
  return (
    <div className={Styles["ecommerce-success-stories-button-box"]}>
      <input
        type="button"
        value={isShown ? "Show Less" : customerCasesSectionButton}
        className={Styles["ecommerce-success-stories-button-text"]}
        onClick={() => {
          setShow(!isShown);
        }}
      />
    </div>
  );
}
export default LeftAndRightSectionsMainButton;
