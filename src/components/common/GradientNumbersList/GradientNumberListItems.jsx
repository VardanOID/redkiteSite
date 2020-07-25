// EcommerceCustomerJourneyItemsRightPart
import React from "react";
import GradientNumberListLeftPart from "./GradientNumberListLeftPart";
import GradientNumberListRightPart from "./GradientNumberListRightPart";
import Styles from "./GradientNumbersList.module.scss";
function GradientNumberListItems({
  number,
  heading,
  firstColor,
  secondColor,
  paragraph,
}) {
  return (
    <div className={Styles["ecommerce-customer-journey-items-box"]}>
      <GradientNumberListLeftPart
        number={number}
        heading={heading}
        firstColor={firstColor}
        secondColor={secondColor}
      />
      <GradientNumberListRightPart paragraph={paragraph} />
    </div>
  );
}
export default GradientNumberListItems;
