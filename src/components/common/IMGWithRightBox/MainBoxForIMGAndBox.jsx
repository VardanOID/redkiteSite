import React from "react";
import IMGWithRightBox from "./IMGWithRightBox";
import FeaturesList from "../FeaturesList/FeaturesList";
// import Styles from "./IMGWithRightBox.module.scss";
function MainBoxForIMGAndBox({
  mainContent,
  contentSectionHeading,
  contentSectionData,
}) {
  return (
    <div>
      {!!mainContent &&
        mainContent.map((data) => {
          return <IMGWithRightBox key={data.heading} {...data} />;
        })}

      <FeaturesList
        contentSectionHeading={contentSectionHeading}
        contentSectionData={contentSectionData}
      />
    </div>
  );
}
export default MainBoxForIMGAndBox;
