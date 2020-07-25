import React from "react";
import EcommerceCustomerJourneyItemsBox from "./EcommerceCustomerJourneyItemsBox";
import EcommerceCustomerJourneyButton from "./EcommerceCustomerJourneyButton";
import Styles from "./GradientNumbersList.module.scss";
function EcommerceCustomerJourney({ customerJourney }) {
  return (
    <div className={Styles["ecommerce-customer-journey-box"]}>
      <div className={Styles["ecommerce-customer-journey-box-title"]}>
        CUSTOMER JOURNEY
      </div>
      <EcommerceCustomerJourneyItemsBox customerJourney={customerJourney} />
      <EcommerceCustomerJourneyButton />
    </div>
  );
}
export default EcommerceCustomerJourney;
