import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import styles from "./WorkSection.module.scss";
function WorksSection({ image, heading }) {
  return (
    <div className="">
      <img src={image} alt="" className={styles["work-img"]} />
      <p className={styles["work-img-title"]}>{heading}</p>
    </div>
  );
}
export default WorksSection;
