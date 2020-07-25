import React from "react";
// import IMG from "../../../img/Ecommerce_img.png";
import CoverBoxText from "./CoverBoxText";
import BoxAndText from "../RightTextAndLeftBoxWithButtons/BoxAndText";
import styles from "./Cover.module.scss";
function CoverBox({
  titleSectionHeading,
  titleSectionParagraph,
  titleSectionImage,
  titleSectionText,
}) {
  return (
    <div className={styles.coverBox}>
      <img
        src={titleSectionImage}
        alt=""
        className={styles["ecommerce-page-cover-box"]}
      />
      <div className={styles.coverBoxForText}>
        <CoverBoxText
          titleSectionHeading={titleSectionHeading}
          titleSectionParagraph={titleSectionParagraph}
        />
      </div>
      {!!titleSectionText &&
        titleSectionText.map((data) => {
          return <BoxAndText key={data.firstButtonLink} {...data} />;
        })}
    </div>
  );
}
export default CoverBox;
