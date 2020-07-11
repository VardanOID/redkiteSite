import React from "react";
import IconCall from "../../../img/IconCall.svg";
import IconMail from "../../../img/IconMail.svg";
import IconPlace from "../../../img/IconPlace.svg";

import GetInTouchSectionBoxItems from "./GetInTouchSectionBoxItems";
function GetInTouchSectionBox({ footer }) {
  return (
    <div className="get-in-touch-section-box-box">
      {/* {!!footer &&
        footer.map((data) => {
          return <GetInTouchSectionBoxItems {...data} />;
        })} */}
      <GetInTouchSectionBoxItems
        icon={IconCall}
        iconAlt="Call"
        getInTouchBG="getintouchBG1"
        heading={!!footer && footer[0].heading}
        text={!!footer && footer[0].text}
        info={!!footer && footer[0].firstinfo}
        info1={!!footer && footer[0].secondinfo}
        buttonValue="MAKE A CALL"
      />
      <GetInTouchSectionBoxItems
        icon={IconMail}
        iconAlt="Mail"
        getInTouchBG="getintouchBG2"
        heading={!!footer && footer[1].heading}
        text={!!footer && footer[1].text}
        info={!!footer && footer[1].firstinfo}
        // info2="like a trick"
        buttonValue="WRITE A LETTER"
      />
      <GetInTouchSectionBoxItems
        icon={IconPlace}
        iconAlt="Place"
        getInTouchBG="getintouchBG3"
        heading={!!footer && footer[2].heading}
        text={!!footer && footer[2].text}
        info={!!footer && footer[2].firstinfo}
        info2="like a trick"
        buttonValue="CREATE A ROUTE"
      />
    </div>
  );
}
export default GetInTouchSectionBox;
