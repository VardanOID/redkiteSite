import React from "react";
import Styles from "../FirstSection/FirstSection.module.scss";
import IconPlay from "../../../img/Icon_Play.svg";

function FirstSectionTextInfo({ headline }) {
  return (
    <div className={Styles["first-section-text-info-box"]}>
      <div>
        <div className={Styles["first-section-text"]}>{headline}</div>
        <input
          type="button"
          value="start now"
          className={Styles["first-section-button"]}
        />
      </div>
      <div>
        <img src={IconPlay} alt="play" />
      </div>
    </div>
  );
}
export default FirstSectionTextInfo;
