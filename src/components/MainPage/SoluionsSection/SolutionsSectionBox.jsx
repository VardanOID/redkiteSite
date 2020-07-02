import React, {useState} from "react";
import _ from "lodash";

import SolutionsSectionBoxItem from "./SolutionsSectionsBoxItem";
import Ecommerce from "../../../img/a.png";
import Middleware from "../../../img/b.png";
import SalesMarketing from "../../../img/c.png";
import Analytics from "../../../img/d.png";
function SolutionsSectionBox({ onBGChanged }) {
  const [focused, setFocused] = useState(0);

  let callBGChanged = (menuName) => {
    if (_.isFunction(onBGChanged)) {
      onBGChanged(menuName);
    }
  };
  return (
    <div className="solutions-section-box-box">
      <SolutionsSectionBoxItem
        solutionIMG={Ecommerce}
        onHover={(state) => {
          setFocused(1);
          callBGChanged(state === true ? "Ecommerce" : "default");
        }}
        focused={focused}
        index={1}
        onLeave={() => setFocused(0)}
        
      />
      <SolutionsSectionBoxItem
        solutionIMG={SalesMarketing}
        onHover={(state) => {
          setFocused(2);
          callBGChanged(state === true ? "SalesMarketing" : "default");
        }}
        focused={focused}
        index={2}
        onLeave={() => setFocused(0)}
      />
      <SolutionsSectionBoxItem
        solutionIMG={Analytics}
        onHover={(state) => {
          setFocused(3);
          callBGChanged(state === true ? "Analytics" : "default");
        }}
        focused={focused}
        index={3}
        onLeave={() => setFocused(0)}
      />
      <SolutionsSectionBoxItem
        solutionIMG={Middleware}
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
