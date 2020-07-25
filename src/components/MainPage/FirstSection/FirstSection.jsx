import React from "react";
import FirstSectionTextInfo from "./FirstSectionTextInfo";
import FirstSectionPartners from "./FirstSectionPartners";
import BgVideo_Pic from "../../../img/BgVideo_Pic.png";
import Styles from "../FirstSection/FirstSection.module.scss";

function FirstSection({ headline }) {
  return (
    <div className={Styles["first-section"]}>
      <div className={Styles["bg-gradient"]}></div>
      <img src={BgVideo_Pic} alt="BgVideo_Pic" className={Styles["bg-video"]} />
      <FirstSectionTextInfo headline={headline} />
      <FirstSectionPartners />
    </div>
  );
}
export default FirstSection;
