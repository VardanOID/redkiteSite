import React from "react";
import AboutSectionBox from "./AboutSectionBox";
import Styles from "./AboutSection.module.scss";
function AboutSection({ aboutBig, aboutSmall }) {
  return (
    <div className={Styles["about-section-box"]}>
      <div className={Styles["about-section-title"]}>About Us</div>
      <AboutSectionBox aboutBig={aboutBig} aboutSmall={aboutSmall} />
    </div>
  );
}
export default AboutSection;
