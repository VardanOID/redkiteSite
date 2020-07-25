import React from "react";
import LeftAndRightSectionsSubBox from "./LeftAndRightSectionsSubBox";
import Styles from "./LeftAndRightSections.module.scss";
function LeftAndRightSectionsBox({ image, paragraph, heading, button }) {
  return (
    <div className={Styles["ecommerce-success-stories-box-box"]}>
      <img
        src={image}
        alt=""
        className={Styles["ecommerce-success-stories-box-img"]}
      />
      <div className={Styles["ecommerce-success-stories-box-info-box"]}>
        <LeftAndRightSectionsSubBox
          paragraph={paragraph}
          heading={heading}
          button={button}
        />
      </div>
    </div>
  );
}
export default LeftAndRightSectionsBox;
