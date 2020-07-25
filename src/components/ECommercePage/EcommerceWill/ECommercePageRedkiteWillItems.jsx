import React from "react";
import Styles from "./FeaturesList.module.scss";
function ECommercePageRedkiteWillItems(props) {
  return (
    <div className={Styles["ecommerce-page-redkite-will-items-box"]}>
      <div className={Styles["ecommerce-page-redkite-will-items-text"]}>
        <div>
          <img
            src={props.image}
            alt=""
            className={Styles["ecommerce-page-redkite-will-items-img"]}
          />
        </div>
        {props.paragraph}
      </div>
    </div>
  );
}
export default ECommercePageRedkiteWillItems;
