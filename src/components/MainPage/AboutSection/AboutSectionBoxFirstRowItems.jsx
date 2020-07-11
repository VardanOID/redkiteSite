import React from "react";
// import Vision from "../../img/OurVision.svg";

function AboutSectionFirstRowItems({ image, imgAlt, text, picStyle }) {
  return (
    <div className="about-section-first-row-items-box">
      <img
        src={image}
        alt={imgAlt}
        className={`about-section-pics ${picStyle}`}
      />
      <div
        className="about-section-first-row-items-text"
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </div>
  );
}
export default AboutSectionFirstRowItems;
