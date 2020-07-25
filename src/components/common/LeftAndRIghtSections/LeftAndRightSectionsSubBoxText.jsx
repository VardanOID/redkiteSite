import React from "react";
import Styles from "./LeftAndRightSections.module.scss";
function LeftAndRightSectionsSubBoxText({ heading, paragraph }) {
  return (
    <div className={Styles["ecommerce-success-stories-sub-box-Text-box"]}>
      <div className={Styles["commerce-success-stories-sub-box-title"]}>
        {heading}
      </div>
      <div className={Styles["commerce-success-stories-sub-box-Text"]}>
        {paragraph}
      </div>
    </div>
  );
}
export default LeftAndRightSectionsSubBoxText;
