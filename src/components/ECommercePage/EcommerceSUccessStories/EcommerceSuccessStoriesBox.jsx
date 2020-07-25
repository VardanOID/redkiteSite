import React from "react";
import EcommerceSuccessStoriesSubBox from "./EcommerceSuccessStoriesSubBox";
import Styles from "./LeftAndRightSections.module.scss";
function EcommerceSuccessStoriesBox({ image, paragraph, heading, value }) {
  return (
    <div className={Styles["ecommerce-success-stories-box-box"]}>
      <img
        src={image}
        alt=""
        className={Styles["ecommerce-success-stories-box-img"]}
      />
      <div className={Styles["ecommerce-success-stories-box-info-box"]}>
        <EcommerceSuccessStoriesSubBox
          paragraph={paragraph}
          heading={heading}
          value={value}
        />
      </div>
    </div>
  );
}
export default EcommerceSuccessStoriesBox;
