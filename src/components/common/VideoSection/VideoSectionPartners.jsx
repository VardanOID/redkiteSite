import React from "react";
import Partner1 from "../../../img/Partner_logo_1.png";
import Partner2 from "../../../img/Partner_logo_2.png";
import Styles from "./VideoSection.module.scss";
function VideoSectionPartners() {
  return (
    <div className={Styles["first-section-partners-box"]}>
      <div className={Styles["first-section-partners-text"]}>
        We Partner with:
      </div>
      <div className={Styles["first-section-partners"]}>
        <img
          src={Partner1}
          alt="Partner 1"
          className={Styles["first-section-partners-img"]}
        />
        <img
          src={Partner2}
          alt="Partner 2"
          className={Styles["first-section-partners-img"]}
        />
      </div>
    </div>
  );
}
export default VideoSectionPartners;
