import React from "react";
import IMGBox from "./IMGBox";
import BoxBox from "./BoxBox";
// import FeaturesList from "../FeaturesList/FeaturesList";
import Styles from "./IMGWithRightBox.module.scss";
function IMGWithRightBox({ heading, paragraph, leftImage, rightImage }) {
  return (
    <div className={Styles["ecommerce-second-box-with-IMG-and-box-box"]}>
      <IMGBox leftImage={leftImage} />
      <BoxBox heading={heading} paragraph={paragraph} rightImage={rightImage} />
    </div>
  );
}
export default IMGWithRightBox;
