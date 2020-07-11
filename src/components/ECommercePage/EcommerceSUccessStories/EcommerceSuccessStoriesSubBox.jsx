import React from "react";
import EcommerceSuccessStoriesSubBoxText from "./EcommerceSuccessStoriesSubBoxText";
import EcommerceSuccessStoriesSubBoxButton from "./EcommerceSuccessStoriesSubBoxButton";
function EcommerceSuccessStoriesSubBox({ heading, paragraph, value }) {
  return (
    <div className="left-right-box">
      <div className="ecommerce-success-stories-sub-box-box">
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
