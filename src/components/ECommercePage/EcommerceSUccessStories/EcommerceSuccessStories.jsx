import React from "react";
import EcommerceSuccessStoriesBox from "./EcommerceSuccessStoriesBox";
import EcommerceSuccessStoriesButton from "./EcommerceSuccessStoriesButton";
import Styles from "./LeftAndRightSections.module.scss";
function EcommerceSuccessStories({ fourthSectionContent }) {
  return (
    <div className={Styles["ecommerce-success-stories-box"]}>
      <div className={Styles["ecommerce-success-stories-title"]}>
        Customer Success Stories
      </div>
      <div className={Styles["test"]}>
        {!!fourthSectionContent &&
          fourthSectionContent.map((data) => {
            return <EcommerceSuccessStoriesBox {...data} />;
          })}
      </div>

      <EcommerceSuccessStoriesButton />
    </div>
  );
}
export default EcommerceSuccessStories;
