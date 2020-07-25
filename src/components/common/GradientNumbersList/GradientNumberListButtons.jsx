import React from "react";
import Styles from "./GradientNumbersList.module.scss";

function GradientNumberListButtons({ roadmapSectionButton }) {
  return (
    <div className={Styles["ecommerce-customer-journey-button-box"]}>
      <input
        type="button"
        value={roadmapSectionButton}
        className={Styles["ecommerce-customer-journey-button-content"]}
      />
    </div>
  );
}
export default GradientNumberListButtons;
