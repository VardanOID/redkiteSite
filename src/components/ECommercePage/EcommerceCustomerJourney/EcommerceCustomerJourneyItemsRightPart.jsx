import React from "react";
import Styles from "./GradientNumbersList.module.scss";
function EcommerceCustomerJourneyItemsRightPart({ paragraph }) {
  return (
    <div className={Styles["ecommerce-customer-journey-items-right-part-box"]}>
      <div
        className={Styles["ecommerce-customer-journey-items-right-part-text"]}
      >
        {paragraph}
      </div>
    </div>
  );
}
export default EcommerceCustomerJourneyItemsRightPart;
