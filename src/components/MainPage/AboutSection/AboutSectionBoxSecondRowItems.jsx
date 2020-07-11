import React from "react";

function AboutSectionBoxSecondRowItems({
  image,
  imgAlt,
  picStyle,
  paragraph,
  heading,
}) {
  return (
    <div className="about-section-box-second-row-item-box">
      <div className="about-section-second-row-items-box">
        <img
          src={image}
          alt={imgAlt}
          className={`about-section-second-row-pics ${picStyle}`}
        />
        <div className="about-section-text-row-items-title">{heading}</div>
        <div
          className="about-section-text-row-items-text"
          dangerouslySetInnerHTML={{ __html: paragraph }}
        />
      </div>
    </div>
  );
}
export default AboutSectionBoxSecondRowItems;
