import React from "react";
import Styles from "./GetInTouchSection.module.scss";
import GetInTouchSectionBoxItems from "./GetInTouchSectionBoxItems";
function GetInTouchSectionBox({ footer }) {
  return (
    <div className={Styles["get-in-touch-section-box-box"]}>
      <GetInTouchSectionBoxItems
        icon={!!footer && footer[0].image}
        iconAlt="Call"
        getInTouchBG="getintouchBG1"
        heading={!!footer && footer[0].heading}
        text={!!footer && footer[0].text}
        info={!!footer && footer[0].firstinfo}
        info1={!!footer && footer[0].secondinfo}
        buttonValue={!!footer && footer[0].button}
      />
      <GetInTouchSectionBoxItems
        icon={!!footer && footer[1].image}
        iconAlt="Mail"
        getInTouchBG="getintouchBG2"
        heading={!!footer && footer[1].heading}
        text={!!footer && footer[1].text}
        info={!!footer && footer[1].firstinfo}
        // info2="like a trick"
        buttonValue={!!footer && footer[1].button}
      />
      <GetInTouchSectionBoxItems
        icon={!!footer && footer[2].image}
        iconAlt="Place"
        getInTouchBG="getintouchBG3"
        heading={!!footer && footer[2].heading}
        text={!!footer && footer[2].text}
        info={!!footer && footer[2].firstinfo}
        info2="like a trick"
        buttonValue={!!footer && footer[2].button}
      />
    </div>
  );
}
export default GetInTouchSectionBox;
