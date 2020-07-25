import React from "react";
import GetInTouchSectionBox from "./GetInTouchSectionBox";
import Styles from "./GetInTouchSection.module.scss";
function GetInTouchSection({ footer }) {
  return (
    <div className={Styles["get-in-touch-section-box"]}>
      <div className={Styles["get-in-touch-section-title"]}>Get In Touch</div>
      <GetInTouchSectionBox footer={footer} />
    </div>
  );
}
export default GetInTouchSection;
