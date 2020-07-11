import React from "react";
import EcommerceSuccessStoriesSubBox from "./EcommerceSuccessStoriesSubBox";
function EcommerceSuccessStoriesBox({ image, paragraph, heading, value }) {
  return (
    <div className="ecommerce-success-stories-box-box">
      <img src={image} alt="" className="ecommerce-success-stories-box-img" />
      <div className="ecommerce-success-stories-box-info-box">
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
