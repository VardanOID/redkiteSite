import React from "react";

function SolutionsSectionBoxItem({  solutionIMG }) {
  return (
    <div className="solutions-section-item-box">
   
      <img src={solutionIMG} alt="" className="solutions-section-item-img" />
    </div>
  );
}
export default SolutionsSectionBoxItem;
