import React from "react";
import Styles from "./FeaturesList.module.scss";
import ECommercePageRedkiteWillItems from "./ECommercePageRedkiteWillItems";
function ECommercePageRedkiteWillItemsBox({ redkiteWill }) {
  return (
    <div className={Styles["ecommerce-page-redkite-will-items-box"]}>
      {!!redkiteWill &&
        redkiteWill.map((data) => {
          return <ECommercePageRedkiteWillItems {...data} />;
        })}
    </div>
  );
}
export default ECommercePageRedkiteWillItemsBox;
