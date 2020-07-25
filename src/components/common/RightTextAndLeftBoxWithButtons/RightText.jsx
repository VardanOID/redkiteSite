import React from "react";
import Styles from "./RightTextAndLeftBoxWithButtons.module.scss";
function RightText({ smallText }) {
  return (
    <div
      className={Styles["ecommerce-page-right-text-box"]}
      dangerouslySetInnerHTML={{
        __html: smallText,
      }}
    />
  );
}
export default RightText;
