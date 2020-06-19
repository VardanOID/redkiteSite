import React from "react";

import IconPlay from "../../img/Icon_Play.svg";

function FirstSectionTextInfo() {
  return (
    <div className="first-section-text-info-box">
      <div>
        <div className="first-section-text">End-To-End Solutions From Concept to Strategic Planning</div>
        <button  className="first-section-button"><span className="first-section-button-text">START NOW</span></button>
      </div>
      <div>
        <img src={IconPlay} alt="play" />
      </div>
      
    </div>
  );
}
export default FirstSectionTextInfo;
