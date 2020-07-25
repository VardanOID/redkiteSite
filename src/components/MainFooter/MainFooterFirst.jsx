import React from "react";
import MainFooterFirstSubscribe from "./MainFooterFirstSubscribe";
import MainFooterFirstTouch from "./MainFooterFirstTouch";
import MainFooterFirstContact from "./MainFooterFirstContact";
import LogoWhite from "../../img/LogoWhite.svg";
import GoUp from "../../img/GoUp.svg";
import styles from "./MainFooter.module.scss";
function MainFooterFirst({ getInTouchText, socialMedia }) {
  return (
    <div className={styles["main-footer-first-box"]}>
      <div className={styles.forMobileBox}>
        <div>
          <img src={LogoWhite} alt="white Redkite Logo" />
        </div>
        <div>
          <a href="#scrollUp">
            <img src={GoUp} alt="Go up" />{" "}
          </a>
        </div>
      </div>
      <MainFooterFirstSubscribe />
      <MainFooterFirstTouch getInTouchText={getInTouchText} />
      <MainFooterFirstContact socialMedia={socialMedia} />
    </div>
  );
}
export default MainFooterFirst;
