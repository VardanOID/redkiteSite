// EcommerceCustomerJourneyItemsRightPart
import React from "react";
import EcommerceCustomerJourneyItemsLeftPart from "./EcommerceCustomerJourneyItemsLeftPart";
import EcommerceCustomerJourneyItemsRightPart from "./EcommerceCustomerJourneyItemsRightPart";
function EcommerceCustomerJourneyItems({number, text, bgcolor, leftText}) {
  return (
    <div className="ecommerce-customer-journey-items-box">
  <EcommerceCustomerJourneyItemsLeftPart number={number} text={text} bgcolor={bgcolor} />
  <EcommerceCustomerJourneyItemsRightPart leftText={leftText}/>
    </div>
  );
}
export default EcommerceCustomerJourneyItems;
