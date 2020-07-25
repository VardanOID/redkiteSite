import React from "react";
import GradientNumberListItemsBox from "./GradientNumberListItemsBox";
import GradientNumberListButtons from "./GradientNumberListButtons";
import Styles from "./GradientNumbersList.module.scss";
function GradientNumberList({
  roadmapSectionButton,
  roadmapSectionHeading,
  roadmapSectionData,
}) {
  return (
    <div className={Styles["ecommerce-customer-journey-box"]}>
      <div className={Styles["ecommerce-customer-journey-box-title"]}>
        {roadmapSectionHeading}
      </div>
      <GradientNumberListItemsBox roadmapSectionData={roadmapSectionData} />
      <GradientNumberListButtons roadmapSectionButton={roadmapSectionButton} />
    </div>
  );
}
export default GradientNumberList;
