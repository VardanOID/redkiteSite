import React from "react";
import Styles from "./AboutSection.module.scss";

function AboutSectionFirstRowItems({ image, imgAlt, text, picStyle }) {
  return (
    <div className={Styles["about-section-first-row-items-box"]}>
      <div className={Styles["about-section-first-row-items-box-box"]}>
        <img
          src={image}
          alt={imgAlt}
          className={Styles["about-section-pics"]}
        />
      </div>
      <div className={Styles["about-section-first-row-items-text-box"]}>
        <div
          className={Styles["about-section-first-row-items-text"]}
          dangerouslySetInnerHTML={{ __html: text }}
        />
      </div>
    </div>
  );
}
export default AboutSectionFirstRowItems;
