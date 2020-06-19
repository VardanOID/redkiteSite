import React from "react";
// import Vision from "../../img/OurVision.svg";

function AboutSectionFirstRowItems({aboutImg, imgAlt, aboutText, picStyle}) {
  return (
    <div className="about-section-first-row-items-box">
      <img src={aboutImg} alt={imgAlt} className={`about-section-pics ${picStyle}`} />
      <div className="about-section-first-row-items-text">
        {aboutText}
      </div>
    </div>
  );
}
export default AboutSectionFirstRowItems;
