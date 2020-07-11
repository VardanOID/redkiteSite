import React from "react";

function EcommerceCustomerJourneyItemsLeftPart({ number, heading, bgcolor }) {
  return (
    <div
      className={`ecommerce-customer-journey-items-left ${bgcolor} ecommerce-customer-journey-items-left-part-box ecommerce-customer-journey-items-left-bg`}
    >
      <div className="ecommerce-customer-journey-items-left-part-number">
        {number}
      </div>
      <div className="ecommerce-customer-journey-items-left-part-text">
        {heading}
      </div>
    </div>
  );
}
export default EcommerceCustomerJourneyItemsLeftPart;
