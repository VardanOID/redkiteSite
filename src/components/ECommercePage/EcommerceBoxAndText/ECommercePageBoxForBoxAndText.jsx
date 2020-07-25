import React from "react";
import ECommercePageBoxWithButtons from "./ECommercePageBoxWithButtons";
import ECommercePageRightText from "./ECommercePageRightText";
import Styles from "./RightTextAndLeftBoxWithButtons.module.scss";
function ECommercePageBoxForBoxAndText({ firstSectionText }) {
  return (
    <div className={Styles["ecommerce-page-box-for-box-and-text"]}>
      <ECommercePageBoxWithButtons firstSectionText={firstSectionText} />
      <ECommercePageRightText firstSectionText={firstSectionText} />
    </div>
  );
}
export default ECommercePageBoxForBoxAndText;
