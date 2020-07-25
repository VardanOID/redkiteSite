import React from "react";
import AboutSectionBoxFirstRow from "./AboutSectionBoxFirstRow";
import AboutSectionBoxSecondRow from "./AboutSectionBoxSecondRow";
import Styles from "./AboutSection.module.scss";
function AboutSectionBox({ aboutBig, aboutSmall }) {
  return (
    <div className={Styles["about-section-box-box"]}>
      <AboutSectionBoxFirstRow aboutBig={aboutBig} />

      <AboutSectionBoxSecondRow aboutSmall={aboutSmall} />
    </div>
  );
}
export default AboutSectionBox;
