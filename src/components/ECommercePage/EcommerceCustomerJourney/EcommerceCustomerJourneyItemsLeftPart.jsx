import React from "react";

function EcommerceCustomerJourneyItemsLeftPart({number, text, bgcolor}) {
  return (
    <div className={`ecommerce-customer-journey-items-left ${bgcolor} ecommerce-customer-journey-items-left-part-box`}>
 <div className="ecommerce-customer-journey-items-left-part-number">{number}</div>
 <div className="ecommerce-customer-journey-items-left-part-text">{text}</div>
    </div>
  );
}
export default EcommerceCustomerJourneyItemsLeftPart;
