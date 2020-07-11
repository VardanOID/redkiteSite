import React from "react";
import GetInTouchSectionBox from "./GetInTouchSectionBox";
function GetInTouchSection({ footer }) {
  return (
    <div className="get-in-touch-section-box">
      <div className="get-in-touch-section-title">Get In Touch</div>
      <GetInTouchSectionBox footer={footer} />
    </div>
  );
}
export default GetInTouchSection;
