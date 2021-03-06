import React from "react";
import EcommerceCustomerJourneyItemsBox from "./EcommerceCustomerJourneyItemsBox";
import EcommerceCustomerJourneyButton from "./EcommerceCustomerJourneyButton";
function EcommerceCustomerJourney() {
  return (
    <div className="ecommerce-customer-journey-box">
   <div className="ecommerce-customer-journey-box-title">CUSTOMER JOURNEY</div>
   <EcommerceCustomerJourneyItemsBox />
   <EcommerceCustomerJourneyButton />
    </div>
  );
}
export default EcommerceCustomerJourney;
