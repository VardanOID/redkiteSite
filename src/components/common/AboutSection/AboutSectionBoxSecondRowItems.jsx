import React from "react";
import Styles from "./AboutSection.module.scss";
function AboutSectionBoxSecondRowItems({ image, imgAlt, paragraph, heading }) {
  return (
    <div className={Styles["about-section-box-second-row-item-box"]}>
      <div className={Styles["about-section-second-row-items-box"]}>
        <div>
          <img
            src={image}
            alt={imgAlt}
            className={Styles["about-section-second-row-pics"]}
          />
        </div>
        <div
          className={
            Styles["about-section-text-row-items-title-and-paragraph-box"]
          }
        >
          <div className={Styles["about-section-text-row-items-title"]}>
            {heading}
          </div>

          <div
            className={Styles["about-section-text-row-items-text"]}
            dangerouslySetInnerHTML={{ __html: paragraph }}
          />
        </div>
      </div>
    </div>
  );
}
export default AboutSectionBoxSecondRowItems;
