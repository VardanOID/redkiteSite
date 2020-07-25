import React from "react";
import Styles from "./Cover.module.scss";
function CoverBoxText({ titleSectionHeading, titleSectionParagraph }) {
  return (
    <div className={Styles["ecommerce-page-cover-box-text-box"]}>
      {!!titleSectionHeading && (
        <div className={Styles["ecommerce-page-cover-box-text-title"]}>
          {titleSectionHeading}
        </div>
      )}
      {/* {!!firstSectionText && firstSectionText[0].text && (
        <div
          className={Styles["ecommerce-page-cover-box-text-subtitle"]}
          dangerouslySetInnerHTML={{
            __html: firstSectionText[0].text,
          }}
        />
      )} */}

      {!!titleSectionParagraph && (
        <div
          className={Styles["ecommerce-page-cover-box-text-subtitle"]}
          dangerouslySetInnerHTML={{
            __html: titleSectionParagraph,
          }}
        />
      )}
    </div>
  );
}
export default CoverBoxText;
