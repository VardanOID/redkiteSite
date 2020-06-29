import React from "react";
import Partner1 from "../../../img/Partner_logo_1.png";
import Partner2 from "../../../img/Partner_logo_2.png";

function FirstSectionPartners() {
  return (
    <div className="first-section-partners-box">
  <div className="first-section-partners-text"> We Partner with:</div>
  <img src= {Partner1}  alt="Partner 1"/>
  <img src= {Partner2}  alt="Partner 2"/>
    </div>
  );
}
export default  FirstSectionPartners;
