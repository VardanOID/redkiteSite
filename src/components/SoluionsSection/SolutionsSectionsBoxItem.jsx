import React from "react";

function SolutionsSectionBoxItem({ title, text, color, solutionIMG }) {
  return (
    <div className="solutions-section-item-box">
      {/* <div className="solutions-section-item-title">
    {title}
</div> */}
      {/* <div className={`solutions-section-item-text solutions-section-item ${color}`}> */}
      {/* {text}
<div className="solutions-section-item-read-more">Read More</div>
</div> */}
      <img src={solutionIMG} alt="" className="solutions-section-item-img" />
    </div>
  );
}
export default SolutionsSectionBoxItem;
