import React from "react";
import AboutSectionFirstRowItems from "./AboutSectionBoxFirstRowItems";
import Styles from "./AboutSection.module.scss";
function AboutSectionBoxFirstRow({ aboutBig }) {
  return (
    <div className={Styles["about-section-first-row-box"]}>
      {!!aboutBig &&
        aboutBig.map((data) => {
          return <AboutSectionFirstRowItems {...data} picStyle="pic2" />;
        })}
    </div>
  );
}
export default AboutSectionBoxFirstRow;
