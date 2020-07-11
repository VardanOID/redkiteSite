import React from "react";
import "bootstrap/dist/css/bootstrap.css";

function WorksSection(props) {
  return (
    <div className="">
      <img src={props.image} alt="" className="work-img" />
      <p className="work-img-title">{props.heading}</p>
    </div>
  );
}
export default WorksSection;
