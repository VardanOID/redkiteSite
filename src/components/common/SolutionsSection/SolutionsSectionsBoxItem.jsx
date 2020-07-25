import React from "react";
import _ from "lodash";
function SolutionsSectionBoxItem({
  onLeave,
  solutionIMG,
  onHover,
  index = 0,
  focused = 0,
  heading,
}) {
  let callOnHover = (state) => {
    if (_.isFunction(onHover)) {
      onHover(state);
    }
  };
  return (
    <div
      className="solutions-section-item-box child"
      onMouseEnter={() => {
        callOnHover(true);
      }}
      onMouseLeave={() => {
        callOnHover(false);
        onLeave();
      }}
      style={{
        opacity: focused && focused !== index ? 0 : 1,
      }}
    >
      <div className="solutions-section-item-title"> {heading} </div>
      <img src={solutionIMG} alt="" className="solutions-section-item-img" />
    </div>
  );
}
export default SolutionsSectionBoxItem;
