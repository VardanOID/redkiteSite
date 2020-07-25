import React from "react";
import FeaturesListItemsBox from "./FeaturesListItemsBox";
import Styles from "./FeaturesList.module.scss";
function FeaturesList({ contentSectionHeading, contentSectionData }) {
  return (
    <div>
      <div className={Styles["ecommerce-page-redkite-will-box"]}>
        <div className={Styles["ecommerce-page-redkite-will-box-title"]}>
          {contentSectionHeading}
        </div>
        <FeaturesListItemsBox contentSectionData={contentSectionData} />
      </div>
    </div>
  );
}
export default FeaturesList;
