import React from "react";
import Styles from "./Cover.module.scss";
function ECommercePageCoverBoxText({ firstSectionHeading, firstSectionText }) {
  return (
    <div className={Styles["ecommerce-page-cover-box-text-box"]}>
      {!!firstSectionHeading && (
        <div className={Styles["ecommerce-page-cover-box-text-title"]}>
          {firstSectionHeading}
        </div>
      )}
      {!!firstSectionText && firstSectionText[0].text && (
        <div
          className={Styles["ecommerce-page-cover-box-text-subtitle"]}
          dangerouslySetInnerHTML={{
            __html: firstSectionText[0].text,
          }}
        />
      )}
    </div>
  );
}
export default ECommercePageCoverBoxText;
