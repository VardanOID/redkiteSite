import React from "react";
import VideoSectionTextInfo from "./VideoSectionTextInfo";
import VideoSectionPartners from "./VideoSectionPartners";
import BgVideo_Pic from "../../../img/BgVideo_Pic.png";
import Styles from "./VideoSection.module.scss";

function VideoSection({ headline }) {
  return (
    <div className={Styles["first-section"]}>
      <div className={Styles["bg-gradient"]}></div>
      <img src={BgVideo_Pic} alt="BgVideo_Pic" className={Styles["bg-video"]} />
      <VideoSectionTextInfo headline={headline} />
      <VideoSectionPartners />
    </div>
  );
}
export default VideoSection;
