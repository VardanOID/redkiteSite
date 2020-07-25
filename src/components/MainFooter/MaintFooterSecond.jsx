import React from "react";
import styles from "./MainFooter.module.scss";
const date = new Date();
const year = date.getFullYear();
function MainFooterSecond({ copyright }) {
  return (
    <div className={styles["main-footer-second-box"]}>
      <div className={styles.privacyAndTermsMobileBox}>
        <div className={styles.privacyAndTermsMobile}>Privacy Policy</div>
        <div className={styles.privacyAndTermsMobile}>Terms Of Use</div>
      </div>
      <div className={styles.data}>
        © 2010 - {year} {copyright}
      </div>
      <div className={styles.privacyAndTerms}>Privacy Policy</div>
      <div className={styles.privacyAndTerms}>Terms Of Use</div>
    </div>
  );
}
export default MainFooterSecond;
