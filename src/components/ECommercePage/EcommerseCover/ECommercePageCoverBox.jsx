import React from "react";
import ECommerceIMG from "../../../img/Ecommerce_img.png";
import ECommercePageCoverBoxText from "./ECommercePageCoverBoxText";
function ECommercePageCoverBox({ firstSectionHeading, firstSectionText }) {
  return (
    <div>
      <img src={ECommerceIMG} alt="" className="ecommerce-page-cover-box" />
      <ECommercePageCoverBoxText
        firstSectionHeading={firstSectionHeading}
        firstSectionText={firstSectionText}
      />
    </div>
  );
}
export default ECommercePageCoverBox;
