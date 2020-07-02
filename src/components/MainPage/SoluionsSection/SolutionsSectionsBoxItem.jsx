import React from "react";
import _ from "lodash";
function SolutionsSectionBoxItem({
  onLeave,
  solutionIMG,
  onHover,
  index = 0,
  focused = 0,
}) {
  let callOnHover = (state) => {
    if (_.isFunction(onHover)) {
      onHover(state);
    }
  };
  return (
    <div className="solutions-section-item-box">
      <img
       style={{
          opacity: focused && focused !== index ? 0 : 1
        }}
        src={solutionIMG}
        alt=""
        onMouseEnter={() => {
          callOnHover(true);
        }}
        onMouseLeave={() => {
          callOnHover(false);
          onLeave();
        }}
        className="solutions-section-item-img"
      />
    </div>
  );
}
export default SolutionsSectionBoxItem;
