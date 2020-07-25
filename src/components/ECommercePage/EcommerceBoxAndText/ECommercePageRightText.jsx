import React from "react";
import Styles from "./RightTextAndLeftBoxWithButtons.module.scss";
function ECommercePageRightText({ firstSectionText }) {
  return (
    <div
      className={Styles["ecommerce-page-right-text-box"]}
      dangerouslySetInnerHTML={{
        __html: !!firstSectionText && firstSectionText[2].text,
      }}
    />
  );
}
export default ECommercePageRightText;
