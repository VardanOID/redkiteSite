import React from "react";
import SolutionSectionBox from "../SoluionsSection/SolutionsSectionBox";
import SolutionsSectionAllServices from "../SoluionsSection/SolutionsSectionAllServices";
function SolutionsSection() {
  return (
    
    <div className="solutions-section-box">
      <div>

        <div className="solutions-section-title">Solutions</div>
        <div className="solutions-section-subtitle">
          Be that flexible and high-performance web solutions, powerful B2C or
          B2B e-commerce solutions, heavy data-hungry analytics or enterprise
          resource planning applications our expertise.
        </div>
      </div>
      <SolutionSectionBox />
      <SolutionsSectionAllServices />
    </div>
    
  );
}
export default SolutionsSection;
