// EcommerceCustomerJourneyItemsRightPart
import React from "react";
import EcommerceCustomerJourneyItemsLeftPart from "./EcommerceCustomerJourneyItemsLeftPart";
import EcommerceCustomerJourneyItemsRightPart from "./EcommerceCustomerJourneyItemsRightPart";
function EcommerceCustomerJourneyItems({
  number,
  heading,
  bgcolor,
  paragraph,
}) {
  return (
    <div className="ecommerce-customer-journey-items-box">
      <EcommerceCustomerJourneyItemsLeftPart
        number={number}
        heading={heading}
        bgcolor={bgcolor}
      />
      <EcommerceCustomerJourneyItemsRightPart paragraph={paragraph} />
    </div>
  );
}
export default EcommerceCustomerJourneyItems;
