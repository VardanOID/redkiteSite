import React from "react";
import AboutSectionBox from "./AboutSectionBox";

function AboutSection({ aboutBig, aboutSmall }) {
  return (
    <div className="about-section-box">
      <div className="about-section-title">About Us</div>
      <AboutSectionBox aboutBig={aboutBig} aboutSmall={aboutSmall} />
    </div>
  );
}
export default AboutSection;
