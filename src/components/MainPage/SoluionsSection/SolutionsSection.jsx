import React, { useState } from "react";
import SolutionSectionBox from "../SoluionsSection/SolutionsSectionBox";
import SolutionsSectionAllServices from "../SoluionsSection/SolutionsSectionAllServices";
import Esd from "../../../img/Bg_image.png";
function SolutionsSection({ solutionstext, solutions }) {
  const [bgImage, setbgImage] = useState(Esd);
  const onBGChanged = (menuName) => {
    setbgImage(menuName);
  };

  return (
    <div className="parent">
      <div
        className={`App ${
          bgImage === "default" ? "" : `App${bgImage}`
        } solutions-section-box `}
      >
        <div>
          <div className="solutions-section-title">Solutions</div>
          <div
            className="solutions-section-subtitle"
            dangerouslySetInnerHTML={{ __html: solutionstext }}
          />
        </div>
        <SolutionSectionBox onBGChanged={onBGChanged} solutions={solutions} />
        <SolutionsSectionAllServices />
      </div>
    </div>
  );
}
export default SolutionsSection;
