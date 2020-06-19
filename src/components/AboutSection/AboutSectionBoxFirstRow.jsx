import React from "react";
import AboutSectionFirstRowItems from "./AboutSectionBoxFirstRowItems";
import Vision from "../../img/OurVision.svg";
import Team from "../../img/TheTeam.svg";

function AboutSectionBoxFirstRow() {
  return (
    <div className="about-section-first-row-box">
      <AboutSectionFirstRowItems
        aboutImg={Vision}
        imgAlt="Vision"
        aboutText="Redkite prides itself on creative and user friendly solutions that answer customer needs and add business value. Our mission is to continue adding value to our customers answering their business needs, building cutting edge technological software that wins markets and helps customers."
        picStyle="pic1"

      />
      <AboutSectionFirstRowItems
        aboutImg={Team}
        imgAlt="Team"
        aboutText="We are a team of enthusiasts, strategists, architects and technologists. We team up with you to achieve together your business goals by developing and supporting unique technological solutions. Redkite team is recognized for their deep domain knowledge, creativity and top notch technical expertise."
        picStyle="pic2"
      />
    </div>
  );
}
export default AboutSectionBoxFirstRow;
