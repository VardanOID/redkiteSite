import React from "react";
import EcommerceCustomerJourneyItems from "./EcommerceCustomerJourneyItems";
import Styles from "./GradientNumbersList.module.scss";
function EcommerceCustomerJourneyItemsBox({ customerJourney }) {
  return (
    <div className={Styles["ecommerce-customer-journey-items-box-box"]}>
      {!!customerJourney &&
        customerJourney.map((data) => {
          return <EcommerceCustomerJourneyItems {...data} />;
        })}
    </div>
  );
}
export default EcommerceCustomerJourneyItemsBox;
