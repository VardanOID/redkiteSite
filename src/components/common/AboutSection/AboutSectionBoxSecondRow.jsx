import React from "react";
import AboutSectionBoxSecondRowItems from "./AboutSectionBoxSecondRowItems";
import Styles from "./AboutSection.module.scss";

function AboutSectionBoxSecondRow({ aboutSmall }) {
  return (
    <div className={Styles["about-section-box-second-row-box"]}>
      {!!aboutSmall &&
        aboutSmall.map((data) => {
          return <AboutSectionBoxSecondRowItems key={data.heading} {...data} />;
        })}
    </div>
  );
}
export default AboutSectionBoxSecondRow;
