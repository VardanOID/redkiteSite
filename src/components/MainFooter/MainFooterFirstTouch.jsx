import React from "react";
import styles from "./MainFooter.module.scss";
function MainFooterFirstTouch({ getInTouchText }) {
  return (
    <div className={styles["main-footer-first-touch-box"]}>
      <div className={styles["main-footer-first-text"]}>Get in Touch:</div>
      <div
        className={styles.mainFooterFontSize}
        dangerouslySetInnerHTML={{
          __html: getInTouchText,
        }}
      />
    </div>
  );
}
export default MainFooterFirstTouch;
