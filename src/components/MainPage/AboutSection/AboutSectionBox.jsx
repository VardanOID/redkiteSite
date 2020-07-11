import React from "react";
import AboutSectionBoxFirstRow from "./AboutSectionBoxFirstRow";
import AboutSectionBoxSecondRow from "./AboutSectionBoxSecondRow";

function AboutSectionBox({ aboutBig, aboutSmall }) {
  return (
    <div className="about-section-box-box">
      <AboutSectionBoxFirstRow aboutBig={aboutBig} />

      <AboutSectionBoxSecondRow aboutSmall={aboutSmall} />
    </div>
  );
}
export default AboutSectionBox;
