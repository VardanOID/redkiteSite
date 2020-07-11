import React from "react";
import EcommerceWhyRedkiteightRightBox from "./EcommerceWhyRedkiteRightBox";
import EcommerceWhyBg from "../../../img/EcommerceWhyBg.png";
function EcommerceWhyRedkite({
  thirdSectionHeading,
  thirdSectionParagraph,
  thirdSectionButton,
}) {
  return (
    <div className="ecommerce-why-redkite-box">
      <img src={EcommerceWhyBg} alt="" className="ecommerce-why-redkite-img" />
      <div className="ecommerce-why-redkite-right-section">
        <EcommerceWhyRedkiteightRightBox
          thirdSectionHeading={thirdSectionHeading}
          thirdSectionParagraph={thirdSectionParagraph}
          thirdSectionButton={thirdSectionButton}
        />
      </div>
    </div>
  );
}
export default EcommerceWhyRedkite;
