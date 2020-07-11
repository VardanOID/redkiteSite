import React from "react";
import EcommerceCustomerJourneyItemsBox from "./EcommerceCustomerJourneyItemsBox";
import EcommerceCustomerJourneyButton from "./EcommerceCustomerJourneyButton";
function EcommerceCustomerJourney({ customerJourney }) {
  return (
    <div className="ecommerce-customer-journey-box">
      <div className="ecommerce-customer-journey-box-title">
        CUSTOMER JOURNEY
      </div>
      <EcommerceCustomerJourneyItemsBox customerJourney={customerJourney} />
      <EcommerceCustomerJourneyButton />
    </div>
  );
}
export default EcommerceCustomerJourney;
