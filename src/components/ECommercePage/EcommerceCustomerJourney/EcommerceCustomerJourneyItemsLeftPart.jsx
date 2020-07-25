import React from "react";
import Styles from "./GradientNumbersList.module.scss";
function EcommerceCustomerJourneyItemsLeftPart({ number, heading, bgcolor }) {
  return (
    <div
      className={
        Styles[
          `ecommerce-customer-journey-items-left ${bgcolor} ecommerce-customer-journey-items-left-part-box ecommerce-customer-journey-items-left-bg`
        ]
      }
    >
      <div
        className={Styles["ecommerce-customer-journey-items-left-part-number"]}
      >
        {number}
      </div>
      <div
        className={Styles["ecommerce-customer-journey-items-left-part-text"]}
      >
        {heading}
      </div>
    </div>
  );
}
export default EcommerceCustomerJourneyItemsLeftPart;
