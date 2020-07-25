import React from "react";
import Styles from "./GradientNumbersList.module.scss";
function GradientNumberListLeftPart({
  number,
  heading,
  firstColor,
  secondColor,
}) {
  // `ecommerce-customer-journey-items-left ${bgcolor}
  return (
    <div
      className={Styles["ecommerce-customer-journey-items-left-part-box"]}
      style={{
        backgroundImage: `linear-gradient( 180deg, ${firstColor},    ${secondColor} )`,
      }}
    >
      <div
        className={Styles["ecommerce-customer-journey-items-left-part-number"]}
      >
        {number}
      </div>
      <div
        className={Styles["ecommerce-customer-journey-items-left-part-text"]}
      >
        {heading}
      </div>
    </div>
  );
}
export default GradientNumberListLeftPart;
