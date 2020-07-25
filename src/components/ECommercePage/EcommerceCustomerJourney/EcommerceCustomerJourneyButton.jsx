import React from "react";
import Styles from "./GradientNumbersList.module.scss";

function EcommerceCustomerJourneyButton() {
  return (
    <div className={Styles["ecommerce-customer-journey-button-box"]}>
      <input
        type="button"
        value="DOWNLOAD A CONTENT"
        className={Styles["ecommerce-customer-journey-button-content"]}
      />
    </div>
  );
}
export default EcommerceCustomerJourneyButton;
