import React from "react";
import ECommercePageRedkiteWillItemsBox from "./ECommercePageRedkiteWillItemsBox";
import Styles from "./FeaturesList.module.scss";
function ECommercePageRedkiteWill({ redkiteWill }) {
  return (
    <div>
      <div className={Styles["ecommerce-page-redkite-will-box"]}>
        <div className={Styles["ecommerce-page-redkite-will-box-title"]}>
          Redkite Will:
        </div>
        <ECommercePageRedkiteWillItemsBox redkiteWill={redkiteWill} />
      </div>
    </div>
  );
}
export default ECommercePageRedkiteWill;
