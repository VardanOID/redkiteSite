import React from "react";
import EcommerceCustomerJourneyItems from "./EcommerceCustomerJourneyItems";
function EcommerceCustomerJourneyItemsBox({ customerJourney }) {
  return (
    <div className="ecommerce-customer-journey-items-box-box">
      {!!customerJourney &&
        customerJourney.map((data) => {
          return <EcommerceCustomerJourneyItems {...data} />;
        })}
      {/* <EcommerceCustomerJourneyItems
        number="1"
        text="Lorem ipsum dolor sit amet consectetur adipiscing elit"
        bgcolor="bg1"
        leftText="“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod mpor incididunt ut labore et dolore magna aliqua. Ut enim ad minim quis nostrud exercitation ullamco laboris nisi ut aliquip."
      />
      <EcommerceCustomerJourneyItems
        number="2"
        text="Lorem ipsum dolor sit amet consectetur adipiscing elit"
        bgcolor="bg2"
        leftText="“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod mpor incididunt ut labore et dolore magna aliqua. Ut enim ad minim quis nostrud exercitation ullamco laboris nisi ut aliquip."
      />
      <EcommerceCustomerJourneyItems
        number="3"
        text="Lorem ipsum dolor sit amet consectetur adipiscing elit"
        bgcolor="bg3"
        leftText="“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod mpor incididunt ut labore et dolore magna aliqua. Ut enim ad minim quis nostrud exercitation ullamco laboris nisi ut aliquip."
      /> */}
    </div>
  );
}
export default EcommerceCustomerJourneyItemsBox;
