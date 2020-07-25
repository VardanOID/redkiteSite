import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Styles from "./WorkSection.module.scss";
function WorksSection(props) {
  return (
    <div className="">
      <img src={props.image} alt="" className={Styles["work-img"]} />
      <p className={Styles["work-img-title"]}>{props.heading}</p>
    </div>
  );
}
export default WorksSection;
