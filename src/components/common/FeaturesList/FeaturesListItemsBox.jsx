import React from "react";
import Styles from "./FeaturesList.module.scss";
import FeaturesListItems from "./FeaturesListItems";
function FeaturesListItemsBox({ contentSectionData }) {
  return (
    <div className={Styles["ecommerce-page-redkite-will-items-box"]}>
      {!!contentSectionData &&
        contentSectionData.map((data) => {
          return <FeaturesListItems key={data.image} {...data} />;
        })}
    </div>
  );
}
export default FeaturesListItemsBox;
