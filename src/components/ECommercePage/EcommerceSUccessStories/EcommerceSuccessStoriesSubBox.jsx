import React from "react";
import EcommerceSuccessStoriesSubBoxText from "./EcommerceSuccessStoriesSubBoxText";
import EcommerceSuccessStoriesSubBoxButton from "./EcommerceSuccessStoriesSubBoxButton";
import Styles from "./LeftAndRightSections.module.scss";
function EcommerceSuccessStoriesSubBox({ heading, paragraph, value }) {
  return (
    <div className={Styles["left-right-box"]}>
      <div className={Styles["ecommerce-success-stories-sub-box-box"]}>
        <EcommerceSuccessStoriesSubBoxText
          heading={heading}
          paragraph={paragraph}
        />
        <EcommerceSuccessStoriesSubBoxButton />
      </div>
    </div>
  );
}
export default EcommerceSuccessStoriesSubBox;
