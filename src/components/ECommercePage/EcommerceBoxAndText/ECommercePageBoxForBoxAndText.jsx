import React from "react";
import ECommercePageBoxWithButtons from "./ECommercePageBoxWithButtons";
import ECommercePageRightText from "./ECommercePageRightText";
function ECommercePageBoxForBoxAndText({ firstSectionText }) {
  return (
    <div className="ecommerce-page-box-for-box-and-text">
      <ECommercePageBoxWithButtons firstSectionText={firstSectionText} />
      <ECommercePageRightText firstSectionText={firstSectionText} />
    </div>
  );
}
export default ECommercePageBoxForBoxAndText;
