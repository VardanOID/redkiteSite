import React from "react";
import GradientNumberListItems from "./GradientNumberListItems";
import Styles from "./GradientNumbersList.module.scss";
function GradientNumberListItemsBox({ roadmapSectionData }) {
  return (
    <div className={Styles["ecommerce-customer-journey-items-box-box"]}>
      {!!roadmapSectionData &&
        roadmapSectionData.map((data) => {
          return <GradientNumberListItems key={data.number} {...data} />;
        })}
    </div>
  );
}
export default GradientNumberListItemsBox;
