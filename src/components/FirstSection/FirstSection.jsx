import React from "react";
import FirstSectionTextInfo from "./FirstSectionTextInfo";
import FirstSectionPartners from "./FirstSectionPartners";
import BgVideo_Pic from "../../img/BgVideo_Pic.png";
import "../../styles/_index.scss";


function FirstSection() {
  

  return (
    <div className="first-section">
      <div className="bg-gradient"></div>
      <img src={BgVideo_Pic} alt="BgVideo_Pic" className="bg-video" />
      <FirstSectionTextInfo />
      <FirstSectionPartners />
    </div>
  );
}
export default FirstSection;
