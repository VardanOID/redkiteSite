import React from "react";
import Styles from "./RightTextAndLeftBoxWithButtons.module.scss";
import { Link } from "react-router-dom";
function BoxWithButtons({
  bigText,
  firstButtonText,
  secondButtonText,
  firstButtonLink,
  secondButtonLink,
}) {
  console.log("1", firstButtonLink);
  console.log("2", secondButtonLink);
  return (
    <div className={Styles["ecommerce-page-box-with-buttons-box"]}>
      <div className={Styles["ecommerce-page-box-with-buttons-subbox"]}>
        <div
          className={Styles["ecommerce-page-box-text"]}
          dangerouslySetInnerHTML={{
            __html: bigText,
          }}
        />

        <div className={Styles["ecommerce-page-buttons-box"]}>
          <Link to={firstButtonLink}>
            <button className={Styles["ecommerce-page-buttons"]}>
              {firstButtonText}
            </button>
          </Link>

          <Link to={secondButtonLink}>
            <button className={Styles["ecommerce-page-buttons"]}>
              {secondButtonText}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default BoxWithButtons;
