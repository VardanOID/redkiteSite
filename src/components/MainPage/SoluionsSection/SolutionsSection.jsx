import React, {useState} from "react";
import SolutionSectionBox from "../SoluionsSection/SolutionsSectionBox";
import SolutionsSectionAllServices from "../SoluionsSection/SolutionsSectionAllServices";
import Esd from "../../../img/Bg_image.png";
function SolutionsSection() {
  const [bgImage, setbgImage] = useState(Esd);
  const onBGChanged = menuName => {
    setbgImage(menuName);
  };

  return (
    <div className="parent">
    <div  className={`App ${bgImage === "default" ? "" : `App${bgImage}`} solutions-section-box child` }>
      <div>

        <div className="solutions-section-title">Solutions</div>
        <div className="solutions-section-subtitle">
          Be that flexible and high-performance web solutions, powerful B2C or
          B2B e-commerce solutions, heavy data-hungry analytics or enterprise
          resource planning applications our expertise.
        </div>
      </div>
      <SolutionSectionBox onBGChanged={onBGChanged}  />
      <SolutionsSectionAllServices />
    </div>
    </div>
  );
}
export default SolutionsSection;
