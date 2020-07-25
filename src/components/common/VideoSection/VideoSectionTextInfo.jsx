import React from "react";
import styles from "./VideoSection.module.scss";
import IconPlay from "../../../img/Icon_Play.svg";

function VideoSectionTextInfo({ headline }) {
  return (
    <div className={styles["first-section-text-info-box"]}>
      <div>
        <div className={styles["first-section-text"]}>{headline}</div>
        <div className={styles["first-section-button-box"]}>
          <input
            type="button"
            value="start now"
            className={styles["first-section-button"]}
          />
        </div>
      </div>
      <div className={styles["first-section-play-button-box"]}>
        <img
          src={IconPlay}
          alt="play"
          className={styles["first-section-play-button"]}
        />
      </div>
    </div>
  );
}
export default VideoSectionTextInfo;
