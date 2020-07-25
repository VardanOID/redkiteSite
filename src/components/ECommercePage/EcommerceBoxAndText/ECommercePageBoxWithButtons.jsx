import React from "react";
import Styles from "./RightTextAndLeftBoxWithButtons.module.scss";
function ECommercePageBoxWithButtons({ firstSectionText }) {
  return (
    <div className={Styles["ecommerce-page-box-with-buttons-box"]}>
      <div className={Styles["ecommerce-page-box-with-buttons-subbox"]}>
        <div
          className={Styles["ecommerce-page-box-text"]}
          dangerouslySetInnerHTML={{
            __html: !!firstSectionText && firstSectionText[1].text,
          }}
        />

        <div className={Styles["ecommerce-page-buttons-box"]}>
          <button className={Styles["ecommerce-page-buttons"]}>
            WHY REDKITE
          </button>
          <button className={Styles["ecommerce-page-buttons"]}>
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
}
export default ECommercePageBoxWithButtons;
