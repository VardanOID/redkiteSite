import React from "react";
import LeftAndRightSectionsSubBoxText from "./LeftAndRightSectionsSubBoxText";
import LeftAndRightSectionsButton from "./LeftAndRightSectionsButton";
import Styles from "./LeftAndRightSections.module.scss";
function LeftAndRightSectionsSubBox({ heading, paragraph, button }) {
  return (
    <div className={Styles["left-right-box"]}>
      <div className={Styles["ecommerce-success-stories-sub-box-box"]}>
        <LeftAndRightSectionsSubBoxText
          heading={heading}
          paragraph={paragraph}
        />
        <LeftAndRightSectionsButton button={button} />
      </div>
    </div>
  );
}
export default LeftAndRightSectionsSubBox;
