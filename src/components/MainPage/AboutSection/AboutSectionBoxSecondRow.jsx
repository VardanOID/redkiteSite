import React from "react";
import AboutSectionBoxSecondRowItems from "./AboutSectionBoxSecondRowItems";
import Cycle from "../../../img/IconCycle.svg";
import Personal from "../../../img/IconPersonal.svg";
import Quality from "../../../img/IconQuality.svg";
import Growth from "../../../img/IconGrowth.svg";

function AboutSectionBoxSecondRow() {
  return (
    <div className="about-section-box-second-row-box">
      <AboutSectionBoxSecondRowItems
        aboutImg={Cycle}
        imgAlt="Cycle"
        aboutText="Text is needed. Text is needed. Text is needed.Text is needed.Text is needed. Text is needed. Text is needed. Text is needed."
        aboutTitle="One-Stop Vendor"
      />
      <AboutSectionBoxSecondRowItems
        aboutImg={Personal}
        imgAlt="Persona"
        aboutText="Whether it’s a new modern application or complex legacy systems, we will find the best, suitable to you, way to overcome the challenges."
        aboutTitle="Personal Approach"
      />
      <AboutSectionBoxSecondRowItems
        aboutImg={Quality}
        imgAlt="Quality"
        aboutText="Technology is the driving force Behind Redkite. We leave no stone unturned in the ever evolving technological landscape."
        aboutTitle="Exceptional Quality"
      />
      <AboutSectionBoxSecondRowItems
        aboutImg={Growth}
        imgAlt="Cycle"
        aboutText="We pride ourselves in investing considerable part of our revenue into education and training of our employees. We grow professionally each day and bring success to our customers."
        aboutTitle="Nonstop growth"
      />
    </div>
  );
}
export default AboutSectionBoxSecondRow;
