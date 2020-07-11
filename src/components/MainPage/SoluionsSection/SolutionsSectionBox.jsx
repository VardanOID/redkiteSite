import React, { useState } from "react";
import _ from "lodash";

import SolutionsSectionBoxItem from "./SolutionsSectionsBoxItem";
// import Ecommerce from "../../../img/a.png";
// import Middleware from "../../../img/b.png";
// import SalesMarketing from "../../../img/c.png";
// import Analytics from "../../../img/d.png";
function SolutionsSectionBox({ onBGChanged, solutions }) {
  const [focused, setFocused] = useState(0);

  let callBGChanged = (menuName) => {
    if (_.isFunction(onBGChanged)) {
      onBGChanged(menuName);
    }
  };
  return (
    <div className="solutions-section-box-box ">
      <SolutionsSectionBoxItem
        heading={!!solutions && solutions[0].heading}
        solutionIMG={!!solutions && solutions[0].image}
        onHover={(state) => {
          setFocused(1);
          callBGChanged(state === true ? "Ecommerce" : "default");
        }}
        focused={focused}
        index={1}
        onLeave={() => setFocused(0)}
      />
      <SolutionsSectionBoxItem
        heading={!!solutions && solutions[1].heading}
        solutionIMG={!!solutions && solutions[1].image}
        onHover={(state) => {
          setFocused(2);
          callBGChanged(state === true ? "SalesMarketing" : "default");
        }}
        focused={focused}
        index={2}
        onLeave={() => setFocused(0)}
      />
      <SolutionsSectionBoxItem
        heading={!!solutions && solutions[2].heading}
        solutionIMG={!!solutions && solutions[2].image}
        onHover={(state) => {
          setFocused(3);
          callBGChanged(state === true ? "Analytics" : "default");
        }}
        focused={focused}
        index={3}
        onLeave={() => setFocused(0)}
      />
      <SolutionsSectionBoxItem
        heading={!!solutions && solutions[3].heading}
        solutionIMG={!!solutions && solutions[3].image}
        onHover={(state) => {
          setFocused(4);
          callBGChanged(state === true ? "Middleware" : "default");
        }}
        focused={focused}
        index={4}
        onLeave={() => setFocused(0)}
      />
    </div>
  );
}
export default SolutionsSectionBox;
