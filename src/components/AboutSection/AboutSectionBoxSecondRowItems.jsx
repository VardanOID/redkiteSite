import React from "react";

function AboutSectionBoxSecondRowItems({
  aboutImg,
  imgAlt,
  picStyle,
  aboutText,
  aboutTitle,
}) {
  return (
    <div className="about-section-box-second-row-item-box">
      <div className="about-section-second-row-items-box">
        <img
          src={aboutImg}
          alt={imgAlt}
          className={`about-section-second-row-pics ${picStyle}`}
        />
        <div className="about-section-text-row-items-title">{aboutTitle}</div>
        <div className="about-section-text-row-items-text">{aboutText}</div>
      </div>
    </div>
  );
}
export default AboutSectionBoxSecondRowItems;
