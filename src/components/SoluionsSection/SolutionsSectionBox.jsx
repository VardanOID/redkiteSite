import React from "react";
import SolutionsSectionBoxItem from "./SolutionsSectionsBoxItem";
import Ecommerce from "../../img/a.png";
import Middleware from "../../img/b.png";
import SalesMarketing from "../../img/c.png";
import Analytics from "../../img/d.png";
function SolutionsSectionBox() {
  return (
    <div className="solutions-section-box-box">
      <SolutionsSectionBoxItem
        // title="E-Commerce"
        // text="Build your e-commerce business in confidence and concentrate on your core competencies while Redkite builds all the necessary IT infrastructure."
        // color="color1"
        solutionIMG={Ecommerce}
      />
      <SolutionsSectionBoxItem
        // title="Sales And Marketing Solutions"
        // text="Decided to take a systemic approach to handling customers? We have an answer for you. Redkite has experience and successful track record in adapting CRM solutions turn sales organizations into industry leaders and high-performing teams."
        // color="color2"
        solutionIMG={SalesMarketing}
      />
      <SolutionsSectionBoxItem
        // title="Analtics As A Service"
        // text="Make important business decisions, identify opportunities, avoid risks and drive your company to success, all this based on the data presented to you in a form of Analytics as a Service."
        // color="color3"
        solutionIMG={Analytics}
      />
      <SolutionsSectionBoxItem
        // title="Middleware Development And Support"
        // text="Warehouse, e-commerce solution, ERP, CRM, or be that any other component, Redkite can develop the necessary middleware to glue all the components together in one smoothly operating mechanism."
        // color="color4"
        solutionIMG={Middleware}
      />
    </div>
  );
}
export default SolutionsSectionBox;
