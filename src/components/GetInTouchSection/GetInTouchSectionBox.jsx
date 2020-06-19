import React from "react";
import IconCall from "../../img/IconCall.svg";
import IconMail from "../../img/IconMail.svg";
import IconPlace from "../../img/IconPlace.svg";

import GetInTouchSectionBoxItems from "./GetInTouchSectionBoxItems";
function GetInTouchSectionBox() {
  return (
    <div className="get-in-touch-section-box-box">
      <GetInTouchSectionBoxItems
        icon={IconCall}
        iconAlt="Call"
        getInTouchBG="getintouchBG1"
        title="Call Us"
        text="Lorem ipsum dolor sit amet, consectetur adipi, sed do eiusmod tempor incididunt ut labore e."
        info="+374 77 071 555"
        info1="+374 12 991 555"
        buttonValue="MAKE A CALL"
      />
      <GetInTouchSectionBoxItems
        icon={IconMail}
        iconAlt="Mail"
        getInTouchBG="getintouchBG2"
        title="E-Mail Us"
        text="Lorem ipsum dolor sit amet, consectetur adipi, sed do eiusmod tempor incididunt ut labore e."
        info="info@redkite.io"
        info2="like a trick"
        buttonValue="WRITE A LETTER"
      />
      <GetInTouchSectionBoxItems
        icon={IconPlace}
        iconAlt="Place"
        getInTouchBG="getintouchBG3"
        title="Visit Us"
        text="Lorem ipsum dolor sit amet, consectetur adipi, sed do eiusmod tempor incididunt ut labore e."
        info="Nikoghayos Adonc 2/1 , 0014, Yerevan, Armenia."
        info2="like a trick"
        buttonValue="CREATE A ROUTE"
      />
    </div>
  );
}
export default GetInTouchSectionBox;
