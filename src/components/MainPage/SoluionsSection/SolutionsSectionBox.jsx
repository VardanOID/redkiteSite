import React from "react";
import SolutionsSectionBoxItem from "./SolutionsSectionsBoxItem";
import Ecommerce from "../../../img/a.png";
import Middleware from "../../../img/b.png";
import SalesMarketing from "../../../img/c.png";
import Analytics from "../../../img/d.png";
function SolutionsSectionBox() {
  return (
    <div className="solutions-section-box-box">
      <SolutionsSectionBoxItem solutionIMG={Ecommerce} />
      <SolutionsSectionBoxItem solutionIMG={SalesMarketing} />
      <SolutionsSectionBoxItem solutionIMG={Analytics} />
      <SolutionsSectionBoxItem solutionIMG={Middleware} />
    </div>
  );
}
export default SolutionsSectionBox;
